
<template>
    <Navbar />

    <div class="md:p-4 sm:ml-64">
        <div class="mt-20">

            <div class="px-5">
                <breadcrumbVue />
            </div>
            <div class="ad my-5 p-0 px-5 rounded">
                <h1 class="mb-10 text-5xl">My Learning</h1>
            </div>

            <div class="border border-gray-300 p-5 m-5 flex justify-between items-center">
  <div class="flex space-x-4">
    <!-- Sort By Dropdown -->
    <div class="relative">
      <select class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500">
        <option>Sort By</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M8.293 10.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-1.293-1.293V17a1 1 0 11-2 0v-4.586l-1.293 1.293a1 1 0 01-1.414-1.414l3-3z"/>
          <path d="M3 2a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
        </svg>
      </div>
    </div>

    <!-- Filter By Dropdown -->
    <div class="relative">
      <select class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500">
        <option>Filter By</option>
        <option>Option A</option>
        <option>Option B</option>
        <option>Option C</option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M8.293 10.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-1.293-1.293V17a1 1 0 11-2 0v-4.586l-1.293 1.293a1 1 0 01-1.414-1.414l3-3z"/>
          <path d="M3 2a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
        </svg>
      </div>
    </div>
  </div>

  <!-- Search Bar -->
  <div class="relative hidden md:block lg:block">
    <input type="text" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M14.293 5.293a6 6 0 10-8.585 8.586l-3.854 3.853a1 1 0 001.414 1.414l3.853-3.854a6 6 0 008.586-8.586l-3.853 3.854a1 1 0 01-1.414-1.414l3.854-3.853z"/>
      </svg>
    </div>
  </div>
</div>


            <div class="grid grid-cols-1 md:grid-cols-4 gap-5 px-5">
                <!--  course card -->

                <div class="max-w-sm bg-white " v-for="(course, index) in courses" :key="index">
                    <a href="#">
                        <img class="" :src="course.imageUrl" alt="" />
                    </a>
                    <div class="py-3">
                        <a href="#">
                            <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 line-clamp-2"> <router-link
                                    :to="`/user/learning/${sanitizeTitle(course.title)}`"> {{ course.title }}</router-link>
                            </h5>
                        </a>
                        <p class="mb-0 font-normal text-gray-700 dark:text-gray-400"></p>
                        <div class="flex my-2">
                            <Icon icon="ph:star-fill" color="gold" />
                            <Icon icon="ph:star-fill" color="gold" />
                            <Icon icon="ph:star-fill" color="gold" />
                            <Icon icon="ph:star-fill" color="gold" />
                        </div>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Start Course
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
    
<script>
import Navbar from '../../../components/utilities/accountComponents/navbar.vue'
import axios from 'axios';
import breadcrumbVue from '../../../components/utilities/accountComponents/breadcrumb.vue';
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Icon } from '@iconify/vue';


export default {

    components: {
        Navbar,
        breadcrumbVue,
        Icon
    },

    data() {
        return {
            courseCode: '',
            grade: '',
            unit: '',
            courses: [],
            semester: 'First Semester',
            gpaOne: '',
            gpaTwo: '',
            cgpaResult: '',
            chart: null,
        };
    },

    mounted() {
        this.fetchCourse()
    },

    methods: {
        async fetchCourse() {
            try {
                const querySnapshot = await getDocs(collection(db, 'Courses'));
                this.loading = false
                this.courses = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            } catch (error) {
                console.error('Error fetching item list:', error);
            }
        },


        sanitizeTitle(title) {
            // Replace spaces and special characters with dashes
            return title.toLowerCase().replace(/[^\w-]+/g, '-');
        }
    },
};
</script>
  
<style scoped>
/* Add any additional CSS styles here if needed */
</style>
  