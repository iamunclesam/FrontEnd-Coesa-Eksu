<template>
    <header>
  
        <section class="root relative bg-contain bg-center bg-no-repeat">
  <div class="banner grid lg:grid-cols-2">
    <!-- Left Column for Text Content -->
    <div class="relative mx-auto max-w-screen-xl px-4 py-0 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div class="max-w-xl text-left p-5 pl-19 ltr:sm:text-left" data-aos="fade-up">
        <div class="container py-10 md:py-0">
          <h1 class="text-1xl md:text-1xl text-yellow-900">
            DEPARTMENT OF COMPUTER ENGINEERING
            <strong class="block lg:text-5xl text-xl font-extrabold py-5 text-gray-900">
              Welcome To Computer Engineering Department, Eksu
            </strong>
          </h1>

          <p class="mt-4 max-w-lg lg:text-1xl text-gray-700 sm:text-xl/relaxed">
            Preparing Future Innovators in Technology
          </p>

          <div class="mt-6 flex flex-wrap gap-4 text-center">
            <router-link
              to="/login"
              class="block w-full rounded bg-gray-900 px-12 py-5 text-sm font-medium text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Sign Up
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column for Image -->
    <div class="lg:block hidden">
      <img src="../assets/img/bg-3.png" alt="Image Alt Text" class="w-100 object-cover" />
    </div>
  </div>
</section>

    </header>
  
  </template>
  
  <script>
  
  import Button from "@/components/utilities/Button.vue"
  export default {
    components: { Button }
  }
  </script>
  
  <style lang="scss" scoped >
  div.banner {
    background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
    div.content {
  
      h1 {
  
        //   margin: 0;
        //   line-height:1.1;
        //   white-space:pre-wrap;
  
        //   font-wrap: wrap;
        //   font-size: 3rem;
  
      }
  
  
    }
  
  }
  
  div.banner-curve {
    position: absolute;
    left: 0;
    width: 100%;
    line-height: 0;
    direction: ltr;
    // z-index: -1;
    pointer-events: none;
    bottom: 0;
    // background: transparent;
  
    .banner-curve-fill {
      fill: white;
      -webkit-transform-origin: center;
      -ms-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
  }
  </style>
  
  