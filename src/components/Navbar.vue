<template>
    <div
        class=" bg-white text-gray-900 py-5 6 md:px-10 px-5  md:flex justify-between border border-bottom items-center top-0 z-50 sticky md:relative ">
        <div class="flex items-center">
            <span class="flex text-primary text-xl mr-1 md:ml-6">
                <img src="@/assets/img/logo.png" class="h-12 mr-3" alt="Coesa Logo" />
               <h3 class="md:text-2xl text-2xl pt-2 font-extrabold md:text-center text-center">COESA-EKSU</h3>
            </span>
        </div>



        <span @click="MenuOpen()" class="absolute md:hidden right-6 top-6 cursor-pointer text-4xl text-green-500">
            <icon :icon="open ? 'bi-x' : 'bi-list'"></icon>
        </span>
        <ul class="md:flex md:bg-white-100 md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static relative
        md:w-auto w-full top-5 duration-700 ease-in" :class="[open ? 'left-0' : 'hidden']">
            <li class="md:mx-4 md:my-0 my-6" v-for="links in Links" :key="links.name">
                <!-- <a :href="links.Link" >
                </a> -->

                <RouterLink :to="links.Link" class="text-xl  link-underline link-underline-black">{{ links.name }}</RouterLink>
            </li>
            <RouterLink to="/signup"><Button theme="primary" content="Sign up/Sign in" /></RouterLink>
        </ul>



    </div>
</template>

<script>
import { ref } from "vue"
import { Icon } from '@iconify/vue';
import Button from "@/components/utilities/Button.vue"
export default {
    components: {
        Button, Icon
    },
    setup() {
        let open = ref(false)
        let Links = [
            { name: "Home", Link: "/" },
            { name: "Workshop", Link: "/workshop" },
            { name: "About Us", Link: "/about-us" }, 
            { name: "Contact", Link: "/contact" },
        ]

        function MenuOpen() {
            open.value = !open.value
        }
        return { Links, open, MenuOpen }
    }
}
</script>



<style lang="scss" scoped>
.link-underline {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
    background-size: 0 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size .5s ease-in-out;
}

.link-underline-black {
    background-image: linear-gradient(transparent, transparent), linear-gradient(#7DAB2E, #7DAB2E)
}

.link-underline:hover {
    background-size: 100% 3px;
    background-position: 0 100%
}
</style>