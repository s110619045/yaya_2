<template>

<div class="container">
  <div v-for="index in 9" :key="index" :class="`grid-item-${index}`">
    <input type="text" placeholder="請輸入名字"><br>
    <textarea placeholder="寫點什麼吧！" rows="4" cols="10" maxlength="100"></textarea>
  </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_comment.css";
</style>
