<template>
    <main>
        <div class="grid grid-cols-1 md:grid-cols-2 m-0">
            <div class="col side py-5 h-screen hidden md:block">

            </div>
            <div class="col">
                <div class=" text-left md:ml-40 ml-5 md:pt-3 pt-5">
                    <p class="text-gray-300">Back to <RouterLink to="/" class="text-green-500">Home</RouterLink>
                    </p>
                </div>
                <!-- ... (previous code) -->
                <form class="bg-white md:m-20 md:mt-0 md:mb-10 mt-10 md:p-20 md:pt-10 md:pb-10 p-5 rounded ">
                    <h3 class="font-extrabold text-4xl my-5 text-left">Sign Up</h3>



                    <div class="grid grid-cols-2 gap-3">
                        <div class="mb-4">
                            <label for="name" class="block text-gray-600 font-semibold">First Name</label>
                            <input v-model="firstName" type="text" id="name" name="name"
                                class="form-input rounded mt-1 border-gray-300 block w-full" required>
                        </div>

                        <div class="mb-4">
                            <label for="name" class="block text-gray-600 font-semibold">Last Name</label>
                            <input v-model="lastName" type="text" id="name" name="name"
                                class="form-input rounded mt-1 border-gray-300 block w-full" required>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div class="mb-4">
                            <label for="name" class="block text-gray-600 font-semibold">Email</label>
                            <input v-model="email" type="email" id="name" name="name"
                                class="form-input rounded mt-1 border-gray-300 block w-full" required>
                        </div>

                        <div class="mb-4">
                            <label for="name" class="block text-gray-600 font-semibold">Matric No.</label>
                            <input v-model="matricNo" type="text" id="name" name="name"
                                class="form-input rounded mt-1 border-gray-300 block w-full" required>
                        </div>
                    </div>


                    <div class="mb-4">
                        <label for="email" class="block text-gray-600 font-semibold">Phone No.</label>
                        <input v-model="phone" type="text" id="phone" name="phone"
                            class="form-input rounded mt-1 border-gray-300 block w-full" required>
                    </div>

                    <div class="mb-4">
                        <label for="email" class="block text-gray-600 font-semibold">Password</label>
                        <input v-model="password" type="password" id="email" name="email"
                            class="form-input rounded mt-1 border-gray-300 block w-full" required>
                    </div>

                    <div class="text-center">
                        <button type="submit"
                            @click.prevent="register"
                            class="bg-green-500 text-white w-full font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                            <span v-if="!loading">Create Account</span>
                                    <span v-else>Loading...</span>   
                        </button>
                    </div>

                    <div class=" text-left md:ml-0 md:pt-5 pt-3">
                        <p class="text-gray-300">Already have an account? <RouterLink to="/signin" class="text-green-500">
                                Sign in</RouterLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
              
                firstName: '',
                lastName: '',
                email: '',
                matricNo: '',
                phone:'',
                password: '',
                loading: false
        
        }
    },

    computed: {
    generatedId() {
      // Define characters for the ID
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const idLength = 10; // Adjust the length of the ID as needed

      // Generate the ID
      let id = '';
      for (let i = 0; i < idLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
      }

      return id;
    },
  },

    methods: {
        register() {
      // Dispatch the register action with username, email, and password
      this.$store.dispatch('register', {
        id: this.generatedId,
        firstName: this.firstName,
        lastName: this.lastName,
        matricNo: this.matricNo,
        email: this.email,
        password: this.password,
        phone: this.phone
      });

      if(this.firstName == "" && this.lastName == "") {
        alert('pls fill all field')
      }
      else {
        this.loading = true
      }
      
    },
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
}
</style>