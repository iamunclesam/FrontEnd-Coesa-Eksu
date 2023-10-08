
<template>
    <navbarVue />

    <div class="md:p-4 sm:ml-64">
        <div class="mt-0">
            <div class="mt-10 md:pt-5 mb-0 md:px-10 px-5">

                <breadcrumbVue />
            </div>

            <div class="md:flex p-5 md:mx-auto md:p-10">
                <div class="col">
                    <button type="button"
                        class="flex mx-auto w-full text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span class="sr-only">Open user menu</span>
                        <div v-if="userDetails[0].profileImg" class="">
                            <img class="md:w-40 md:h-40 w-28 h-28 rounded-full object-cover" :src="userDetails[0].profileImg"
                                alt="user photo">
                        </div>

                        <div v-else>
                            <span class="pt-8 bg-purple-900 text-white text-semibold text-4xl md:text-8xl rounded-full md:w-40 md:h-40 w-full"
style="width: 28px; height: 28px;"
                                v-if="firstLetter"> {{ firstLetter }}</span>
                        </div>

                    </button>
                </div>

                <div class="col md:pl-5 pt-5">
                    <p class="md:text-6xl text-4xl text-center md:text-left">{{ userDetails[0].firstName }} {{
                        userDetails[0].lastName }}</p>

                    <label class="mt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        for="user_avatar">Update Profile Picture</label>
                    <input
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        aria-describedby="user_avatar_help" id="user_avatar" type="file" @change="handleImageChange"
                        ref="fileInput">


                </div>
            </div>

            <div class="md:px-20 px-5 mb-20">
                <form>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">First
                                name</label>
                            <input type="text" id="first_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John" v-model="user.firstName" required>
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">Last
                                name</label>
                            <input type="text" id="last_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Doe" v-model="user.lastName" required>
                        </div>
                        <div>
                            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 ">Matric
                                No.</label>
                            <input type="text" id="company"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="001" v-model="user.matricNo" required>
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone
                                number</label>
                            <input type="tel" id="phone"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="123-45-678" v-model="user.phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                        </div>
                        <div>

                            <label for="countries"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Level</label>
                            <select id="countries" v-model="user.level"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>100</option>
                                <option>200</option>
                                <option>300</option>
                                <option>400</option>
                                <option>500</option>
                            </select>

                        </div>
                        <div>
                            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 ">Address
                            </label>
                            <input type="text" id="company"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Nigeria" v-model="user.address" required>
                        </div>
                        <!-- <div>
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Password
                                    </label>
                                <input type="tel" id="phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="123-45-678" v-model="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                            </div> -->

                    </div>

                    <button type="submit" @click="updateUser"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <span v-if="!loading">Save</span>
                        <span v-else>Saving...</span>
                    </button>


                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue'
import footerVue from '@/components/utilities/accountComponents/footer.vue'
import { db } from '@/firebase'
import { doc, updateDoc, collection, getDocs, getDoc } from 'firebase/firestore'
import navbarVue from '@/components/utilities/accountComponents/navbar.vue'
import { format } from 'date-fns'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import fullPageLoader from '@/components/fullPageLoader.vue'
import { auth } from '../../../firebase'
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import { toast } from 'vue3-toastify'
import breadcrumbVue from '../../../components/utilities/accountComponents/breadcrumb.vue'



