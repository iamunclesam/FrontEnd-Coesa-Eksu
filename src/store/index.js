import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import { createStore } from "vuex";
import router from "../router";
import VuexPersistence from "vuex-persist";
import { toast } from "vue3-toastify";


const vuexLocal = new VuexPersistence({
  storage: window.localStorage, // You can change this to sessionStorage if needed
  key: 'coesa', // Change this to a unique key for your app
  reducer: (state) => ({
    user: state.user, // Specify the state you want to persist
  }),
});

export default createStore({
  state: {
    user:null
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async register({ commit }, userDetails) {
      const {id, firstName, lastName, phone, matricNo, email, password } = userDetails;

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = {
          id, firstName, lastName, phone, matricNo, email, password 
        };
        const usersCollection = collection(db, 'Users');
        await addDoc(usersCollection, user);
        commit('SET_USER', user);
        router.push('/signin');
        // Display a success toast
       toast.success("Sign Up Successfull")

        return user;
      } catch (error) {
        console.error("Registration Error:", error);
        throw error;
      }
    },

    async login({ commit }, credentials) {
      const { email, password } = credentials;

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = {
          email: userCredential.user.email,
        };
        commit('SET_USER', user);
        router.push('/user')


        toast.success("Sign In Successfull")
        return user;
      } catch (error) {
        console.error("Login Error:", error);
        throw error;
      }
    },

  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  plugins: [vuexLocal.plugin],
});
