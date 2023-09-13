<template>
  <main>
    <div class="grid grid-cols-1 md:grid-cols-2 m-0">
        <div class="col side py-5 h-screen hidden md:block">
            <h1>Hello World</h1>
        </div>
        <div class="col">
            <div class="my-5 text-left md:mx-28">
                  
                </div>
             <!-- ... (previous code) -->
             <form class="bg-white md:m-20 m-5 mt-10 md:p-20 p-10  rounded ">
                <h3 class="font-extrabold text-3xl my-5 text-left">Welcome to Coesa-Eksu</h3>
                <p class="text-gray-300 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, in?</p>
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
                  
                    <div class="text-center">
                        <button type="submit"
                            class="bg-green-500 text-white w-full font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Create an Account</button>
                    </div>
                </form>
        </div>
    </div>
  </main>
</template>

<script>
export default {

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