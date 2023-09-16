<template>
<navbarVue />

   <div class="md:p-4 sm:ml-64">
      <div class="p-4 rounded-lg  mt-14">
         <div class="grid grid-cols-1 lg:grid-cols-4 h-20" style="height: 80px !important">
            <div class="lg:col-span-3 md:mx-10 head">
               <h3 class="py-2 pb-4 text-2xl font-extrabold">Hello, Adeyemi</h3>
               <div class="group">
                  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                     <g>
                        <path
                           d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                        </path>
                     </g>
                  </svg>
                  <input placeholder="Search" type="search" class="input">

               </div>

               <div class="app mt-4">
                  <h3 class="text-gray-500 font-extrabold md:text-3xl text-2xl"></h3>
                  <div class="grid grid-cols-3 my-4 gap-4">
                     <div class="col bg-gray-900 px-3 py-5 text-white rounded lg:flex justify-between">
                        <div class="lg:flex">
                           <div class="flex justify-center md:block">
                              <Icon icon="dashicons:welcome-learn-more" width="25" class="mt-1 md:mr-1" />
                           </div>
                           <h4 class="font-bold text-center md:text-left text-sm md:text-2xl">Courses</h4>
                        </div>

                        <div class="bg-green-900 text-white rounded-full  text-center mt-1 hidden md:hidden lg:block"
                           style="width: 25px; height: 25px;">
                           1
                        </div>
                     </div>

                     <div class="col bg-gray-900 px-3 py-5 text-white rounded md:flex justify-between">
                        <div class="md:flex">
                           <div class="flex justify-center md:block">
                              <Icon icon="mingcute:task-fill" width="25" class="mt-1 lg:mr-1" />
                           </div>

                           <h4 class="font-bold md:text-2xl text-center">Tasks</h4>
                        </div>

                        <div class="bg-green-900 text-white rounded-full  text-center mt-1  hidden md:hidden lg:block"
                           style="width: 25px; height: 25px;">
                           10
                        </div>
                     </div>


                     <div class="col bg-gray-900 px-3 py-5 text-white rounded lg:flex justify-between">
                        <div class="lg:flex">
                           <div class="flex justify-center md:block">
                              <Icon icon="clarity:note-solid" width="25" class="mt-1 mr-1" />
                           </div>

                           <h4 class="font-bold lg:text-2xl ">Notes</h4>
                        </div>

                        <div class="bg-green-900 text-white rounded-full  text-center mt-1  hidden md:hidden lg:block"
                           style="width: 25px; height: 25px;">
                           1
                        </div>
                     </div>

                  </div>
               </div>

               <div class="ad my-5 p-0 px-5 bg-blue-900 rounded">
                  <div class="grid grid-cols-2">
                     <div class=" md:pt-20 pt-5">
                        <h3 class="md:text-4xl text-lg font-extrabold text-white">Coesa Chat Feature Coming Soon</h3>
                     </div>

                     <div class="">
                        <img src="../../assets/img/ad-1.png" class="">
                     </div>
                  </div>
               </div>

               <div class="app my-10">
                  <h3 class="text-gray-900 font-extrabold md:text-3xl text-2xl">Coesa Tools</h3>
                  <div class="grid grid-cols-3 my-4 gap-4">
                     <div class="col bg-purple-900 px-3 py-5 text-white rounded">
                        <div class=" text-center">
                           <div class="justify-center hidden md:flex lg:flex">
                              <Icon icon="carbon:calculator-check" width="75"
                                 class="mt-1 mr-1 text-center rounded-full bg-purple-500 p-4" />
                           </div>

                           <div class="flex justify-center md:hidden lg:hidden">
                              <Icon icon="carbon:calculator-check" width="45"
                                 class="mt-1 mr-1 text-center rounded-full bg-purple-500 p-2" />
                           </div>

                          <RouterLink to="/user/gpa-calculator"> <h4 class="font-bold md:text-2xl text-sm mt-3">GPA</h4></RouterLink>
                        </div>
                     </div>

                     <div class="col bg-blue-900 px-3 py-5 text-white rounded">
                        <div class=" text-center">
                           <div class=" justify-center  hidden md:flex lg:flex">
                              <Icon icon="eos-icons:ai" width="75"
                                 class="mt-1 mr-1 text-center rounded-full bg-blue-500 p-4" />
                           </div>

                           <div class="flex justify-center md:hidden lg:hidden">
                              <Icon icon="eos-icons:ai" width="45"
                                 class="mt-1 mr-1 text-center rounded-full bg-blue-500 p-2" />
                           </div>

                           <h4 class="font-bold md:text-2xl text-sm mt-3">AI Writer</h4>
                        </div>
                     </div>


                     <div class="col bg-yellow-900 px-3 py-5 text-white rounded">
                        <div class=" text-center">
                           <div class=" justify-center hidden md:flex lg:flex">
                              <Icon icon="ph:note-fill" width="75"
                                 class="mt-1 mr-1 text-center rounded-full bg-yellow-500 p-4" />
                           </div>

                           <div class="flex justify-center md:hidden lg:hidden">
                              <Icon icon="ph:note-fill" width="45"
                                 class="mt-1 mr-1 text-center rounded-full bg-yellow-500 p-2" />
                           </div>

                           <h4 class="font-bold md:text-2xl text-sm mt-3">Note</h4>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="app my-10">
                  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                     <div class="col">
                        <div class="flex items-center justify-between mb-4">
                           <h5 class="md:text-3xl text-2xl font-bold leading-none text-gray-900 ">Courses</h5>
                           <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                              View all
                           </a>
                        </div>
                        <div class="courses my-5">
                           <div class="w-full max-w-md p-0 bg-white rounded-lg">

                              <div class="flow-root">
                                 <ul role="list" class="divide-y ">
                                    <li class="my-2 py-3 sm:py-4 shadow rounded p-3" v-for="course in courses"
                                       :key="course.id">
                                       <div class="flex items-center space-x-4">
                                          <div class="flex-shrink-0">
                                             <img class="w-20 object-cover h-20 rounded" :src="course.imageUrl"
                                                alt="Neil image">
                                          </div>
                                          <div class="flex-1 min-w-0">
                                             <p class="text-md font-medium text-gray-900">
                                                {{ course.title }}
                                             </p>
                                             <p class="text-sm text-i text-gray-500 truncate dark:text-gray-400">
                                                by {{ course.instructors[0].value }}
                                             </p>
                                          </div>

                                       </div>
                                    </li>


                                 </ul>
                              </div>
                           </div>

                        </div>
                     </div>


                     <div class="col">
                        <div class="flex items-center justify-between mb-4">
                           <h5 class="md:text-3xl text-2xl font-bold leading-none text-gray-900 ">Tasks</h5>
                           <a data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button"
                              class="btn text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                              Create task
                           </a>
                        </div>

                        <!-- Modal toggle -->




                        <div class="courses my-5">
                           <div class="w-full max-w-md p-0 bg-white rounded-lg">

                              <div class="flow-root">
                                 <!-- <div class="group-2 mb-5">
                                    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                                       <g>
                                          <path
                                             d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                          </path>
                                       </g>
                                    </svg>
                                    <input placeholder="Search" type="search" class="input">
                                    <Icon icon="iconamoon:send-fill" color="gray" width="30" class="mt-1 md:mr-1 icon-2" />
                                 </div> -->



                                 <div class="flex">
                                    <div class="flex items-center h-5">
                                       <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox"
                                          value=""
                                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    </div>
                                    <div class="ml-2 text-sm">
                                       <label for="helper-checkbox"
                                          class="font-medium text-gray-900 dark:text-gray-700">Free shipping via
                                          Flowbite</label>
                                       <p id="helper-checkbox-text"
                                          class="text-xs font-normal text-gray-500 dark:text-gray-500">For orders shipped
                                          from $25 in books or $29 in other categories</p>
                                    </div>
                                 </div>

                              </div>
                           </div>

                        </div>
                     </div>
                  </div>

               </div>

               <footerVue />

            </div>


            <div class="col-span-1 hidden md:hidden lg:block">
               <div class="events lg:fixed  bg-gray-100 p-3 rounded-lg">
                  <div class="w-full max-w-md p-0  ">
                     <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 ">Upcoming Events</h5>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                           View all
                        </a>
                     </div>
                     <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                           <li class="py-3 sm:py-4">
                              <div class="flex items-center space-x-4">
                                 <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded" src="../../assets/img/sign-up.jpg" alt="Neil image">
                                 </div>
                                 <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate">
                                       Coesa Award Night
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                       email@windster.com
                                    </p>
                                 </div>
                                 <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                    visit
                                 </div>
                              </div>
                           </li>

                        </ul>
                     </div>
                  </div>

               </div>




               <div class="events lg:fixed lg:bottom-0 mt-10 mb-20  bg-gray-100 p-3 rounded-lg">
                  <div class="w-full max-w-md p-0 ">
                     <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 ">Notifications</h5>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                           View all
                        </a>
                     </div>
                     <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                           <li class="py-3 sm:py-4">
                              <div class="flex items-center space-x-4">
                                 <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded" src="../../assets/img/sign-up.jpg" alt="Neil image">
                                 </div>
                                 <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate">
                                       Coesa Award Night
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                       email@windster.com
                                    </p>
                                 </div>
                                 <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                    visit
                                 </div>
                              </div>
                           </li>

                        </ul>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>


   </div>
