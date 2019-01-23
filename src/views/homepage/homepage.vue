<template>
<div class="homepageContainer">
  <fixNav :personInfo='personInfo'></fixNav>
  <div class="chou"></div>
  <div class="main">
    <cover :personInfo='personInfo'></cover>
    <mainNav></mainNav>
    <div class="contentContainer">
      <!-- 模块之间切换 -->
      <transition name="fade-transform" mode="out-in">
        <keep-alive >
            <router-view />
        </keep-alive>
      </transition>
    </div>
  </div>
</div>
</template>

<script>
import fixNav from '@/views/layout/components/fixNav.vue'
import mainNav from './components/mainNav.vue'
import cover from './components/cover.vue'
import mainpage from './mainpage.vue'
import photoAlbum from './photoAlbum.vue'
import personal from './personal.vue'
export default {
  name: 'homepage',
  components: {
    fixNav,
    mainNav,
    cover,
    mainpage,
    photoAlbum,
    personal
  },
  data () {
    return {
      personInfo: {}
    }
  },
  created () {
    this.$api.post('/chatting/user/getUser.do')
      .then(r => {
        this.personInfo = r.aaData
        // for( var tt in this.dynamicList)
        //   for (var m in tt)
        //     console.log(m+":"+tt[m])
      })
      // eslint-disable-next-line handle-callback-err
      .catch(error => {

      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chou{
    height: 50px;
  }
  .homepageContainer{
    background-color: #ECECEC;
    height: auto;
  }
  .contentContainer{
    width: 920px;
    height: auto;
  }
  .main{
    margin: 0px auto;
    width:920px;
    /* height: auto; */
    overflow: hidden;
  }
</style>
