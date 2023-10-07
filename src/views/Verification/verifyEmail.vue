<template>
  <main>
    <div class="flex justify-center align-center items-center text-center">
        <div class="md:m-40 md:mt-20 m-10 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 24 24" class="flex items-center mx-auto"><path fill="green" d="M22 6V4l-8 5l-8-5v2l8 5l8-5m0-4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h16M2 6v14h18v2H2a2 2 0 0 1-2-2V6h2Z"/></svg>
            <h1 class="md:text-6xl text-3xl">Email Confirmation</h1>
            <p class="text-gray-500 mt-10">We've sent an email to demo@gmail.com to confirm the validity of your email address. After recieving the email, follow the link provided to complete your registration</p>

            <div class="relative md:mt-20 mt-10 text-center border-none border-t-green-500">
                <p class="text-gray-500"> 
                    <button @click="resendConfirmationEmail" :disabled="resendDisabled"
                            class="mt-4 py-2 text-green-500 rounded ">
                            {{ resendDisabled ? `Resend in ${resendTimer}s` : 'Resend Confirmation Email' }}
                        </button> if you didn't receive any email.</p>
            </div>

            <RouterLink class="bg-green-500 text-white text-lg text-center mt-20 py-3 px-4 rounded" to="/signin"><button class="mt-10">Proceed to Sign In</button></RouterLink>
        </div>
    </div>
  </main>
</template>

<script>
import { auth } from '@/firebase';
import { sendEmailVerification } from "firebase/auth";
import { toast } from "vue3-toastify";

export default {
    data() {
        return {
            resendDisabled: false,
            resendTimer: 60, // Initial countdown value in seconds
        };
    },
    methods: {
        async resendConfirmationEmail() {
            try {
                const user = auth.currentUser;
                await sendEmailVerification(user);
                this.resendDisabled = true; // Disable the button
                this.startCountdown(); // Start the countdown timer
                toast.success('Confirmation email resent. Please check your inbox.');
            } catch (error) {
                console.error('Error resending confirmation email:', error);
                toast.error('An error occurred while resending the confirmation email.');
            }
        },

        startCountdown() {
            let countdown = this.resendTimer;
            const countdownInterval = setInterval(() => {
                if (countdown === 0) {
                    clearInterval(countdownInterval);
                    this.resendDisabled = false; // Re-enable the button
                } else {
                    countdown--;
                    this.resendTimer = countdown;
                }
            }, 1000); // Update countdown every second (1000 milliseconds)
        },
    },
};
</script>
  

<style>

</style>