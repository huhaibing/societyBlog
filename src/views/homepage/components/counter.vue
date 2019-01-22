<template>
<!-- 粉丝计数模板 -->
  <div class="counter">
    <ul>
      <li>
        <div class="num">{{personInfo.likeNum}}</div>
        <div class="name">关注</div>
      </li>
      <li>
        <div class="num">{{personInfo.panNum}}</div>
        <div class="name">粉丝</div>
      </li>
      <li>
        <div class="num">{{personInfo.postNum}}</div>
        <div class="name">微博</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
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

<style scoped>
.counter{
    width: 300px;
    height: 60px;
    background-color:rgba(255,255,255,1);
    margin: 0px 20px 15px 0px;
  }
ul, li{
  display: inline-block;
  text-align: center;
}
ul{
  margin:5px 0px;
  padding:0px;
}
li{
  padding: 0px 30px;
  font-size: 12px;
}

li:first-child,li:nth-child(2){
  border-right: 1px solid #DAD5D5;
}

.num{
  font-size:20px;
}
.num:hover{
  color: orange;
  cursor: pointer;
}
.name{
  font-size: 12px;
}
</style>
