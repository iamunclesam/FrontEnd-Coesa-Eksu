
<template>
    <Navbar />

    <div class="md:p-4 sm:ml-64">
        <div class="mt-20 md:px-10 px-5">

            <breadcrumbVue />

            <div>

                <main>


                    <div class="container mt-3">


                        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                            <div class="lg:col-span-1 md:col-span-2">
                                <img :src="item.imageUrl" alt="" class="w-full h-auto" />
                            </div>

                            <div class="lg:col-span-2 md:col-span-2">
                                <div v-if="loading">
                                    <h5>Loading......</h5>
                                </div>

                                <div v-else>
                                    <h3 class="mt-2 font-extrabold md:text-3xl">{{ item.title }}</h3>
                                    <p class="text-secondary my-2 text-gray-400 text-sm">By {{ item.instructors[0].value }}
                                    </p>
                                    <span class="badge text-bg-primary mb-3">{{ item.category }}</span>
                                    <p class="text-gray-700">{{ item.description }}</p>
                                    <div class="flex items-center">
                                        <div class="flex">
                                            <Icon icon="ph:star-fill" color="gold" />
                                            <Icon icon="ph:star-fill" color="gold" />
                                            <Icon icon="ph:star-fill" color="gold" />
                                            <Icon icon="ph:star-fill" color="gold" />
                                            <Icon icon="ph:star-half-fill" color="gold" />
                                        </div>

                                        <span class="pl-1">(4.5 rating)</span>
                                    </div>

                                    <div class="block md:hidden lg:hidden my-3">
                                        <button type="button"
                                            class="bg-gray-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                                            @click="addCourse">Add Course</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="about my-5">
                            <h2 class="font-extrabold text-3xl mt-8">About This Course</h2>
                            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
                                <div class="lg:col-span-2 md:col-span-1">
                                    <div class="mt-3 pr-3 about-course text-gray-700" style="padding-right: 20px;"
                                        v-html="formattedDescription"></div>

                                    <h2 class="mt-8 font-extrabold text-3xl">What To Expect</h2>
                                    <ul class="list-disc list-inside">
                                        <li v-for="thing in item.thingsToExpect" :key="thing" class="my-2 text-gray-700 text-sm">{{
                                            thing.value }}</li>
                                    </ul>

                                    <div class="icons border-t border-gray-300 py-4 px-2 flex items-center">
                                        <Icon icon="devicon:linkedin" width="25" />
                                        <Icon icon="logos:whatsapp-icon" width="25" class="mx-3" />
                                        <Icon icon="skill-icons:instagram" width="25" />
                                    </div>
                                </div>

                                <div class="lg:col-span-1 md:col-span-1">
                                    <div class="shadow-lg rounded p-5">
                                        <div class="container">
                                            <p class="date text-center">{{ formattedDate }}</p>
                                            <!-- <p class="duration text-center">{{ item.duration }}</p> -->
                                        </div>

                                        <div class="flex justify-center mt-2 items-center">
                                            <button type="button"
                                            class="bg-gray-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                                            >Add Course</button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Floating Button
        <div class="fixed bottom-0 right-0 p-3">
          <button
            class="btn btn-primary btn-lg rounded"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Add New Item"
          >
            <router-link to="/create-course" class="route"><Icon icon="ph:pencil-fill" /></router-link>
          </button>
        </div> -->
                    </div>
                </main>
            </div>

        </div>
    </div>
</template>
    
<script>
import Navbar from '../../../components/utilities/accountComponents/navbar.vue'
import axios from 'axios';
import breadcrumbVue from '../../../components/utilities/accountComponents/breadcrumb.vue';
import { db } from '@/firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { Icon } from '@iconify/vue';

export default {

    components: {
        Navbar,
        breadcrumbVue,
        Icon
    },

    data() {
        return {
            loading: true,
            item: null,
            formattedDescription: '',
            formattedDate: '',
            isLoading: true,
            registerDetails: {
                fullName: '',
                email: '',
                departmentLevel: ''
            }
        }
    },

    mounted() {
        setTimeout(() => {
            this.isLoading = false; // Set to false when your content is loaded
        }, 2000);
    },



    beforeCreate() {
        const titleParam = this.$route.params.title;
        getDocs(collection(db, 'Courses'))
            .then(querySnapshot => {
                const itemDoc = querySnapshot.docs.find(doc => this.sanitizeTitle(doc.data().title) === titleParam);

                if (itemDoc) {
                    this.item = itemDoc.data();
                    this.formattedDate = this.formatDate(this.item.date);
                    this.formattedDescription = this.formatDescription();
                    this.loading = false;
                } else {
                    console.log('Item not found');
                }
            })
            .catch(error => {
                console.error('Error fetching item details:', error);
            });
    },


    methods: {

        sanitizeTitle(title) {
            return title.toLowerCase().replace(/[^\w-]+/g, '-');
        },

        formatDescription() {
            // Split the description into paragraphs
            const paragraphs = this.item.about.split('\n\n');

            // Format each paragraph with <p> tags
            return this.formattedDescription = paragraphs.map(paragraph => `<p >${paragraph}</p>`).join('');
        },

        formatDate(date) {
            try {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = new Date(date).toLocaleDateString(undefined, options);
                return formattedDate;
            } catch (error) {
                console.error('Error formatting date:', error);
                return 'Invalid Date';
            }
        },

        async registerCourse() {
            if (this.registerDetails) {
                const registerCollection = collection(db, 'Courses/BNxBt2TPh4f2ytHMdbmf/Registered-Courses');
                await addDoc(registerCollection, {
                    courseTitle: this.$route.params.title,
                    fullName: this.registerDetails.fullName,
                    email: this.registerDetails.email,
                    departmentLevel: this.registerDetails.departmentLevel
                })

                notify({
                    title: "Course Registered",
                    text: "check your email",
                    type: 'success',
                });

                this.registerDetails.fullName = '',
                    this.registerDetails.email = '',
                    this.registerDetails.departmentLevel = ''
            }

            else {
                notify({
                    title: "Something went wrong",
                    type: 'error',
                });
            }
        }
    }
};
</script>
  
<style scoped>
/* Add any additional CSS styles here if needed */
</style>
  