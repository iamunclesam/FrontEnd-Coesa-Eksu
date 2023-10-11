
<template>
<Navbar />

    <div class="md:p-4 sm:ml-64">
        <div class="md:mt-5 p-5">
            <div class="flex justify-center align-center items-center text-center">
        <div class="md:m-40 md:mt-20 m-10 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" class="flex items-center mx-auto" viewBox="0 0 1024 1024"><path fill="green" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>
            <h1 class="md:text-6xl text-3xl">Registration Successful</h1>
            <p class="text-gray-500 mt-10">Thank you for registering. We appreciate your interest. We'll review your application and get back to you via email. Stay Tuned!</p>
        </div>
    </div>
        </div>
    </div>
</template>
    
<script>
import Navbar from '@/components/utilities/accountComponents/navbar.vue'
import axios from 'axios';
import breadcrumbVue from '@/components/utilities/accountComponents/breadcrumb.vue';


export default {
    components: {
        Navbar,
        breadcrumbVue,
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
    methods: {
       


    },
};
</script>
  
<style scoped>
/* Add any additional CSS styles here if needed */
</style>
  