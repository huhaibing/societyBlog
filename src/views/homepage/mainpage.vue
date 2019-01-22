<template>
<!-- 我的主页模块--主模块 -->
  <div class="contentContainer">
    <aside>
        <counter></counter>
        <personInfo></personInfo>
        <card></card>
    </aside>
    <div class="content">
      <moment v-for="(item,index) in dynamicList" :key="index" :post="item"></moment>
    </div>
  </div>
</template>
<script>
import counter from './components/counter.vue'
import personInfo from './components/personInfo.vue'
import card from './components/card.vue'
import moment from './components/moment.vue'

export default {
  name: 'mainpage',
  components: {
    counter,
    personInfo,
    card,
    moment
  },
  data () {
    return {
      dynamicList: []
    }
  },
  created () {
    this.$api.post('/chatting/post/getMyMoment.do')
      .then(r => {
        this.dynamicList = r.aaData
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

<style scoped>
.contentContainer{
    width: 920px;
    height: auto;
}
aside{
    float: left;
    width: 300px;
    min-height: 600px;
    height: auto;
    background-color:rgba(255,255,255,0.1);
  }
.content{
    width: 600px;
    min-height: 600px;
    height: auto;
    margin-left: 320px;
    margin-top: 15px;
    background-color:rgba(255,255,255,0.1);
}
</style>
