
<template>
    <Navbar />

    <div class="md:p-4 sm:ml-64">

       
        <div class="mt-20 md:px-10 px-5">

          <breadcrumbVue/>
            <div class="grid grid-cols-1 md:grid-cols-1">
                <!-- Left Column -->
                <div class="col">
                    <h3 class="text-gray-900 font-extrabold text-4xl pb-10">Payment Portal</h3>
                    <form>
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">First
                                    name</label>
                                <input type="text" id="first_name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="John" required>
                            </div>
                            <div>
                                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">Last
                                    name</label>
                                <input type="text" id="last_name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Doe" required>
                            </div>
                            <div>
                                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 ">Matric No.</label>
                                <input type="text" id="company"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Flowbite" required>
                            </div>
                            <div>
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone
                                    number</label>
                                <input type="tel" id="phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                            </div>
                            
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email
                                address</label>
                            <input type="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="john.doe@company.com" required>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Amount</label>
                            <input type="text" id="password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="N2000" required>
                        </div>
                      
                        <div class="flex items-start mb-6">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value=""
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                    required>
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree
                                with the
                                <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and
                                    conditions</a>.</label>
                        </div>
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>



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
  
<style scoped>/* Add any additional CSS styles here if needed */</style>
  