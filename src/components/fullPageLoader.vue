<template>
    <div v-if="isLoading" class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white opacity-75 z-50">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isLoading: Boolean, // Pass in isLoading as a prop to control the visibility of the loader
    },
  };
  </script>
  