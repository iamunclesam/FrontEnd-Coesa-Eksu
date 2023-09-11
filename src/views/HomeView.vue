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


import photo1 from '@/assets/photos/photo1.jpg';
import photo2 from '@/assets/photos/photo2.jpg';
import photo3 from '@/assets/photos/photo3.jpg';
import photo4 from '@/assets/photos/photo4.jpg';
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
      events: [],
      currentSlide: 0,
      photoPaths: [photo1, photo2, photo3, photo4],
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

    slideTo(val) {
      this.currentSlide = val
    },

    getPhotoPath(photoPath) {
      // Use require to load the photo
      return require(`@/assets/photos/${photoPath}`);
    },

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
      <h1 class="text-center text-5xl text-gray-900">Our Leaders in Tech</h1>

      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Team Member 1 -->
          <div class="bg-white rounded-lg shadow-lg p-6" data-aos="fade-right">
            <img src="http://coesaeksu.com.ng/wp-content/uploads/2023/07/IMG-20230215-WA0047.jpg" alt="Team Member 1"
              class="w-40 h-40 object-cover mx-auto rounded-full mb-4">
            <h2 class="text-xl font-semibold text-gray-800  text-center">ENGR. BENSON</h2>
            <p class="text-gray-600  text-center">Coesa Staff Adeviser</p>

          </div>
          <!-- Team Member 2 -->
          <div class="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
            <img
              src="http://coesaeksu.com.ng/wp-content/uploads/2023/07/IMG-20230215-WA0049-removebg-preview-e1690019875752.png"
              alt="Team Member 2" class="w-40 h-40 mx-auto rounded-full mb-4 object-cover">
            <h2 class="text-xl font-semibold text-gray-800  text-center">ENGR. MRS. OBASANYA</h2>
            <p class="text-gray-600  text-center">Coesa Staff Adeviser</p>

          </div>
          <!-- Team Member 3 -->
          <div class="bg-white rounded-lg shadow-lg p-6" data-aos="fade-left">
            <img
              src="http://coesaeksu.com.ng/wp-content/uploads/2023/07/H.O.D_Comp_Engr_Dr.Abbey_20230722_100432-removebg-preview-e1690020112904.png"
              alt="Team Member 3" class="w-40 h-40 mx-auto rounded-full mb-4 object-cover">
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
      <h1 class="text-center text-5xl text-gray-900">Events</h1>

      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <!-- Event 1 -->
          <div data-aos="fade-right"
            class="event_card bg-white bg-cover bg-center relative rounded-lg shadow-lg p-6 text-white"
            v-for="event in events" :key="event.id"
            :style="{ backgroundImage: 'url(' + event.eventDetails[0].img + ')' }">


            <div class="content">
              <h2 class="text-xl text-5xl font-semibold text-white-800 mb-4">{{ event.title }}</h2>
              <p class="text-white-600">Description:{{ event.description }}</p>
              <p class="text-white-600 my-4 flex">
                <Icon icon="clarity:date-solid" class="mt-1 mr-1" /> <span>Date: {{ event.date }}</span>
              </p>
              <p class="text-white-600 mb-4 flex">
                <Icon icon="iconamoon:location-fill" class="mt-1 mr-1" /> <span>Location: {{ event.venue }}</span>
              </p>

              <div class="mt-4">
                <a href="#" class="text-blue-500 hover:underline">Learn More</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>






    <section class="md:p-16 p-5 overflow-hidden">
     <div data-aos="fade-right"
            class="coesa_team bg-white relative rounded-lg shadow-lg p-6 text-white"
   
            :style="{ backgroundImage: 'url(' + this.photoPaths[3] + ')' }">

          <div class="grid grid-cols-1 md:grid-cols-2">
            
            <div class="content py-20">
              <h2 class="md:text-6xl text-4xl font-bold text-white-800 mb-4">Meet The Coesa Team</h2> 
              <p class="md:pr-20 text-secondary-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni vel totam consequatur maiores. Veritatis!</p>
              <div class="mt-4">
                <!-- Button -->
          <a href="#"
            class="inline-block banner mt-4 px-6 py-3 bg-gray-900 text-white text-1xl rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">Contact</a>
              </div>
            </div>
          </div>
          </div>
    </section>


    <section class="md:p-16 p-5">

      <!-- component -->
      <div>
        <section class="text-gray-700" data-aos="fade-in">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="text-center  text-5xl text-gray-900">FAQ</h1>

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





<Footer /></template>


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

.coesa_team::before {
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

.coesa_team {
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.event_card .content {
  position: relative;
  z-index: 2;
}

.coesa_team .content {
  position: relative;
  z-index: 2;
}

.text-oscuro {
  color: #445065;
}

.title {
  color: #7A7572;
}

.title::after,
.title::before {
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



.toggle:checked+.title,
.toggle:checked+.title+.content {
  box-shadow: 3px 3px 6px #ddd, -3px 3px 6px #ddd;
}

.toggle:checked+.title+.content {
  max-height: 500px;
}

.toggle:checked+.title::before {
  transform: rotate(90deg) !important;
}


.photo-booth, .head_booth {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

</style>