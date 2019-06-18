<template>
  <div class="container-grid">
    <Nav/>
    <Home/>
    <ShopList/>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

import Nav from "../components/Nav";
import Home from "../components/Home";
import ShopList from "../components/ShopList";
import Footer from "../components/Footer";

export default {
  name: "Main",
  components: {
    Nav,
    Home,
    ShopList,
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

