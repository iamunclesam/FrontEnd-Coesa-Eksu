<script >
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
import { defineComponent } from 'vue'
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Carousel, Navigation, Slide } from 'vue3-carousel'



import 'vue3-carousel/dist/carousel.css'
import { Icon } from '@iconify/vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Header,
    Carousel,
    Slide,
    Navigation,
    Icon,
    Footer
  },

  data() {
    return {
      isLoading: true,
      courses: [],
      events: []
    }
  },


  computed: {
    formatDate(date) {
      try {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateObject = new Date(date);

        if (isNaN(dateObject)) {
          console.error('Invalid date string:', date);
          return 'Invalid Date';
        }

        const formattedDate = dateObject.toLocaleDateString(undefined, options);
        return formattedDate;
      } catch (error) {
        console.error('Error formatting date:', error);
        return 'Invalid Date';
      }
    },
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false; // Set to false when your content is loaded
    }, 4000);

    this.fetchEvents()
  },

  async created() {
    try {
      const querySnapshot = await getDocs(collection(db, 'Courses'));
      this.loading = false
      this.courses = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error fetching item list:', error);
    }

  },


  methods: {

    async fetchEvents() {
      try {
        const querySnapshot = await getDocs(collection(db, 'Events'));
        this.loading = false
        this.events = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error('Error fetching item list:', error);
      }
    },

    sanitizeTitle(title) {
      // Replace spaces and special characters with dashes
      return title.toLowerCase().replace(/[^\w-]+/g, '-');
    },
  },

}
</script>

<template>
  <main>
    <!--    ABOUT SECTION  -->
    <Navbar />

    <!--    ABOUT SECTION  -->
    <Header />

    <!--    ABOUT SECTION  -->
    <section class="py-16 overflow-hidden" data-aos="fade-in">
      <div class="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <!-- Left Column (Image) -->
        <div data-aos="fade-right">
          <img src="../assets/img/about-1.jpg" alt="About Us" class="w-full h-auto rounded-lg shadow-lg" />
        </div>

        <!-- Right Column (Text) -->
        <div data-aos="fade-left">
          <h2 class="text-4xl font-semibold mb-4">About Us</h2>
          <p class="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et ante eu libero
            efficitur suscipit. Curabitur at ultricies nisl, vel venenatis tellus. Suspendisse
            tincidunt aliquam lectus id dictum. Nulla facilisi. Integer dapibus facilisis mi, nec
            luctus risus aliquam eu.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4">
            Vivamus consectetur lacinia justo, eget dictum arcu iaculis vel. Duis sed velit in nisi
            interdum feugiat. Proin eu est nec justo finibus eleifend.
          </p>

          <!-- Button -->
          <a href="#"
            class="inline-block banner mt-4 px-6 py-3 bg-gray-900 text-white text-1xl rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">Learn
            More</a>
        </div>
      </div>
    </section>



    <section class="md:p-16 p-5">
      <!-- <h1 class="text-left text-xl text-6xl text-gray-900">Learning</h1> -->
      <div class="grid grid-cols-1 md:grid-cols-2 my-5 mt-10">
        <div class="container py-10 md:py-0">
          <h1 class="text-1xl md:text-1xl text-blue-500 lg:pr-40">
            POPULAR COURSES
            <strong class="block lg:text-3xl text-xl font-extrabold py-2 text-gray-900">
              Pick a course to get started on your journey
            </strong>
          </h1>
        </div>
      </div>

      <Carousel :items-to-show="2.5" class="hidden md:block lg:block">
        <Slide v-for="course in courses" :key="course" class="w-full">
          <div class="carousel__item my-5">
            <div class="bg-white rounded-lg shadow-lg mx-2 ">
              <img :src="course.imageUrl" alt="" class="w-full h-48 object-cover">
              <div class="p-4">
                <h3 class="text-md font-semibold text-gray-800">{{ course.title }}</h3>
                <div class="mt-4 flex justify-between items-center">
                  <div class="text-sm text-gray-500">Instructor: John Doe</div>
                  <div class="text-sm text-gray-500">Duration: 4 weeks</div>
                </div>
                <div class="mt-4">
                  <a href="#" class="text-blue-500 hover:underline">Learn More</a>
                </div>
              </div>
            </div>

          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>

      <Carousel :items-to-show="1.5" class=" md:hidden lg:hidden">
        <Slide v-for="course in courses" :key="course" class="w-full">
          <div class="carousel__item my-5">
            <div class="bg-white rounded-lg shadow-lg mx-2 ">
              <img :src="course.imageUrl" alt="" class="w-full h-48 object-cover">
              <div class="p-4">
                <h3 class="text-md font-semibold text-gray-800">{{ course.title }}</h3>
                <div class="mt-4 flex justify-between items-center">
                  <div class="text-sm text-gray-500">Instructor: John Doe</div>
                  <div class="text-sm text-gray-500">Duration: 4 weeks</div>
                </div>
                <div class="mt-4">
                  <a href="#" class="text-blue-500 hover:underline">Learn More</a>
                </div>
              </div>
            </div>

          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </section>




    <section class="Md:p-16 p-5 overflow-hidden" data-aos="fade-in">
      <h1 class="text-center text-xl text-5xl text-gray-900">Our Leaders in Tech</h1>

      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Team Member 1 -->
          <div class="bg-white rounded-lg shadow-lg p-6" data-aos="fade-right">
            <img src="http://coesaeksu.com.ng/wp-content/uploads/2023/07/IMG-20230215-WA0047.jpg" alt="Team Member 1" class="w-40 h-40 object-cover mx-auto rounded-full mb-4">
            <h2 class="text-xl font-semibold text-gray-800  text-center">ENGR. BENSON</h2>
            <p class="text-gray-600  text-center">Coesa Staff Adeviser</p>
           
          </div>
          <!-- Team Member 2 -->
          <div class="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
            <img src="http://coesaeksu.com.ng/wp-content/uploads/2023/07/IMG-20230215-WA0049-removebg-preview-e1690019875752.png" alt="Team Member 2" class="w-40 h-40 mx-auto rounded-full mb-4 object-cover">
            <h2 class="text-xl font-semibold text-gray-800  text-center">ENGR. MRS. OBASANYA</h2>
            <p class="text-gray-600  text-center">Coesa Staff Adeviser</p>
           
          </div>
          <!-- Team Member 3 -->
          <div class="bg-white rounded-lg shadow-lg p-6" data-aos="fade-left">
            <img src="http://coesaeksu.com.ng/wp-content/uploads/2023/07/H.O.D_Comp_Engr_Dr.Abbey_20230722_100432-removebg-preview-e1690020112904.png" alt="Team Member 3" class="w-40 h-40 mx-auto rounded-full mb-4 object-cover">
            <h2 class="text-xl text-center font-semibold text-gray-800">DR. ABBE</h2>
            <p class="text-gray-600 text-center">Head of Department</p>
           
          </div>
          <!-- Team Member 4 -->
          <!-- <div class="bg-white rounded-lg shadow-lg p-6">
            <img src="team-member4.jpg" alt="Team Member 4" class="w-32 h-32 mx-auto rounded-full mb-4">
            <h2 class="text-xl font-semibold text-gray-800">Ella Davis</h2>
            <p class="text-gray-600">Project Manager</p>
            <div class="mt-4">
              <a href="#" class="text-blue-500 hover:underline">LinkedIn</a>
            </div>
          </div> -->
        </div>
      </div>
    </section>


    <section class="md:p-16 p-5">
      <h1 class="text-center text-xl text-6xl text-gray-900">Events</h1>

      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <!-- Event 1 -->
          <div data-aos="fade-right" class="event_card bg-white bg-cover bg-center relative rounded-lg shadow-lg p-6 text-white" v-for="event in events"
            :key="event.id"  :style="{ backgroundImage: 'url(' + event.eventDetails[0].img + ')' }">


            <div class="content">
              <h2 class="text-xl text-5xl font-semibold text-white-800 mb-4">{{ event.title }}</h2>
              <p class="text-white-600">Description:{{ event.description }}</p>
              <p class="text-white-600 my-4 flex"><Icon icon="clarity:date-solid" class="mt-1 mr-1"/> <span>Date: {{ event.date }}</span></p>
              <p class="text-white-600 mb-4 flex"><Icon icon="iconamoon:location-fill"  class="mt-1 mr-1"/> <span>Location: {{ event.venue }}</span></p>
             
              <div class="mt-4">
                <a href="#" class="text-blue-500 hover:underline">Learn More</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>






    <section class="md:p-16 p-5 overflow-hidden">
      <h1 class="text-center text-xl text-6xl text-gray-900">Meet The Coesa Team</h1>

      <section class="">
  <div class="py-4 px-4 mx-auto max-w-screen-xl lg:py-5 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
         
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
      </div> 
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-200 dark:border-gray-700" data-aos="fade-right">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar">
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 ">
                      <a href="#">Bonnie Green</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                  <ul class="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                  </ul>
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-200 dark:border-gray-700" data-aos="fade-left">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar">
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900">
                      <a href="#">Jese Leos</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">CTO</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical strategy of the flowbite platform and brand.</p>
                  <ul class="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                  </ul>
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-200 dark:border-gray-700" data-aos="fade-right">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Michael Avatar">
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900">
                      <a href="#">Michael Gough</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Senior Front-end Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Michael drives the technical strategy of the flowbite platform and brand.</p>
                  <ul class="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                  </ul>
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-200 dark:border-gray-700" data-aos="fade-left">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar">
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900">
                      <a href="#">Lana Byrd</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Marketing & Sale</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Lana drives the technical strategy of the flowbite platform and brand.</p>
                  <ul class="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>  
      </div>  
  </div>