export default {
    components: {
        Icon,
        footerVue,
        navbarVue,
        Carousel,
        Slide,
        Navigation,
        fullPageLoader,
        firstLetter: '',
        breadcrumbVue
    },

    data() {
        return {
            loading: false,
            courses: [],
            userDetails: [],
            notes: [],
            tasks: [],
            isLoading: true,
            currentDate: new Date(),
            imageFile: null,
            imageUrl: '',
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phoneNo: '',
                matricNo: '',
                level: '',
                address: ''
            }

        }
    },

    computed: {
        userProfile() {
            return this.$store.state.user;
        },

        formattedDate() {
            const date = this.currentDate // Convert Firestore timestamp to JavaScript Date
            const formattedDate = format(date, 'MMMM d, yyyy');
            return formattedDate
        }
    },

    async created() {
        const userProfile = this.$store.state.user;
        console.log(userProfile);

        if (userProfile && userProfile.email) {
            try {
                const querySnapshot = await getDocs(collection(db, 'Users')); // Assuming 'users' is your Firestore collection name
                querySnapshot.forEach((doc) => {
                    const userData = doc.data();
                    if (userData.email === userProfile.email) {
                        // Found the user with the matching email
                        this.userDetails.push(userData);
                        this.user = userData
                        // if(this.userDetails) {
                        //    this.isLoading = false
                        // }

                        // else {
                        //    this.isLoading = true
                        // }
                        // Get the first letter of the first name
                        const firstName = userData.firstName;
                        if (firstName) {
                            this.firstLetter = firstName.charAt(0); // Set firstLetter to the first character (letter)
                        }

                        setTimeout(() => {
                            // After data is fetched, set isLoading to false to hide the loader
                            this.isLoading = false;
                        }, 2500); // Simulating a 2-second delay for fetching data
                    }
                });
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        }
    },


    mounted() {
        this.fetchCourse()
        this.fetchUser()
        this.fetchUserTasks()
    },



    methods: {
        async fetchCourse() {
            try {
                const querySnapshot = await getDocs(collection(db, 'Courses'));
                this.loading = false
                this.courses = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            } catch (error) {
                console.error('Error fetching item list:', error);
            }
        },


        async fetchUser() {
            const userEmail = this.userProfile;
            const userCollection = collection(db, 'Users');
            const userRef = await getDocs(userCollection);

            let userId = null;
            let docId = null
            userRef.forEach((userDoc) => {
                const userData = userDoc.data();
                // console.log(userData, userEmail);
                if (userData.email === userEmail.email) {
                    userId = userData.id,
                        docId = userDoc.id
                    console.log(userDoc.id);
                }

                else {
                    console.log("User not found");
                }
            });
            this.fetchUserTasks(userId)
            this.fetchUserNotes(userId)

            // return userId
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

        sanitizeTitle(title) {
            // Replace spaces and special characters with dashes
            return title.toLowerCase().replace(/[^\w-]+/g, '-');
        },

        async fetchUserNotes(id) {
            const userId = id;
            try {
                // Fetch all notes from the 'Note' collection
                const noteCollection = collection(db, 'Notes');
                const querySnapshot = await getDocs(noteCollection);

                querySnapshot.forEach((doc) => {
                    const noteData = doc.data();

                    // Check if the user ID matches the current user's ID
                    if (noteData.userId === userId) {
                        this.notes.push({ id: doc.id, ...noteData });
                    }
                });

                console.log('User Notes:', this.notes);
            } catch (error) {
                console.error('Error fetching notes: ', error);
            }
        },

        async updateUser(id) {
            try {
                const userEmail = this.userProfile;
                const userCollection = collection(db, 'Users');
                const userRef = await getDocs(userCollection);
                this.loading = true
                let userId = null;
                let docId = null
                userRef.forEach((userDoc) => {
                    const userData = userDoc.data();
                    // console.log(userData, userEmail);
                    if (userData.email === userEmail.email) {
                        userId = userData.id,
                            docId = userDoc.id
                        console.log(userDoc.id);
                    }

                    else {
                        console.log("User not found");
                    }
                });

                const sectionDocRef = doc(
                    db,
                    "Users",
                    docId
                );



                const docSnapshot = await getDoc(sectionDocRef);
                if (docSnapshot.exists()) {
                    // If the document exists, update it with this.user
                    await updateDoc(sectionDocRef, {
                        firstName: this.user.firstName,
                        lastName: this.user.lastName,
                        phone: this.user.phone,
                        matricNo: this.user.matricNo,
                        email: this.user.email,
                        address: this.user.address,
                        level: this.user.level
                    });
                    console.log("Section data updated successfully.");
                    if (this.imageFile) {
                        const storage = getStorage();
                        const storageRef = ref(storage, `profile-img/${this.imageFile.name}`);
                        await uploadBytes(storageRef, this.imageFile);
                        const downloadURL = await getDownloadURL(storageRef);
                        await updateDoc(sectionDocRef, { profileImg: downloadURL });

                    }
                    toast.success("Profile Updated")
                    this.loading = false
                } else {
                    console.error("Document does not exist. Cannot update.");
                    toast.error("User does not exist")
                    this.loading = false
                }

                console.log("Section data updated successfully.");

            } catch (error) {
                toast.error("Error updating profile")
                console.error("Error updating Section data:", error);
            }
            this.loading = false
        },

        handleImageChange(event) {
            this.imageFile = event.target.files[0];
        },

    }
}
</script>

<style scoped>
/* Add any additional CSS styles here if needed */
</style>
