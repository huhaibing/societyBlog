<template>
  <div class="index">
      <fix-nav :personInfo='personInfo'></fix-nav>
      <div class="topTian"></div>
      <div class="main">
          <fix-left></fix-left>
          <div class="tian"></div>
          <div class="content">
              <div class="mainContent">
                  <transition name="fade-transform" mode="out-in">
                    <keep-alive >
                        <router-view />
                    </keep-alive>
                  </transition>
              </div>
              <recommand :personInfo='personInfo'></recommand>
          </div>
      </div>
  </div>
</template>

<script>
import fixNav from './components/fixNav.vue'
import fixLeft from './components/fixLeft.vue'
import recommand from './components/recommand/recommand.vue'
    export default{
        name:"layout",
        components:{fixNav,fixLeft,recommand},
        data(){
            return {
                personInfo:{}
            }
        },
        created(){
            this.$api.post('/chatting/user/getUser.do')
            .then(r =>{
                this.personInfo = r.aaData
                // for( var tt in this.dynamicList)
                //   for (var m in tt)
                //     console.log(m+":"+tt[m])
            })
            .catch(error => {
                
            });
        },
        destroyed(){

        },
        methods:{
            
        }
    }
</script>
<style scoped>
.index{
    background-image: url('../../assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    min-height: 2000px;
}
.main{
    /* opacity: 0.6; */
    /* background-color: #0f3b60; */
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 16px
    /* z-index: 1; */
}
.tian{
    float: left;
    width: 150px;
    height: 1000px;

}
.topTian{
    margin: 0px;
    width: 100%;
    height: 50px;
}
.content{
    /* background-color: red; */
    float: left;
    left: 150px;
    width: 850px;
    overflow: hidden;
    /* height: 100px; */
    /* z-index: -1; */
}
.mainContent{
    width: 600px;
    float: left;
    margin-right: 10px;
    min-height: 100px;
    /* background-color: red; */
    /* height: 100px; */
}
</style>
