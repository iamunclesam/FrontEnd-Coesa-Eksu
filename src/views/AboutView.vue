<template>
  <Navbar />
  <div class="jumbotron bg-green-700 text-center text-white py-20">
    <h1 class="md:text-6xl text-4xl font-extrabold">About Us</h1>

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
              class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">About</a>
          </div>
        </li>
        
      </ol>
    </nav>
    </div>

   

  </div>
  <div class="about container md:p-20 md:pt-10 overflow-hidden">


    <div class="head">
      <div class="grid grid-cols-1 md:grid-cols-2 md:m-0 md:mt-20 m-5 gap-10">
        <div class="col md:p-5 " data-aos="fade-right">
          <div class="md:p-0 ">
            <img src="../assets/coesa-pics/presido-2.jpg" class="img-fluid h-100  pt-0 rounded-lg" alt="">
          </div>

        </div>

        <div class="col mt-5" data-aos="fade-left">
          <h1 class="font-extrabold text-sm text-left text-green-500">ABOUT US</h1>
          <h1 class="font-extrabold md:text-6xl text-3xl text-left">Lorem ipsum dolor sit amet.</h1>
          <p class="py-5 text-left text-gray-500 text-light">COESA is the official student association of the Computer
            Engineering Department under the Faculty of Engineering at Ekiti State University. </p>

          <p class="pb-5 mb-5 text-left text-gray-500 text-light">
            We are a dynamic organization committed to serving the needs and interests of computer engineering students,
            fostering academic excellence, and promoting professional growth.
          </p>

          <router-link class="bg-green-700 text-white text-md px-5 py-3 rounded" to="/">Get Started</router-link>


          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 flex justify-center mt-10">
        <div
          class="col p-5 pt-0 shadow-md rounded border border-b-4 border-b-green-500 bg-white "
          data-aos="fade-right">
          <h1 class="font-extrabold text-lg text-left pt-3">Our Mission</h1>
          <p class="py-5 text-left text-gray-500 text-sm">Our mission is to create a supportive and engaging
            environment that empowers students to thrive in their academic pursuits and future careers. We strive to
            
          </p>
        </div>

        
        <div
          class="col p-5 pt-0 shadow-md rounded border border-b-4 border-b-green-500 bg-white"
          data-aos="fade-left">
          <h1 class="font-extrabold text-lg text-left pt-3">Our Vision</h1>
          <p class="py-5 text-left text-gray-500 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Maxime non nam ad quibusdam quisquam dolorum quas ducimus sunt quidem architecto!</p>
        </div>
      </div>
        </div>
      </div>
    </div>

    <div class="mt-10">
      


      <div class="grid grid-cols-1 md:grid-cols-2 my-5">

        <div class="col">

        </div>

      </div>
    </div>
  </div>

  <FooterVue />
</template>

<style>
.about {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  background-size: cover;
}</style>

<script>
import FooterVue from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';



export default {
  components: { Navbar, FooterVue }
}
</script>
