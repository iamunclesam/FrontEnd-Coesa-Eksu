<template>
    <main>
        <Navbar />
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="col" data-aos="fade-right">
                <!-- Contact.vue -->
                <!-- ... (previous code) -->
               <div class="m-5">
                <h5 class="text-green-900 text-2xl md:hidden lg:hidden">
                CONTACT US
               </h5>
               </div>
                <form class="bg-white md:m-28 md:mt-20 m-5 md:p-10 p-5 border-t-8 border-t-green-900 shadow-lg rounded ">
                    <div class="mb-4">
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
                    <div class="text-center">
                        <button type="submit"
                            class="bg-green-900 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Submit</button>
                    </div>
                </form>
                <!-- ... (continue with the rest of your Contact.vue code) -->

            </div>

            <div class="col" data-aos="fade-left">
              <div class="md:m-20 m-5">
                <h5 class="text-green-500">
                CONTACT US
               </h5>
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