<template>
  <Navbar />
  <div class="about container md:p-40 md:pt-10 overflow-hidden">


    <div class="h-screen head">
      <div class="grid grid-cols-1 md:grid-cols-2 md:mt-20 m-5 ">
        <div class="col p-5 md:p-10 " data-aos="fade-right">
          <h1 class="font-extrabold text-6xl text-left">About us</h1>
          <p class="py-5 text-left text-gray-500 text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Maxime non nam ad quibusdam quisquam dolorum quas ducimus sunt quidem architecto! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, placeat?</p>
        </div>

        <div class="col" data-aos="fade-left">
         <div class="md:p-10 p-5">
            <img src="../assets/img/about-2.jpg" class="img-fluid  pt-0 rounded-lg" alt="">
        </div>
        
        </div>
      </div>
    </div>

   <div class="">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="col md:p-10 p-5 pt-0 shadow-md rounded border border-4 border-b-green-500 m-5 md:m-10 md:-mr-20" data-aos="fade-right">
        <h1 class="font-extrabold text-5xl text-left pt-3">Our Mission</h1>
        <p class="py-5 text-left text-gray-500 text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maxime non nam ad quibusdam quisquam dolorum quas ducimus sunt quidem architecto!</p>
      </div>

      <div class="col">

      </div>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-2 my-10">

      <div class="col">

      </div>

      <div class="col md:p-10 p-5 pt-0 shadow-md rounded border border-4 border-b-green-500 md:-ml-20 m-5 md:m-10" data-aos="fade-left">
        <h1 class="font-extrabold text-5xl text-left pt-3">Our Vision</h1>
        <p class="py-5 text-left text-gray-500 text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maxime non nam ad quibusdam quisquam dolorum quas ducimus sunt quidem architecto!</p>
      </div>
    </div>
   </div>
  </div>
</template>

<style>

.about {
  background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

background-size: cover;
}

</style>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: { Navbar }
}
</script>
