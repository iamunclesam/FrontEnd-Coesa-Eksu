<template>
    <main>
        <Navbar />
        <div class="jumbotron bg-green-700 text-center text-white py-20">
    <h1 class="md:text-6xl text-4xl font-extrabold">Contact Us</h1>

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
        <div class="grid grid-cols-1 md:grid-cols-2 mt-20">
            <div class="col" data-aos="fade-right">
                <!-- Contact.vue -->
                <!-- ... (previous code) -->
               
            
                <form class="bg-white md:m-16 md:mt-0 m-5 md:p-10 p-5 ">
      
                <h5 class="text-green-900 text-2xl">
                CONTACT US
               </h5>
                    <div class="my-4">
                        <label for="name" class="block text-gray-600 font-semibold">Name</label>
                        <input v-model="name" type="text" id="name" name="name" class="form-input rounded mt-1 border-gray-300 block w-full"
                            required>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-gray-600 font-semibold">Email</label>
                        <input v-model="email" type="email" id="email" name="email" class="form-input rounded mt-1 border-gray-300 block w-full"
                            required>
                    </div>
                    <div class="mb-4">
                        <label for="message" class="block text-gray-600 font-semibold">Message</label>
                        <textarea v-model="message" id="message" name="message" rows="4"
                            class="form-textarea rounded mt-1 block w-full border-gray-300" required></textarea>
                    </div>
                    <div class="text-left">
                        <button type="submit"
                            class="bg-green-900 text-white font-semibold py-3 px-5 rounded hover:bg-green-600 transition duration-300">Submit</button>
                    </div>
                </form>
                <!-- ... (continue with the rest of your Contact.vue code) -->

            </div>

            <div class="col" data-aos="fade-left">
              <div class="md:m-10 m-5">
                <!-- <h5 class="text-green-500">
                CONTACT US
               </h5> -->
               <h1 class="text-gray-900 text-4xl">How Can We Help?</h1>
               <p class="text-gray-400  py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo sapiente, vitae iste excepturi accusantium consequuntur natus. Doloribus, nam mollitia.</p>

               <div class="w-full py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What is Computer Engineering?
                  </summary>

                  <span class="text-sm text-1xl ">
                    Computer Engineering is a discipline that combines principles of electrical engineering and computer science to design and develop computer systems and hardware components. It encompasses everything from microprocessors to software applications.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    What is the difference between Computer Science and Computer Engineering?
                  </summary>

                  <span>
                    While Computer Science primarily focuses on software and algorithms, Computer Engineering deals with both hardware and software aspects of computing systems. Computer Engineers design and build the physical components that make computers work.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What are the career prospects for Computer Engineering graduates?
                  </summary>

                  <span>
                    Computer Engineering graduates have a wide range of career opportunities, including roles in software development, hardware design, embedded systems, network engineering, cybersecurity, and more.
                  </span>
                </details>
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
    components: { Navbar, Footer }
}
</script>

<style></style>