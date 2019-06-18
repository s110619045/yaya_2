<template>
    <div class="container">
        <div class="separation_line"></div>
        <p>Detail</p>
        <div class="introduction">
            <img v-bind:src="products[0].detail">
        </div>
    </div>
</template>

<script>
import { fb,db } from "../firebase/index";

export default {
  data(){
    return {
        products: [],
        product: {
          name:null,
          price:null,
          picurl:null,
          detail:null
        }
    }
  },
  firestore(){
      return {
        products: db.collection('ShopList')
      }
  }
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_shoppagedown.css";
</style>
