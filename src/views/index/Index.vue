<template>
    <div class="index">
        <editor></editor>
        <dynamic v-for="(item,index) in dynamicList" :key="index" :post='item'></dynamic>
    </div>
</template>

<script>
import editor from './components/textEditor.vue'
import dynamic from './components/dynamic.vue'
// import api from '..//components/dynamic.vue'
export default {
  components: {editor, dynamic},
  data () {
    return {
      dynamicList: [
        // {
        //   name: 'bill',
        //   headPic: require('../../assets/person.png'),
        //   time: '1月6日 21:41',
        //   content: '第一次写微博，多多关照',
        //   like: false,
        //   collect: false,
        //   pic: [
        //     require('../../assets/person.png'),
        //     require('../../assets/hb1.jpg'),
        //     require('../../assets/hb2.jpg'),
        //     require('../../assets/background.jpg')
        //   ]
        // },
        // {
        //   name: 'bill',
        //   headPic: require('../../assets/person.png'),
        //   time: '12月31日 21:41',
        //   content: '广州之行很愉快，谢谢和你相遇。感恩',
        //   like: false,
        //   collect: false,
        //   pic: [
        //     require('../../assets/guangzhou/1.jpg'),
        //     require('../../assets/guangzhou/2.jpg'),
        //     require('../../assets/guangzhou/3.jpg'),
        //     require('../../assets/guangzhou/4.jpg'),
        //     require('../../assets/guangzhou/5.jpg'),
        //     require('../../assets/guangzhou/6.jpg'),
        //     require('../../assets/guangzhou/7.jpg')
        //   ]
        // }
      ]
    }
  },
  created () {
    // var obj = this.$api;
    // for (var temp in obj){
    //     console.log(temp+":"+obj[temp])
    // }
    this.$api.post('/chatting/post/getHomeMoment.do')
    .then(r =>{
          this.dynamicList = r.aaData 
          // for( var tt in this.dynamicList)
          //   for (var m in tt)
          //     console.log(m+":"+tt[m])
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
    // background-image: url('../../assets/background.jpg');
    // background-repeat: no-repeat;
    // background-size: cover;
    overflow: hidden;
    min-height: 2000px;
    width: 100%;
}
</style>
