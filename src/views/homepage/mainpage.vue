<template>
  <div class="contentContainer">
    <aside>
        <counter></counter>
        <personInfo></personInfo>
        <card></card>
    </aside>
    <div class="content">
      <moment></moment>
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
