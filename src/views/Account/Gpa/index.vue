
<template>
    <Navbar />

    <div class="md:p-4 sm:ml-64">
        <div class="p-4 rounded-lg  mt-14">
            <div class="ad my-5 p-0 px-5 bg-yellow-900 rounded">
                  <div class="grid grid-cols-2">
                     <div class=" lg:pt-28 pt-5">
                        <h3 class="md:text-6xl text-lg font-extrabold text-white leading-loose">Calculate your Gpa With Efficiency</h3>
                     </div>

                     <div class="">
                        <img src="@/assets/img/ad-1.png" class="w-50">
                     </div>
                  </div>
               </div>
            <div class="grid grid-cols-1 lg:grid-cols-2  mb-20" style="">
                <div class="col md:mx-10 head">

                    <div class="">
                        <h2 class="text-xl font-semibold mt-8">GPA CALCULATOR</h2>

                        <div class="mb-3 ">
                            <label for="coursecode" class="block text-gray-600 font-semibold">Course Code</label>
                            <input type="text" class="form-input mt-1 w-full border border-gray-400 rounded" v-model="courseCode"
                                placeholder="eg: mat 101">
                        </div>

                        <div class="mb-3 my-2">
                            <label for="grade" class="block text-gray-600 font-semibold">Grade</label>
                            <input type="text" class="form-input mt-1 w-full border-gray-400 rounded" v-model="grade" placeholder="">
                        </div>

                        <div class="mb-3 my-2">
                            <label for="unit" class="block text-gray-600 font-semibold">Unit</label>
                            <input type="number" class="form-input mt-1 w-full border-gray-400 rounded" v-model="unit" placeholder="">
                        </div>

                        <button type="button"
                            class="bg-gray-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                            @click="addCourse">Add Course</button>
                    </div>


                    <footerVue />

                </div>


                <div class="col">
                    <div class="col-span-1">
                        <div class="flex justify-between mt-8">
                           <div class="">
                            <h2 class="text-xl">COURSE FORM</h2>
                            <small class="text-gray-500 text-xs"><iconify-icon icon="ph:warning-bold"></iconify-icon> GPA
                            results update in real-time as the user adds courses to the form</small>
                           </div>
                            <div class="mb-3">
                                <select class="form-select form-select-sm" v-model="semester" @change="semesterTime">
                                    <option value="First Semester">First Semester</option>
                                    <option value="Second Semester">Second Semester</option>
                                </select>
                            </div>
                        </div>
                        

                        <div class="mt-3">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400" id="table-id">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col"  class="px-6 py-3">No.</th>
                                        <th scope="col"  class="px-6 py-3">Course Code</th>
                                        <th scope="col"  class="px-6 py-3">Grade</th>
                                        <th scope="col"  class="px-6 py-3">Unit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(course, index) in courses" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td  class="px-6 py-4">{{ index + 1 }}</td>
                                        <td  class="px-6 py-4">{{ course.courseCode }}</td>
                                        <td  class="px-6 py-4">{{ course.grade }}</td>
                                        <td  class="px-6 py-4">{{ course.unit }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <span class="flex my-20 items-center justify-center text-gray-200" id="nothing"
                                v-show="courses.length === 0">No Course Added !!
                            </span>
                        </div>

                        <!-- <div class="py-3 px-3 mt-4 rounded bg-gray-200">
                            <span> Your <span>{{ semester }}</span> GPA is : <span id="result">{{ calculateGPA()
                            }}</span></span>
                            <br />
                            <span id="comment" style="font-weight: 600; font-size: 13px;"></span>
                            <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped" style="width: 0%" id="progress"></div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>

<!-- 
            <div class="grid grid-cols-1 md:grid-cols-2" data-aos="fade-up">
                <div class="col-span-2 md:col-span-1">
                    <div class="mt-4">
                        <h1 class="text-xl">CALCULATE CGPA</h1>
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div class="col-span-1 md:col-span-1">
                                <div class="mb-3 my-2">
                                    <label for="coursecode" class="block text-gray-600 font-semibold">First Semester
                                        Gpa</label>
                                    <input type="text" class="form-input mt-1 w-full" v-model="gpaOne"
                                        @input="calculateCGPA" placeholder="">
                                </div>
                            </div>
                            <div class="col-span-1 md:col-span-1">
                                <div class="mb-3 my-2">
                                    <label for="grade" class="block text-gray-600 font-semibold">Second Semester Gpa</label>
                                    <input type="text" class="form-input mt-1 w-full" v-model="gpaTwo"
                                        @input="calculateCGPA" placeholder="">
                                </div>
                            </div>
                        </div>

                        <div class="rounded shadow py-3 px-2">
                            <div class="grid grid-cols-2">
                                <div class="col-span-1">
                                    <span class="font-semibold text-lg">Your Overall Grade Point is : <span
                                            id="cgpaResult">{{ cgpaResult }}</span></span>
                                </div>
                                <div class="col-span-1">
                                    <span id="class" class="text-lg">{{ getClass() }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-2 md:col-span-1">
                    <h2 class="text-xl">TRACK PROGRESS</h2>
                    <div>
                        <canvas id="chart"></canvas>
                    </div>

                    <p id="noChart" class="mt-3" v-show="courses.length === 0">Add a course to the form to show the chart
                    </p>
                    <button type="button"
                        class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                        @click="resetChart">Reset</button>
                </div>
            </div> -->
        </div>


    </div>
</template>
    
<script>
import Navbar from '../../../components/utilities/accountComponents/navbar.vue';



export default {

    components: {
        Navbar
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
  