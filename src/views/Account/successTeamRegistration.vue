
<template>
    <Navbar />

    <div class="md:p-4 sm:ml-64">
        <div class="md:mt-5 p-5">
            <div class="flex justify-center align-center items-center text-center">
        <div class="md:m-40 md:mt-20 m-10 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 24 24" class="flex items-center mx-auto"><path fill="green" d="M22 6V4l-8 5l-8-5v2l8 5l8-5m0-4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h16M2 6v14h18v2H2a2 2 0 0 1-2-2V6h2Z"/></svg>
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
        ChatBox
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
        addCourse() {
            const newCourse = {
                courseCode: this.courseCode,
                grade: this.grade,
                unit: this.unit,
            };
            this.courses.push(newCourse);
            this.courseCode = '';
            this.grade = '';
            this.unit = '';
        },


    },
};
</script>
  
<style scoped>
/* Add any additional CSS styles here if needed */
</style>
  