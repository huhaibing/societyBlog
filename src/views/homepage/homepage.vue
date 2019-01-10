<template>
<div class="homepageContainer">
  <fixNav></fixNav>
  <div class="main">
    <cover></cover>
    <mainNav></mainNav>
    <div class="contentContainer">
      <!-- <router-view></router-view> -->
      <mainpage></mainpage>
    </div>
  </div>
</div>
</template>

<script>
import fixNav from '@/views/layout/components/fixNav.vue'
import mainNav from './components/mainNav.vue'
import cover from './components/cover.vue'
import mainpage from './mainpage.vue'
export default {
  name: 'homepage',
  components: {
    fixNav,
    mainNav,
    cover,
    mainpage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .homepageContainer{
    background-image: url('../../assets/bg.jpg');
    background-color: #ECECEC;
    background-size: cover;
    overflow: hidden;
    min-height: 1000px;
  }
  .contentContainer{
    width: 920px;
    height: auto;
  }
  .main{
    position: relative;
    top:50px;
    width:920px;
    min-width: 740px;
    min-height: 1000px;
    height: auto;
    margin: auto;
  }
</style>
