<template>
  <main>
   <Navbar />
   <div class="jumbotron bg-green-700 text-center text-white py-20">
    <h1 class="md:text-6xl text-4xl font-extrabold">Workshop</h1>

    <div class="flex justify-center">
      <nav class="flex my-5" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a href="#"
            class="inline-flex items-center text-sm font-medium text-white hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 20 20">
              <path
                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
            <a href="#"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
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
          <h1 class="font-extrabold md:text-6xl text-3xl text-left">Lorem ipsum dolor sit amet.</h1>
          <p class="py-5 text-left text-gray-500 text-light">COESA is the official student association of the Computer
            Engineering Department under the Faculty of Engineering at Ekiti State University. </p>

          <p class="pb-5 mb-5 text-left text-gray-500 text-light">
            We are a dynamic organization committed to serving the needs and interests of computer engineering students,
            fostering academic excellence, and promoting professional growth.
          </p>

          <router-link class="bg-green-700 text-white text-md px-5 py-3 rounded" to="/">Get Started</router-link>


         
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