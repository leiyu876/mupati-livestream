require('./bootstrap');

import Vue from 'vue'
window.Vue = Vue;

Vue.component("broadcaster", require("./components/Broadcaster.vue").default);
Vue.component("viewer", require("./components/Viewer.vue").default);

const app = new Vue({
    el: '#app'
});