<template>
<!-- 主页导航栏 -->
  <nav>
    <ul>
      <li @click="skip(1)"><a>个人主页</a></li>
      <li @click="skip(2)"><a>我的相册</a></li>
      <li @click="skip(3)"><a>个人资料</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
    skip(num){
            switch(num){
                case 1:
                this.$router.push('/homePage/mainpage')
                break
                case 2:
                this.$router.push('/homePage/photoAlbum')
                break
                case 3:
                this.$router.push('/homePage/person')
                break
                default:
                this.$router.push('/homePage/mainpage')
                break
            }
        }
  }
}
</script>

<style scoped>
nav{
    min-width: 600px;
    max-width: 920px;
    height: 40px;
    background-color:rgba(255,255,255,1);
    margin-bottom: 15px;
  }
ul, li{
  display: inline-block;
  text-align: center;
  margin: 4px 50px 0px 50px;
  font-size: 16px;
}

a:link,a:visited{
  color: #2399D5;
  text-decoration: none;
}
a:hover,a:active{
  color: orange;
  text-decoration: none;
  cursor: pointer;
}
</style>
