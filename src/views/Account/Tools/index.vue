
<template>
    <Navbar />

    <div class="md:p-4 sm:ml-64">
        <div class="mt-20">
            <breadcrumbVue />
            
               <h2 class="my-20 text-6xl font-extrabold flex justify-center align-center">
               Tools
               </h2>
        </div>
    </div>
</template>
    
<script>
import Navbar from '../../../components/utilities/accountComponents/navbar.vue'
import axios from 'axios';
import breadcrumbVue from '../../../components/utilities/accountComponents/breadcrumb.vue';

export default {

    components: {
        Navbar,
        breadcrumbVue
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


        async generateTextWithGPT3(prompt) {
            try {
                const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
                    prompt: prompt,
                    max_tokens: 100, // Adjust the number of tokens as needed
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': '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',
                    },
                });

                // Handle the response from GPT-3 here
                console.log(response.data.choices[0].text);
            } catch (error) {
                console.error('Error making API request:', error);
            }
        },
        //     semesterTime() {
        //         // Implement your semester change logic here
        //     },
        //     calculateGPA() {
        //         // Implement your GPA calculation logic here
        //     },
        //     calculateCGPA() {
        //         const totalGPA = parseFloat(this.gpaOne) + parseFloat(this.gpaTwo);
        //         this.cgpaResult = (totalGPA / 2).toFixed(2);
        //     },
        //     getClass() {
        //         // Implement your class calculation logic here
        //     },
        //     resetChart() {
        //         // Implement your chart reset logic here
        //     },
        // },
        // mounted() {
        //     // Initialize chart or other logic on component mount
        //     this.chart = new Chart('chart', {
        //         // Chart configuration options
        //     });
    },
};
</script>
  
<style scoped>
/* Add any additional CSS styles here if needed */
</style>
  