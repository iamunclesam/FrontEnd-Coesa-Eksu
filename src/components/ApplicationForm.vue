<template>
  <main>


    <div class="md:p-40 md:pt-10 p-5">
      <div class="">
       <div class="grid grid-cols-1 md:grid-cols-2">
        <p class="text-md py-10">Become a member of the COESA-TECH team, We are excited to have you here. join us in shaping the future of technology. Pls fill out the form below to get started</p>
       </div>
      </div>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
              name</label>
            <input type="text" id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" v-model="firstName" required>
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" v-model="lastName" required>
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="text" id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" v-model="phone" required>
          </div>
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Job Title
              (optional)</label>
            <input type="tel" id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" pattern="}" v-model="jobTitle">
          </div>
          <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Years of
              experience</label>
            <input type="url" id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" v-model="yearsOfExperience" required>
          </div>
          <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GitHub or Porfolio
              URL</label>
            <input type="Url" id="visitors"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" v-model="gitHubUrl" required>
          </div>

          <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LinkedIn URL (optional)</label>
            <input type="url" id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" v-model="linkedInUrl">
          </div>
          <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technical
              Skills</label>
            <input type="Url" id="visitors"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" v-model="skills" required>
          </div>
        </div>

        <div class="mb-3">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe a Project you've worked on</label>
          <textarea id="message" rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="" v-model="latestProject"></textarea>
        </div>
        <div>
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What interest you in joining the team?</label>
          <textarea id="message" rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="" v-model="teamInterest"></textarea>
        </div>


        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required>
          </div>
          <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a
              href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
        </div>
        <button type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click.prevent="submit">Submit</button>
      </form>
    </div>

    <Footer />
  </main>
</template>

<script>

import { db } from '@/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { toast } from 'vue3-toastify';


export default {
  components: {  },

  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      jobTitle: '',
      gitHubUrl: '',
      linkedInUrl: '',
      yearsOfExperience: '',
      skills: '',
      latestProject: '',
      teamInterest: ''
    }
  },


  methods: {
    async submit() {
      try {
        const applicationCollection = collection(db, "Application");
        const applicationRef = await addDoc(applicationCollection, {
          firstName : this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          jobTitle: this.jobTitle,
          gitHubUrl: this.gitHubUrl,
          linkedInUrl: this.linkedInUrl,
          yearsOfExperience: this.yearsOfExperience,
          skills: this.skills,
          latestProject: this.latestProject,
          teamInterest: this.teamInterest
        })
        console.log(applicationRef);
        toast.success("application submitted")
      }

      catch(err){
        console.log("Error sending application", err)
        toast.error("Error occured, Try again")
      }
      }
  }
}
</script>

<style></style>