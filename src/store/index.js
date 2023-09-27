import { createStore } from "vuex";
import router from "../router";
import { auth } from "../firebase"; // Import Firestore instance
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithCustomToken,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'

import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification()


export default createStore({
  state: {
    user: {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    },
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    CLEAR_USER(state) {
      state.user = {
        username: null,
        email: null,
        password: null,
      };
    },
  },

  getters: {
    isAuthenticated: state => !!state.user
  },


  actions: {

    async login({ commit }, details) {
      const { email, password } = details;

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = {
          email,
          token: userCredential.user.refreshToken,

        };

        commit('SET_USER', user);
        commit('SET_TOKEN', user.token);
        router.push('/user');

        //  AUTHENTICAITON NOTIFICATION

        notify({
          title: "Authorization Complete",
          text: "You have been logged in!",
          type: 'success',
        });
      }

      catch (error) {
        switch (error.code) {
          case 'auth/user-not-founded':
            alert('user not found')
            break

          case 'auth/wrong-password':
            alert('wrong password')
            break
          default:
          // alert('Something went wrong')
        }
        notify({
          title: "Authorization Declined",
          text: "Try Again",
          type: 'error',
        });
      }


    },

    async register({ commit }, details) {
      const { firstName, lastName, email, password } = details;


      try {
        await createUserWithEmailAndPassword(auth, email, password);

        // Create user in Firestore after successful authentication
        const user = {
          firstName,
          lastName,
          email,
        };
        await createUserInFirestore(user);
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('Email already in use')
            break

          case 'auth/invalid-email':
            alert('Invalid Email')
            break

          case 'auth/operation-not-allowed':
            alert('Operation not allowed')
            break

          case 'auth/weak-password':
            alert('Weak Password')
            break

          default:
            alert('Something went wrong')
        }

        return
        // Handle registration errors
      }

      commit('SET_USER', { firstName, lastName, email });
      router.push('/signin');
      notify({

        title: "Registration Complete",
        type: 'success',
      });
    },


    async logout({ commit }) {
      await signOut(auth);

      commit('CLEAR_USER');
      router.push('/signin');
    },

    async fetchUser({ commit }, email) {
      try {
        const usersCollection = collection(db, 'Users');
        const querySnapshot = await getDocs(usersCollection);

        querySnapshot.forEach((doc) => {
          const user = doc.data();
          if (user.email === email) {
            commit('SET_USER', { ...user, id: doc.id });
            return;
          }
        });
      } catch (error) {
        throw error;
      }
    },
  },



});



// Helper function to create user document in Firestore
async function createUserInFirestore(user) {
  // Save data to Firestore
  const usersCollection = collection(db, "Users");
  await addDoc(usersCollection, user);

  console.log("Data saved successfully!");
}
