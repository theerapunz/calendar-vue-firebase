import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
   apiKey: "AIzaSyBUItvqQXV8Cjuej-cjkZZzlf6FsL7FQu0",
  authDomain: "bbe-booking.firebaseapp.com",
  databaseURL: "https://bbe-booking-default-rtdb.firebaseio.com",
  projectId: "bbe-booking",
  storageBucket: "bbe-booking.appspot.com",
  messagingSenderId: "550539633560",
  appId: "1:550539633560:web:f6403552847444ab6741ed",
  measurementId: "G-YKVLDCRQM9"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
