<template>
  
<footer class="bg-white rounded-lg light:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> -->
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">COESA-EKSU</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <router-link to="/about" class="mr-4 hover:underline md:mr-6">About</router-link>
                </li>
                <li>
                    <router-link to="/user/payments" class="mr-4 hover:underline md:mr-6">Payments</router-link>
                </li>
               
                <li>
                    <router-link to="/contact" class="mr-4 hover:underline md:mr-6">Contact</router-link>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">Unclesam</a>. All Rights Reserved.</span>
    </div>
</footer>


</template>

<script>
export default {

}
</script>

<style>

</style>