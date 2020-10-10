import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')



/* import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)
firebase.initializeApp({
 projectId: 'YOUR_PROJECT_ID', 
 databaseURL: 'YOUR_DB_URL'
})
export const db = firebase.firestore() */