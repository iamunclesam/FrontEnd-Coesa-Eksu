<template>
   <nav
      class="hidden sm:block md:block lg:block fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
         <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
               <button data-drawer-target="new-sidebar" data-drawer-toggle="new-sidebar" aria-controls="new-sidebar"
                  type="button"
                  class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span class="sr-only">Open sidebar</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                     <path fill="currentColor"
                        d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
                  </svg>
               </button>
               <RouterLink to="/user" class="flex ml-2 md:mr-24">
                   <img src="../../../assets/img/logo.png" class="h-12 mr-3" alt="Coesa Logo" />
                  <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Coesa
                     Eksu</span>
               </RouterLink>
            </div>
            <div class="flex items-center">
               <div class="flex items-center ml-3">
                  <div>
                     <!-- <button type="button"
                        class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full"
                           src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                     </button> -->


                     <button type="button"
                        class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span class="sr-only">Open user menu</span>
                         <router-link to="/user/profile" v-if="userDetails.profileImg"> 
                           <img class="w-10 h-10 rounded-full object-cover border border-gray-300" 
                           :src="userDetails.profileImg" alt="user photo"> </router-link>
                           <span v-else class="pt-2 bg-purple-900 text-white text-semibold text-md rounded-full w-9 h-9" > <span v-if="firstLetter">{{ firstLetter }}</span> </span>
                     </button>
                  </div>
                  <div
                     class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                     id="dropdown-user">
                     <div class="px-4 py-3" role="none">
                        <p class="text-sm text-gray-900 dark:text-white" role="none">
                           Neil Sims
                        </p>
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                           neil.sims@flowbite.com
                        </p>
                     </div>
                     <ul class="py-1" role="none">
                        <li>
                           <a href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">Dashboard</a>
                        </li>
                        <li>
                           <a href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">Settings</a>
                        </li>
                        <li>
                           <a href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">Earnings</a>
                        </li>
                        <li>
                           <a href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">Sign out</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </nav>

   <aside id="new-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar">
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
         <ul class="space-y-2 font-medium">
            <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                     <path fill="currentColor" fill-rule="evenodd"
                        d="M12.707 2.293a1 1 0 0 0-1.414 0l-7 7l-2 2a1 1 0 1 0 1.414 1.414L4 12.414V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-9-9Z"
                        clip-rule="evenodd" />
                  </svg>
                  <span class="ml-3"><router-link to="/user">Home</router-link></span>
               </a>
            </li>
            <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                     <path fill="currentColor"
                        d="M5.754 5a3.75 3.75 0 0 0-3.75 3.75v.75H26v-.75A3.75 3.75 0 0 0 22.25 5H5.755Zm-3.75 14.25V11H26v8.25A3.75 3.75 0 0 1 22.25 23H5.755a3.75 3.75 0 0 1-3.75-3.75ZM18.25 16.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z" />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap"><router-link
                        to="/user/payments">Payments</router-link></span>

               </a>
            </li>
            <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                     <path fill="currentColor"
                        d="M10 10L2.54 7.02L3 18H1l.48-11.41L0 6l10-4l10 4zm0-5c-.55 0-1 .22-1 .5s.45.5 1 .5s1-.22 1-.5s-.45-.5-1-.5zm0 6l5.57-2.23c.71.94 1.2 2.07 1.36 3.3c-.3-.04-.61-.07-.93-.07c-2.55 0-4.78 1.37-6 3.41A6.986 6.986 0 0 0 4 12c-.32 0-.63.03-.93.07c.16-1.23.65-2.36 1.36-3.3z" />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap"><router-link
                        to="/user/learning">Learning</router-link></span>
                  <span
                     class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
               </a>
            </li>
            <!-- <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                     <path fill="currentColor"
                        d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.81 3.81 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.81 3.81 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z" />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap"><router-link to="/user/tools">Tools</router-link></span>
               </a>
            </li> -->
            <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                     <path fill="currentColor"
                        d="m10.95 18l5.65-5.65l-1.45-1.45l-4.225 4.225l-2.1-2.1L7.4 14.45L10.95 18ZM6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v12q0 .825-.588 1.413T18 22H6Zm7-13h5l-5-5v5Z" />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap"><router-link to="/user/task">Task</router-link></span>
               </a>
            </li>
            <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap"><router-link to="/user/profile">User info</router-link></span>
               </a>
            </li>
            <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
               </a>
            </li>
            <!-- <li>
               <a href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                     <path
                        d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                     <path
                        d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
               </a>
            </li> -->
         </ul>
      </div>
   </aside>



   <div
      class="menu sm:hidden lg:hidden md:hidden bg-white text-gray-900 py-5 6 md:px-10 px-5  md:flex justify-between border border-bottom items-center top-0 z-50 sticky md:relative ">
      <div class="flex items-center">
         <div class="absolute md:hidden right-6 top-4 cursor-pointer text-3xl text-gray-900">
                     <button type="button"
                        class="flex text-sm bg-gray-800 rounded-full mr-2 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span class="sr-only">Open user menu</span>
                        <router-link to="/user/profile" v-if="userDetails.profileImg"> 
                           <img class="w-10 h-10 rounded-full object-cover border border-gray-300" 
                           :src="userDetails.profileImg" alt="user photo"> 
                        </router-link>
                           
                           <span v-else class="pt-2 bg-purple-900 text-white text-semibold text-md rounded-full w-9 h-9" > <span v-if="firstLetter">{{ firstLetter }}</span> </span>
                     </button>
                  </div>
         <span class="flex text-primary text-md ml-12 md:ml-6">
            <img src="../../../assets/img/logo.png" class="h-8 mr-3" alt="Coesa Logo" />
            <h3 class="md:text-2xl text-lg  font-extrabold md:text-center text-center"><router-link to="/user">COESA-EKSU</router-link></h3>
         </span>
      </div>

      <span @click="MenuOpen()" class="absolute md:hidden left-6 top-5 cursor-pointer text-3xl text-gray-900">
         <icon :icon="open ? 'bi-x' : 'gg:menu-left'"></icon>
      </span>
      <ul class="md:flex md:bg-white-100 md:items-center md:px-0 px-2 md:pb-0 pb-10 md:static relative
        md:w-auto w-full top-5 duration-700 ease-in" :class="[open ? 'left-0' : 'hidden']">
         <li class="md:mx-4 md:my-0 my-6 text-sm" v-for="links in Links" :key="links.name">
            <!-- <a :href="links.Link" >
                </a> -->

            <RouterLink :to="links.Link" class="text-lg  link-underline link-underline-black">{{ links.name }}</RouterLink>
         </li>
         
      </ul>



   </div>
