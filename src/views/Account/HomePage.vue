<template>
   <fullPageLoader :isLoading="isLoading" />
   <navbarVue />

   <div class="">
      <div class="md:p-0 sm:ml-60 p-5">
         <div class="rounded-lg ">
            <div class="grid grid-cols-1 lg:grid-cols-3" style="height: 80px !important">
               <div class="lg:col-span-2 md:mx-10 head md:mt-20 mt-0">
                  <h3 class="py-2 pb-4 text-2xl font-extrabold">Hello, {{ userDetails[0].firstName }}</h3>
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

                           <div class="bg-green-900 text-white rounded-full  text-center mt-1 mx-auto text-sm md:hidden lg:block"
                              style="width: 20px; height: 20px;">
                              0
                           </div>
                        </div>

                        <div class="col bg-gray-900 px-3 py-5 text-white rounded md:flex justify-between">
                           <div class="md:flex">
                              <div class="flex justify-center md:block">
                                 <Icon icon="mingcute:task-fill" width="25" class="mt-1 lg:mr-1" />
                              </div>

                              <h4 class="font-bold md:text-2xl text-center">Tasks</h4>
                           </div>

                           <div class="bg-green-900 text-white rounded-full  text-center mt-1 mx-auto  text-sm md:hidden lg:block"
                              style="width: 20px; height: 20px;">
                              {{ tasks.length }}
                           </div>
                        </div>


                        <div class="col bg-gray-900 px-3 py-5 text-white rounded lg:flex justify-between">
                           <div class="lg:flex">
                              <div class="flex justify-center md:block">
                                 <Icon icon="clarity:note-solid" width="25" class="mt-1 mr-1" />
                              </div>

                              <h4 class="font-bold lg:text-2xl text-center">Notes</h4>
                           </div>

                           <div class="bg-green-900 text-white rounded-full  text-center mt-1 text-sm mx-auto md:hidden lg:block"
                              style="width: 20px; height: 20px;">
                              {{notes.length}}
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
                        <RouterLink to="/user/gpa-calculator">
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

                                 <h4 class="font-bold md:text-2xl text-sm mt-3">GPA</h4>
                              </div>
                           </div>
                        </RouterLink>


                        <RouterLink to="/user/ai-writer">
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

                                 <h4 class="font-bold md:text-2xl text-sm mt-3">Ai-Writer</h4>
                              </div>
                           </div>
                        </RouterLink>

                        <RouterLink to="/user/notes">
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
                        </RouterLink>
                     </div>
                  </div>

                  <div class="app my-10">
                     <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
                        <div class="col">
                           <div class="flex items-center justify-between mb-4">
                              <h5 class="md:text-3xl text-2xl font-bold leading-none text-gray-900 ">Courses</h5>
                              <router-link to="/user/learning"
                                 class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                 View all
                              </router-link>
                           </div>
                           <div class="courses my-5">
                              <div class="w-full max-w-md p-0 bg-white rounded-lg">

                                 <Carousel :items-to-show="3.5" class="hidden md:block lg:block">
                                    <Slide v-for="course in courses" :key="course" class="w-full">
                                       <div class="carousel__item my-5">
                                          <div class="bg-white rounded-lg shadow-lg mx-2 ">
                                             <img :src="course.imageUrl" alt="" class="w-full h-48 object-cover">
                                             <div class="p-4">
                                                <h3 class="text-md font-semibold text-gray-800"><router-link
                                                      to="/signin">{{ course.title }}</router-link></h3>
                                                <div class="mt-4 flex justify-between items-center">
                                                   <div class="text-sm text-gray-500">Instructor: John Doe</div>
                                                   <div class="text-sm text-gray-500">Duration: 4 weeks</div>
                                                </div>
                                                <div class="mt-4">
                                                   <a href="#" class="text-blue-500 hover:underline">Learn More</a>
                                                </div>
                                             </div>
                                          </div>

                                       </div>
                                    </Slide>

                                    <template #addons>
                                       <Navigation />
                                    </template>
                                 </Carousel>
                              </div>

                           </div>
                        </div>


                     </div>

                  </div>

                  <footerVue />

               </div>


               <div class="col-span-1 hidden  md:hidden lg:block bg-gray-50 border  border-l-gray-200 border-3">
                  <div class="events lg:fixed">
                     <div class="panel">
                        <!-- <div class="border-b border-gray-200 dark:border-gray-700 mt-14 bg-white">
                           <ul
                              class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                              <li class="mr-2">
                                 <a href="#"
                                    class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                    <svg
                                       class="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                       aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                       viewBox="0 0 20 20">
                                       <path
                                          d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>Profile
                                 </a>
                              </li>
                              <li class="mr-2">
                                 <a href="#"
                                    class="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                                    aria-current="page">
                                    <svg class="w-4 h-4 mr-2 text-blue-600 dark:text-blue-500" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                       <path
                                          d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>Dashboard
                                 </a>
                              </li>
                              <li class="mr-2">
                                 <a href="#"
                                    class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                    <svg
                                       class="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                       aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                       viewBox="0 0 20 20">
                                       <path
                                          d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
                                    </svg>Settings
                                 </a>
                              </li>
                              <li class="mr-2">
                                 <a href="#"
                                    class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                    <svg
                                       class="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                       aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                       viewBox="0 0 18 20">
                                       <path
                                          d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                    </svg>Contacts
                                 </a>
                              </li>
                              <li>
                                 <a
                                    class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
                              </li>
                           </ul>
                        </div> -->

                        <div class="content p-3 mt-16 w-full">
                           <h1 class="text-3xl">Todays Task</h1>
                           <small class="text-gray-500">{{ formattedDate }}</small>


                           <div class="text-sm font-medium text-center text-gray-500 dark:text-gray-400  w-full mt-2">
                              <!-- <ul class="flex flex-wrap -mb-px">
                                 <li class="mr-2">
                                    <a href="#"
                                       class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">All</a>
                                 </li>
                                 <li class="mr-2 ">
                                    <a href="#"
                                       class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                                       aria-current="page">Today</a>
                                 </li>
                                 <li class="mr-2">
                                    <a href="#"
                                       class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Complete</a>
                                 </li>

                              </ul> -->
                           </div>


                           <div class="" v-if="tasks.length > 0">
                              <!-- <div v-for="(note, index) in notes" :key="index" class="mb-2 mt-4">
                                <div class="bg-white p-8 text-sm text-gray-500 font-light rounded"
                                    style="white-space: pre-line;">
                                    <h1 class="text-xl font-extrabold mb-3 text-gray-900">{{ note.title }}</h1>
                                    {{ note.body }}

                                    <br />
                                    <button @click="deleteNote(note.id)" class="ml-2 text-blue-500 mt-10">Edit</button>
                                    <button @click="deleteNote(note.id)" class="ml-2 text-red-500 mt-10">Delete</button>

                                </div>
                            </div> -->


                              <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-10">
                                 <li class="mb-10 ml-4" v-for="(task, index) in tasks" :key="index">
                                    <div
                                       class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                                    </div>
                                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{
                                       task.formattedDate }}</time>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-black">{{ task.title }}</h3>
                                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ task.body }}
                                    </p>
                                    <button @click="deleteNote(task.id)" class="ml-2 text-blue-500 mt-10">Edit</button>
                                    <button @click="deleteNote(task.id)" class="ml-2 text-red-500 mt-10">Delete</button>
                                 </li>

                              </ol>


                           </div>

                           <div class="" v-else>
                              <div class="flex justify-center">
                                 <h1 class="text-gray-300 text-4xl mt-20">You have no Task</h1>
                              </div>
                           </div>

                        </div>
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
import { format } from 'date-fns'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import fullPageLoader from '../../components/fullPageLoader.vue'

