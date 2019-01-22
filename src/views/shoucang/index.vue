<template>
    <div class="index">
        <dynamic v-for="(item,index) in dynamicList" :key="index" :post='item'></dynamic>
    </div>
</template>

<script>
import dynamic from '../index/components/dynamic.vue'

export default {
  components: {dynamic},
  data () {
    return {
        dynamicList:[]
    }
  },
  created () {

    this.$api.get('chatting/collections/myCollections.do')
    .then(r =>{
          this.dynamicList = r.aaData 
    })
    .catch(error => {
        
    });
  },
  destroyed () {

  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.index{
    
    overflow: hidden;
    min-height: 2000px;
    width: 100%;
}
</style>
