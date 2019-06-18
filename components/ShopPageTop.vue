<template>
<div class="container">
    <img class="goods" src="../assets/GOODS/clothes/1_1.jpg" >
    <div class="right_content">
        <div class="text">{{products[0].name}}</div>
        <div class="price">{{products[0].price}}</div>
        <div class="quantity_ar">
        <label class="quantity">數量：</label><input type="number" value="1" min="1" max="99" class="no-spinners">
            <img id="add" src="../assets/add.png"><img id="remove" src="../assets/remove.png">
        </div>
        <div class="btn">
            <button>加入購物車</button><button>加入最愛</button>
        </div>
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
@import "../styles/modules/_shoppagetop.css";
</style>