export default {
   components: {
      Icon,
      footerVue,
      navbarVue,
      Carousel,
      Slide,
      Navigation,
      fullPageLoader
   },

   data() {
      return {
         courses: [],
         userDetails: [],
         notes: [],
         tasks: [],
         isLoading: true,
         currentDate: new Date()

      }
   },

   computed: {
      userProfile() {
         return this.$store.state.user;
      },

     formattedDate(){
         const date = this.currentDate // Convert Firestore timestamp to JavaScript Date
         const formattedDate = format(date, 'MMMM d, yyyy');
         return formattedDate
     }
   },

   async created() {
      const userProfile = this.$store.state.user;
      console.log(userProfile);

      if (userProfile && userProfile.email) {
         try {
            const querySnapshot = await getDocs(collection(db, 'Users')); // Assuming 'users' is your Firestore collection name
            querySnapshot.forEach((doc) => {
               const userData = doc.data();
               if (userData.email === userProfile.email) {
                  // Found the user with the matching email
                  this.userDetails.push(userData);
                  // if(this.userDetails) {
                  //    this.isLoading = false
                  // }

                  // else {
                  //    this.isLoading = true
                  // }

                  setTimeout(() => {
                     // After data is fetched, set isLoading to false to hide the loader
                     this.isLoading = false;
                  }, 2500); // Simulating a 2-second delay for fetching data
               }
            });
         } catch (error) {
            console.error('Error fetching user profile:', error);
         }
      }
   },


   mounted() {
      this.fetchCourse()
      this.fetchUser()
      this.fetchUserTasks()
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


      async fetchUser() {
         const userEmail = this.userProfile;
         const userCollection = collection(db, 'Users');
         const userRef = await getDocs(userCollection);

         let userId = null;
         userRef.forEach((userDoc) => {
            const userData = userDoc.data();
            // console.log(userData, userEmail);
            if (userData.email === userEmail.email) {
               userId = userData.id,
                  console.log(userId);
            }

            else {
               console.log("User not found");
            }
         });
         this.fetchUserTasks(userId)
         this.fetchUserNotes(userId)
         // return userId
      },


      async fetchUserTasks(id) {
         const userId = id;
         try {
            // Fetch all notes from the 'Note' collection
            const taskCollection = collection(db, 'Tasks');
            const querySnapshot = await getDocs(taskCollection);

            querySnapshot.forEach((doc) => {
               const taskData = doc.data();

               // Check if the user ID matches the current user's ID
               if (taskData.userId === userId) {
                  const date = taskData.createdAt.toDate(); // Convert Firestore timestamp to JavaScript Date
                  const formattedDate = format(date, 'MMMM d, yyyy');
                  this.tasks.push({ id: doc.id, ...taskData, formattedDate });
               }
            });

            console.log('User Task:', this.tasks);
         } catch (error) {
            console.error('Error fetching notes: ', error);
         }
      },

      sanitizeTitle(title) {
         // Replace spaces and special characters with dashes
         return title.toLowerCase().replace(/[^\w-]+/g, '-');
      },

      async fetchUserNotes(id) {
      const userId = id;
      try {
        // Fetch all notes from the 'Note' collection
        const noteCollection = collection(db, 'Notes');
        const querySnapshot = await getDocs(noteCollection);

        querySnapshot.forEach((doc) => {
          const noteData = doc.data();

          // Check if the user ID matches the current user's ID
          if (noteData.userId === userId) {
            this.notes.push({ id: doc.id, ...noteData });
          }
        });

        console.log('User Notes:', this.notes);
      } catch (error) {
        console.error('Error fetching notes: ', error);
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
}
</style>