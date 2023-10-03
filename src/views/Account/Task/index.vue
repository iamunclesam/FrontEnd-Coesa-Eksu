
<template>
    <Navbar />

    <div class="bg-white md:p-0 sm:ml-64">
        <div class="mt-0">

            <!-- <breadcrumbVue class="lg:fixed ml-8 lg:-mt-5 md:pb-10 bg-white" style="max-width: 100%;" /> -->

            <div class="min-h-screen p-0">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="col rounded p-5">
                        <div class="lg:fixed">
                            <h1 class="text-3xl font-semibold mt-16 mb-4">Create Task</h1>
                            <div class="mb-4">
                                <!-- Use a textarea without borders -->
                                <input type="text"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Title" v-model="heading">
                                <textarea v-model="body"
                                    class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4"
                                    placeholder="Add a new note..." style="white-space: pre-line;" rows="10"></textarea>

                                <button type="button" class=" mt-2 text-white rounded btn bg-green-700 p-3"
                                    @click.prevent="addTask">
                                    <span v-if="!loading">Add Task</span>
                                    <span v-else>Loading...</span>

                                </button>
                            </div>
                        </div>

                    </div>

                    <div class="col bg-gray-100 ml-6 p-10 h-screen overflow-auto">
                        <h1 class="text-3xl font-semibold mt-10 mb-4">My Tasks</h1>
                        <div class="" v-if="tasks.length > 0">
                            <!-- <div v-for="(note, index) in notes" :key="index" class="mb-2 mt-4">
                                <div class="bg-white p-8 text-sm text-gray-500 font-light rounded"
                                    style="white-space: pre-line;">
                                    <h1 class="text-xl font-extrabold mb-3 text-gray-900">{{ note.title }}</h1>
                                    {{ note.body }}

                                    <br />
                                    <button @click="deleteNote(note.id)" class="ml-2 text-blue-500 mt-10">Edit</button>
                                    <button @click="deleteNote(note.id)" class="ml-2 text-red-500 mt-10">Delete</button>

                                </div>
                            </div> -->


                            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                                <li class="mb-10 ml-4" v-for="(task, index) in tasks" :key="index">
                                    <div
                                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                                    </div>
                                    <time
                                        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ task.formattedDate }}</time>
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-black">{{ task.title }}</h3>
                                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ task.body }}
                                    </p>
                                    <button @click="deleteNote(task.id)" class="ml-2 text-blue-500 mt-10">Edit</button>
                <button @click="deleteNote(task.id)" class="ml-2 text-red-500 mt-10">Delete</button>
                                </li>

                            </ol>


                        </div>

                        <div class="" v-else>
                            <div class="flex justify-center">
                                <h1 class="text-gray-300 text-4xl mt-20">You have no Task</h1>
                            </div>
                        </div>

                        <!-- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere modi enim tempore illum assumenda totam perferendis quidem provident hic repellat nobis obcaecati dicta, aut rem voluptatem sed laudantium. Provident non necessitatibus voluptate est ex, blanditiis, possimus explicabo numquam amet laborum sit ut sunt voluptatem modi quam? Quos facere nemo atque sed quia quisquam deleniti enim dignissimos quae impedit. Est libero quo, repellendus quibusdam aut perspiciatis. Commodi laborum incidunt perspiciatis odit. Mollitia aut optio odit repellat. Itaque ipsa atque, qui sed natus sit odio enim recusandae voluptatum vero dolore, quis, omnis sint! Omnis amet enim obcaecati aliquam similique iure atque pariatur! -->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
      
<script>
import Navbar from '../../../components/utilities/accountComponents/navbar.vue'
import axios from 'axios';
import breadcrumbVue from '../../../components/utilities/accountComponents/breadcrumb.vue';
import { db } from '@/firebase'
import { collection, addDoc, doc, getDocs, deleteDoc, setDoc } from 'firebase/firestore'
import {format} from 'date-fns'

export default {

    components: {
        Navbar,
        breadcrumbVue
    },

    data() {
        return {
            body: "",
            heading: "",
            tasks: [],
            loading: false,
        };
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

        userProfile() {
            return this.$store.state.user;
        },

    },

    mounted() {
        this.fetchUserTasks();
        this.fetchUser()
    },

    methods: {

        async deleteNote(noteId) {
            try {
                const noteRef = doc(db, 'notes', noteId);
                await deleteDoc(noteRef);
                this.notes = this.notes.filter((note) => note.id !== noteId);
            } catch (error) {
                console.error('Error deleting note:', error);
            }
        },

        async fetchUser() {
            const userEmail = this.userProfile;
            const userCollection = collection(db, 'Users');
            const userRef = await getDocs(userCollection);

            let userId = null;
            userRef.forEach((userDoc) => {
                const userData = userDoc.data();
                // console.log(userData, userEmail);
                if (userData.email === userEmail.email) {
                    userId = userData.id,
                        console.log(userId);
                }

                else {
                    console.log("User not found");
                }
            });
            this.fetchUserTasks(userId)
            // return userId
        },


        async addTask() {
            const userEmail = this.userProfile;
            const userCollection = collection(db, 'Users');
            const userRef = await getDocs(userCollection);
            this.loading = true;

            let userId = null;
            userRef.forEach((userDoc) => {
                const userData = userDoc.data();
                // console.log(userData, userEmail);
                if (userData.email === userEmail.email) {
                    userId = userData.id
                    console.log(userId);
                }

                else {
                    console.log("User not found", userId);
                }
            });


            if (userId) {
                const noteCollection = collection(db, 'Tasks');
                if (this.heading.trim() !== '' && this.body.trim() !== "") {
                    const noteDetails = {
                        userId: userId,
                        id: this.generatedId,
                        title: this.heading,
                        body: this.body,
                        createdAt: new Date()
                    };

                    const docRef = await addDoc(noteCollection, noteDetails);
                    this.loading = false;
                    window.location.reload(); // Reload the page
                    console.log("Data Saved Successfully");
                }

                else {
                    alert("Pls fill all field")
                }




                // setTimeout(function () {
                //   console.log("Operation will start 2 (after 2 seconds)");
                // }, 2000);

                // // Update the user document with the new note ID
                // const userDocRef = doc(db, 'Users', userId); // Assuming 'users' is the collection name for user documents
                // const userDocSnapshot = await getDoc(userDocRef);

                // if (userDocSnapshot.exists()) {
                //   const userData = userDocSnapshot.data();
                //   userData.Note.push(docRef.id); // Add the new note ID to the 'Note' array
                //   await setDoc(userDocRef, userData);
                //   console.log('Note ID added to the user document');
                // } else {
                //   console.error('User document does not exist');
                // }

                // Call the method to fetch user-specific notes
            }

            else {
                console.error('User not found');
                this.loading = false;
            }
        },

        async fetchUserTasks(id) {
            const userId = id;
            try {
                // Fetch all notes from the 'Note' collection
                const taskCollection = collection(db, 'Tasks');
                const querySnapshot = await getDocs(taskCollection);

                querySnapshot.forEach((doc) => {
                    const taskData = doc.data();

                    // Check if the user ID matches the current user's ID
                    if (taskData.userId === userId) {
                        const date = taskData.createdAt.toDate(); // Convert Firestore timestamp to JavaScript Date
                        const formattedDate = format(date, 'MMMM d, yyyy');
                        this.tasks.push({ id: doc.id, ...taskData, formattedDate });
                    }
                });

                console.log('User Task:', this.tasks);
            } catch (error) {
                console.error('Error fetching notes: ', error);
            }
        },

    }
};
</script>
    
<style scoped>/* Add any additional CSS styles here if needed */</style>
    