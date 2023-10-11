<template>
    <main>
        <div class="grid grid-cols-1 md:grid-cols-2 m-0">
            <div class="col side py-5 h-screen hidden md:block">

            </div>
            <div class="col">
                <div class=" text-left md:ml-40 ml-5 md:pt-5 pt-5">
                    <p class="text-gray-300">Back to <RouterLink to="/" class="text-green-500">Home</RouterLink>
                    </p>
                </div>
                <!-- ... (previous code) -->
                <form class="bg-white md:m-20 md:mt-0 md:mb-10 mt-10 md:p-20 md:pb-10 p-5 rounded ">
                    <h3 class="font-extrabold text-4xl my-5 text-left">Reset Password</h3>
                        <div class="mb-4">
                            <label for="name" class="block text-gray-600 font-semibold">Enter Email</label>
                            <input v-model="email" type="email" id="name" name="name"
                                class="form-input rounded mt-1 border-gray-300 block w-full" required>
                        </div>
                   

                    <div class="text-center">
                        <button type="submit"
                            @click.prevent="resetPassword"
                            class="bg-green-500 text-white w-full font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                            <span v-if="!loading">Submit</span>
                                    <span v-else>Loading...</span>   
                        </button>
                    </div>

                    <div class=" text-left md:ml-0 md:pt-5 pt-3">
                    <p class="text-gray-300">Don't have an account? <RouterLink to="/signup" class="text-green-500">Sign up</RouterLink>
                    </p>
                </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import { toast } from 'vue3-toastify'
import { auth } from '../firebase'

export default {
    data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    resetPassword() {
        this.loading = true
        auth.sendPasswordResetEmail(this.email)
        .then(() => {
            this.loading = false
            toast.success("We've sent you an e-mail with instructions on how to reset your password.")
        })
        .catch((err) => {
            console.log("Error reseting email", err)
            toast.error("Error resting email")
        })
    }
  }
}
</script>

<style>
* {
    margin: 0px;
}

.side {
    background: url(../assets/img/sign-up.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}</style>