</template>

<script>
import { Icon } from '@iconify/vue'
import footerVue from '../../components/utilities/accountComponents/footer.vue'

import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import navbarVue from '../../components/utilities/accountComponents/navbar.vue'
export default {
   components: {
      Icon,
      footerVue,
      navbarVue
   },

   data() {
      return {
         courses: []
      }
   },

   mounted() {
      this.fetchEvents()
   },

   methods: {
      async fetchEvents() {
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
   }
}
</script>

<style scoped>
.group {
   display: flex;
   line-height: 28px;
   align-items: center;
   position: relative;
   max-width: 100%;
}

@media screen and (max-width: 780px) {
   .group {
      display: flex;
      line-height: 28px;
      align-items: center;
      position: relative;
      max-width: 100%;
   }
}

.group-2 {
   display: flex;
   line-height: 28px;
   align-items: center;
   position: relative;
   max-width: 100%;
}

.input {
   width: 100%;
   height: 40px;
   line-height: 28px;
   padding: 0 1rem;
   padding-left: 2.5rem;
   border: 2px solid transparent;
   border-radius: 8px;
   outline: none;
   background-color: #f3f3f4;
   color: #0d0c22;
   transition: .3s ease;
}

.input::placeholder {
   color: #9e9ea7;
}

.input:focus,
input:hover {
   outline: none;
   border-color: rgba(234, 76, 137, 0.4);
   background-color: #fff;
   box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}

.icon {
   position: absolute;
   left: 1rem;
   fill: #9e9ea7;
   width: 1rem;
   height: 1rem;
}

.icon-2 {
   position: absolute;
   right: 1rem;
   fill: #9e9ea7;
   width: 1rem;
   height: 1rem;
}</style>