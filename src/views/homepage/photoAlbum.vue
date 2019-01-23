<template>
<!-- 我的相册模块 -->
  <div class="contentContainer">
    <header>
      <span class="left">照片墙</span>
      
    </header>
    <div class="cotent">
        <div v-if="pic == null" class="default-info">您还没有发布过照片</div>
        <div v-else class="pic">
            <div class="pp" v-for="(item,index) in pic" :key="index">
                <img :src=item alt="网络不好，暂时无图" class="img-thumbnail"/>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'photoAlbum',
  components: {

  },
  data(){
      return{
          pic:[]
      }
  },
  created(){
      this.$api.post('/chatting/user/getAlbum.do')
      .then(r =>{
          this.pic = r ; 
      })
  }
}
</script>

<style lang="scss" scoped>
.contentContainer{
  width: 920px;
  min-height: 460px;
  background-color: white;
}
header{
  width: 920px;
  height: 40px;
  border-bottom: 1px solid #F9F9FA;
  .left{
    float:left;
    margin: 10px 0px 0px 30px;
  }
  .left:hover{
    color: orange;
    cursor: pointer;
  }
  .right{
    float: right;
    margin: 10px 30px 0px 0px;
  }
  .right:hover{
    color: orange;
    cursor: pointer;
  }
}
.default-info{
  display:block;
  // display:none;
  font-size: 16px;
  margin-top: 100px;
}
.pic{
        width: 880px;
        margin: 0px auto;
        // min-height: 100px;
        // background-color: aqua;
        overflow: hidden;
        .pp{
            float: left;
            width: 200px;
            height: 200px;
            margin: 10px ;
            padding: 0px;
            img{
                width: 200px;
                height: 200px;
            }
        }
    }
</style>
