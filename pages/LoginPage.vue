<template>
  <div class="container-grid">
    <Nav/>
    <Login/>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

import Nav from "../components/Nav";
import Login from "../components/Login";
import Footer from "../components/Footer";


// import Footer from "../components/Footer";

export default {
  name: "LoginPage",
  components: {
    Nav,
    Login,
    Footer
  },
  computed: mapGetters(['totalNews', 'selectedNews']),
  methods: mapActions(['init']),
  created() {
    this.init();
  }
};
</script>

<style lang="postcss">
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
</style>