</section>
    </section>



    <section class="md:p-16 p-5">
     
    <!-- component -->
  <div>
        <section class="text-gray-700" data-aos="fade-in">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="text-center text-xl text-6xl text-gray-900">FAQ</h1>
    
              <p class="text-base pt-5 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How Long is this site live?
                  </summary>
  
                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Can I install/upload anything I want on there?
                  </summary>
  
                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How can I migrate to another site?
                  </summary>
  
                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Can I change the domain you give me?
                  </summary>
  
                  <span class="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How many sites I can create at once?
                  </summary>
  
                  <span class="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How can I communicate with you?
                  </summary>
  
                  <span class="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>


  </main>





  <Footer />
</template>


<style lang="scss" scoped>
.event_card::before {
  background-size: cover;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.594);
  /* Adjust opacity as needed */
  z-index: 1;
  border-radius: 0.25rem;
}

.event_card .content {
  position: relative;
  z-index: 2;
}

.text-oscuro {color:#445065;}
.title {
  color: #7A7572;
}

.title::after, .title::before {
  content: '';
  position: absolute;
  right: 1.25em;
  top: 1.25em;
  width: 2px;
  height: 0.75em;
  background-color: #7A7572;
  transition: all 0.2s;
}

.title::after {
  transform: rotate(90deg);
}



.toggle:checked + .title, .toggle:checked + .title + .content {
  box-shadow: 3px 3px 6px #ddd, -3px 3px 6px #ddd;
}
.toggle:checked + .title + .content {
  max-height: 500px;
}
.toggle:checked + .title::before {
  transform: rotate(90deg) !important;
}

</style>