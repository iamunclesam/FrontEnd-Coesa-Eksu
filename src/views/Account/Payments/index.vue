
<template>
    <Navbar />

    <div class="md:p-4 sm:ml-64">


        <div class="mt-10 md:pt-5 mb-20 md:px-10 px-5">

            <breadcrumbVue />
            <div class="grid grid-cols-1 md:grid-cols-1">
                <!-- Left Column -->
                <div class="col">
                    <h3 class="text-gray-900 font-extrabold text-4xl pb-10">Payment Portal</h3>
                    <form>
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">First
                                    name</label>
                                <input type="text" id="first_name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="John" v-model="firstname" required>
                            </div>
                            <div>
                                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">Last
                                    name</label>
                                <input type="text" id="last_name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Doe" v-model="lastname" required>
                            </div>
                            <div>
                                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 ">Matric
                                    No.</label>
                                <input type="text" id="company"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Flowbite" v-model="matricNo" required>
                            </div>
                            <div>
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone
                                    number</label>
                                <input type="tel" id="phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="123-45-678" v-model="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                            </div>

                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email
                                address</label>
                            <input type="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="john.doe@company.com" v-model="email" required>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Amount</label>
                            <input type="text" id="password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="N2000" v-model="amount" required>
                        </div>

                        <div class="flex items-start mb-6">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value=""
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                    required>
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree
                                with the
                                <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and
                                    conditions</a>.</label>
                        </div>
                        <!-- <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> -->

                        <paystack buttonClass="'button-class btn btn-primary'" buttonText="Pay Online"
                            :publicKey="publicKey" :email="email" :amount="convertAmount" :reference="reference"
                            :onSuccess="onSuccessfulPayment" :onCanel="onCancelledPayment"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit</paystack>
                    </form>
                </div>
            </div>



        </div>
    </div>
</template>
    
<script>
import Navbar from '../../../components/utilities/accountComponents/navbar.vue'
import paystack from "vue3-paystack";
import breadcrumbVue from '../../../components/utilities/accountComponents/breadcrumb.vue';
import axios from 'axios';


export default {

    components: {
        Navbar,
        breadcrumbVue,
        paystack
    },

    data() {
        return {

            publicKey: 'pk_test_a5875f86ad8ddaf47cc9046fac01412e2514bd98',
            amount: '' , //Expressed in lowest demonitation, so 1000kobo is equivalent to 10Naira
            email: '',
            firstname: '', //optional field remember to pass as a prop of firstname if needed
            lastname: '',//optional field remember to pass as a prop of lastname if needed
            matricNo: '',
            amount: '',
            phone: ''
        };
    },

    computed: {
        reference: function () {
            // if using nanoid to generate randomRef
            // comment this out if not using nano id
            // return nanoid(15);

            //   you can use plain JS to generate random ref ID, just uncomment this section if you

            let randomRef = "";
            let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < 15; i++)
                randomRef += characters.charAt(Math.floor(Math.random() * characters.length));

            return randomRef;


        },

        convertAmount() {
            return this.amount * 100
        }
    },
    //
    methods: {
        onSuccessfulPayment: function (response) {

            const paymentData = {
                response: response,
                amount: this.convertAmount, //Expressed in lowest demonitation, so 1000kobo is equivalent to 10Naira
                email: this.email,
                firstname: this.firstname, //optional field remember to pass as a prop of firstname if needed
                lastname: this.lastname,//optional field remember to pass as a prop of lastname if needed
                matricNo: this.matricNo,
                amount: this.amount,
                phone: this.phone
            }

            axios.post('https://new-coesa-default-rtdb.firebaseio.com/payments.json', paymentData)
                .then(res => {
                    console.log(paymentData);
                    //  this.verifyTransaction(res)
                        this.amount = '', //Expressed in lowest demonitation, so 1000kobo is equivalent to 10Naira
                        this.email = '',
                        this.firstname = '', //optional field remember to pass as a prop of firstname if needed
                        this.lastname = '',//optional field remember to pass as a prop of lastname if needed
                        this.matricNo = '',
                        this.amount = '',
                        this.phone = ''
                });

            console.log(response);
        },
        onCancelledPayment: function () {
            console.log("Payment cancelled by user");
        },
    },
};
</script>
  
<style scoped>
/* Add any additional CSS styles here if needed */
</style>
  