<template>
  <main>
   <Navbar />
   <div class="jumbotron bg-green-700 text-center text-white py-20">
    <h1 class="md:text-6xl text-4xl font-extrabold">Workshop</h1>

    <div class="flex justify-center">
      <nav class="flex my-5" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link to="/"
            class="inline-flex items-center text-sm font-medium text-white hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 20 20">
              <path
                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </router-link>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
            <a
              class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Workshop</a>
          </div>
        </li>
        
      </ol>
    </nav>
    </div>

   

  </div>




  <div class="head">
      <div class="grid grid-cols-1 md:grid-cols-2 md:m-20 md:mt-20 m-5 gap-10">
        <div class="col md:p-5 " data-aos="fade-right">
          <div class="md:p-0 ">
            <img src="../assets/coesa-pics/workshop-1.jpg" class="img-fluid h-100  pt-0 rounded-lg" alt="">
          </div>

        </div>

        <div class="col mt-5" data-aos="fade-left">
          <h1 class="font-extrabold text-sm text-left text-green-500">Workshop</h1>
          <h1 class="font-extrabold md:text-6xl text-3xl text-left">2023 Tech Workshop Session</h1>
          <p class="py-5 text-left text-gray-500 text-light">Computer Engineering Student Association presents three days workshop on UI/UX, Web Development, App Development, Game Development, and Animation. </p>

          <p class="pb-5 mb-5 text-left text-gray-500 text-light">
            Our Workshop sessions helps beginners to find which career path in tech is actually suitable for them
          </p>
<!-- 
          <router-link class="bg-green-700 text-white text-md px-5 py-3 rounded" @click="alert('2023 workshop has ended')">Register</router-link> -->


<button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button">
  Register
</button>

<div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">2023 Workshop session has ended</h3>
                <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Go Back
                </button>
                <!-- <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button> -->
            </div>
        </div>
    </div>
</div>



         
        </div>
      </div>
    </div>


    <div class="gallery py-10">
      <h1 class="text-center text-5xl text-gray-900 py-10">Gallery</h1>


      <!-- section_1 --> 
<div class="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50">
    <div class="flex flex-col md:flex-row gap-2">
        <div class="flex flex-1 flex-col gap-2">
            <div class="flex flex-1 flex-col">
                <!-- img_01 --> 
                <img class="object-cover h-full" src="../assets/coesa-pics/workshop-1.jpg">
            </div>
            <div class="hidden md:flex flex-1 flex-row gap-2">
                <div class="flex flex-1 flex-col">
                  <!-- img_02 --> 
                  <img class="object-cover h-full" src="../assets/coesa-pics/w-3.jpg">
                </div>
                <div class="hidden md:flex flex-1 flex-col">
                  <!-- img_03 --> 
                  <img class="object-cover h-full" src="../assets/coesa-pics/w-5.jpg">
                </div>
            </div>
        </div>
        <div class="flex flex-1 flex-col gap-2">
            <div class="hidden md:flex flex-1 flex-row gap-2">
                <div class="flex flex-1 flex-col">
                  <!-- img_04 -->
                  <img class="object-cover h-full" src="../assets/coesa-pics/w-2.jpg">  
                </div>
                <div class="hidden md:flex flex-1 flex-col">
                  <!-- img_05 -->
                  <img class="object-cover h-full" src="../assets/coesa-pics/w-4.jpg">
                </div>
            </div>                        
            <div class="flex flex-1 flex-col">
              <!-- img_06 -->
              <img class="object-cover h-full" src="../assets/coesa-pics/w-7.jpg">
            </div>
        </div>
    </div>
</div>

<!-- section_2 --> 
<div class="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-white">
    <div class="flex flex-col md:flex-row gap-2">
        <div class="flex flex-1 flex-col">
            <div class="flex flex-1 flex-col">
                <!-- img_01 --> 
                <img class="object-cover h-full" src='../assets/coesa-pics/w-6.jpg' alt=''>
            </div>
        </div>
        <div class="flex flex-1">
            <div class="grid grid-cols-2 gap-2">
              <div>
                <!-- img_02 -->
                <img class="object-cover h-full" src='../assets/coesa-pics/w-10.jpg' alt=''>
              </div>
              <div>
                <!-- img_03 -->
                <img class="object-cover h-full" src='../assets/coesa-pics/w-9.jpg' alt=''>
              </div>
              <div>
                <!-- img_04 -->
                <img class="object-cover h-full" src='../assets/coesa-pics/w-11.jpg' alt=''>
              </div>
              <div>
                <!-- img_05 -->
                <img class="object-cover h-full" src='../assets/coesa-pics/w-12.jpg' alt=''>
              </div>
            </div>
        </div>
    </div>
</div>

    </div>
    <Footer />
  </main>
</template>

<script>
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';



export default {
    components: {
        Navbar,
        Footer
    }
}
</script>

<style>

</style>