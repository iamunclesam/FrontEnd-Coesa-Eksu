
<template>
    <Navbar />

    <div class="md:p-4 sm:ml-64">
        <div class="md:mt-5 p-5">
            <breadcrumbVue />
            <div class="ad my-5 p-0 px-5 bg-gray-900 rounded">
                  <div class="grid grid-cols-2">
                     <div class=" lg:pt-28 pt-5">
                        <h3 class="md:text-6xl text-lg font-extrabold text-white leading-loose">Become a Member of the team</h3>
                     </div>

                     <div class="">
                        <img src="@/assets/img/ad-1.png" class="w-50">
                     </div>
                  </div>
               </div>

               <!-- <ChatBox /> -->

              <ApplicationFormVue />
               
        </div>
    </div>
</template>
    
<script>
import Navbar from '@/components/utilities/accountComponents/navbar.vue'

import axios from 'axios';
import breadcrumbVue from '@/components/utilities/accountComponents/breadcrumb.vue';
import ApplicationFormVue from '@/components/ApplicationForm.vue';


export default {

    components: {
        Navbar,
        breadcrumbVue,

        ApplicationFormVue
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

    },
};
</script>
  
<style scoped>
/* Add any additional CSS styles here if needed */
</style>
  