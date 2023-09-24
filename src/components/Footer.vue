<template>

<footer class="bg-gray-900 text-white py-12">
  <div class="container md:px-20 px-10 mx-auto flex flex-col md:flex-row justify-between">
    <!-- About Column -->
    <div class="mb-8 md:mb-0 md:w-1/2">
     <div class="relative">
      <h3 class="text-2xl font-semibold mb-4 relative">About Us</h3>
      <hr class="border-green-500 w-1/4 h-0.5  my-4">
     </div>
      
      <p class="text-gray-500 md:pr-20">Our mission is to create a supportive and engaging environment that empowers students to thrive in their academic pursuits and future careers. We strive to provide valuable resources, opportunities, and a sense of community to enhance the overall student experience.</p>

      <div class="flex icon my-5">
        <div class="icon_box p-2 rounded bg-gray-900 shadow">
          <Icon icon="eva:facebook-fill" color="white"  width="20"/>
        </div>

        <div class="icon_box p-2 rounded bg-gray-900 shadow">
          <Icon icon="mdi:twitter" color="white"  width="20"/>
        </div>

        <div class="icon_box p-2 rounded bg-gray-900 shadow">
          <Icon icon="ri:instagram-fill" color="white"  width="20"/>
        </div>

        <div class="icon_box p-2 rounded bg-gray-900 shadow">
          <Icon icon="ri:whatsapp-fill" color="white"  width="20"/>
        </div>
      </div>
      
    </div>

    <!-- Quick Links Column -->
    <div class="mb-8 md:mb-0 md:w-1/3">
     <div class="relative">
      <h3 class="text-2xl font-semibold mb-4">Quick Links</h3>
      <hr class="border-green-500 w-1/4 h-0.5  my-4">
     </div>
      <ul>
        <li><a href="#" class="text-secondary-100 hover:text-indigo-500">Workshop</a></li>
        <li><a href="#" class="text-secondary-100 hover:text-indigo-500">Events</a></li>
        <li><a href="#" class="text-secondary-100 hover:text-indigo-500">About Us</a></li>
        <li><a href="#" class="text-secondary-100 hover:text-indigo-500">Sign in</a></li>
      </ul>
    </div>

    <!-- Contact Info Column -->
    <div class="md:w-1/3">
      <h3 class="text-2xl font-semibold mb-4">Contact Info</h3>
      <hr class="border-green-500 w-1/4 h-0.5  my-4">
      <div class="text-gray-300">
        <p class="mb-4 flex text-secondary-100"><Icon icon="mdi:address-marker" color="white"  class="mr-1 mt-1"/>Ekiti State University, Faculty of Engineering</p>
        <p class="mb-4 flex text-secondary-100"><Icon  icon="fluent-mdl2:world" color="white"  class="mr-1 mt-1"/> Ado-Ekiti, Ekiti, Nigeria</p>
        <p class="mb-4 flex text-secondary-100"><Icon icon="ic:round-email" color="white"  class="mr-1 mt-1"/> Email: Info@coesaeksu.com.ng</p>
        <p class="flex text-secondary-100"> <Icon icon="ph:phone-fill" color="white"  class="mr-1 mt-1"/>Phone: +234-906-944-1415 <br/> </p>
      </div>
    </div>
  </div>

  <!-- Copyright Section -->
  <div class="text-center mt-4 border-t border-secondary-100 pt-5">
    <p class="text-gray-400">&copy; 2023 Built by <span class="text-green-700">Unclesam</span>. All Rights Reserved.</p>
  </div>
</footer>
</template>

<script>

import { Icon } from '@iconify/vue';
export default {
  components: {  Icon },
  data() {
    return {
      user: {
        email: "",
        name: "",
        phone: "",
        text: "",
      },
    };
  },

  methods: {

    createUser(ContactForm) {
      console.log('creating', ContactForm);
      // call an API to Send Mail
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  background: #141414;
}

ul li {
  margin-top: 15px !important;
}

.bi-chevron-right {
  font-size: 10px;
  font-weight: 700;
  width: 100px;
}

.icon_box {
  margin: 0 3px;
}
</style>