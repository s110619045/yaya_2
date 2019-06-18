<template>
  <div class="container-grid">
    <Nav/>
    <ShopPageTop/>
    <ShopPageDown/>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

import Nav from "../components/Nav";
import ShopPageTop from "../components/ShopPageTop";
import ShopPageDown from "../components/ShopPageDown";
import Footer from "../components/Footer";

export default {
  name: "ShopPage",
  components: {
    Nav,
    ShopPageTop,
    ShopPageDown,
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

