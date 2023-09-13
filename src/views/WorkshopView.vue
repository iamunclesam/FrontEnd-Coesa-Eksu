<template>
  <main>
   <Navbar />
    <div class="container p-20">
        <h1></h1>
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