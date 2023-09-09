<template>
  <form  @submit.prevent="$emit('on-submit', form)">
    <div class="">
        <label for="name" class="text-sm font-medium text-secondary-100">Name</label>
        <input type="text" name="name" required v-model="form.name" class="shadow-sm bg-gray-50 border border-gray-300 text-secondary-100 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"  />

        
    </div>
    <div class="">
        <label for="email" class="text-sm font-medium text-secondary-100">Email</label>
        <input type="email" name="email" required v-model="form.email" class="shadow-sm bg-gray-50 border border-gray-300 text-secondary-100 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"  />

    </div>
    <div class="">
        <label for="phone" class="text-sm font-medium text-secondary-100">Phone Number</label>
        <input type="phone" name="phone" required v-model="form.phone" class="shadow-sm bg-gray-50 border border-gray-300 text-secondary-100 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"  />

    </div>
    <div class="sm:col-span-2">
              <label for="text" class="block mb-2 text-sm font-medium text-secondary-100 ">Your message</label>
              <textarea name="text" rows="6" class="block p-2.5 w-full text-sm text-secondary-100 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-50" placeholder="Leave a comment..." required v-model="form.text"></textarea>
          </div>
<button type="submit" class="banner w-full my-3 rounded-md ">Submit</button>
  </form>
</template>

<script>
export default {
props:['user'],

data()  {
    return{
        form: {
            email: this.user?.email ||  "",
            name: this.user?.name ||  "",
            phone: this.user?.phone ||  "",
            text: this.user?.text ||  "",
        }
    }
}
}
</script>

<style>

</style>