</template>

<script>
import { ref } from "vue"
import { Icon } from '@iconify/vue';
import Button from "@/components/utilities/Button.vue"
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
export default {
   components: {
      Button, Icon
   },
   setup() {
      let open = ref(false)
      let Links = [
         { name: "Home", Link: "/user" },
         { name: "Payments", Link: "/user/payments" },
         { name: "learning", Link: "/user/learning" },
         { name: "Tasks", Link: "/user/task" },
         { name: "Profile", Link: "/user/profile" },
         { name: "Sign Out", Link: "/signin" },
      ]

      function MenuOpen() {
         open.value = !open.value
      }
      return { Links, open, MenuOpen }
   },


   data() {
    return {
      firstLetter: '', // Initialize firstLetter as an empty string
      userDetails: [] // Initialize userDetails as an empty array
    };
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
            this.userDetails = userData;

            // Get the first letter of the first name
            const firstName = userData.firstName;
            if (firstName) {
              this.firstLetter = firstName.charAt(0); // Set firstLetter to the first character (letter)
            }
          }
        });
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }
  }
}
</script>



<style lang="scss" scoped>
.link-underline {
   border-bottom-width: 0;
   background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
   background-size: 0 3px;
   background-position: 0 100%;
   background-repeat: no-repeat;
   transition: background-size .5s ease-in-out;
}

.link-underline-black {
   background-image: linear-gradient(transparent, transparent), linear-gradient(#7DAB2E, #7DAB2E)
}

.link-underline:hover {
   background-size: 100% 3px;
   background-position: 0 100%
}

// .menu {
//     transform: translateX(-100%);
//     transition: transform 0.3s ease-in-out;
//     /* Add other styles for your menu here */
//   }

//   .menu.open {
//     transform: translateX(0);
//   }

</style>