<template>
  <div class="counter">
    <ul>
      <li>
        <div class="num">{{followingNum}}</div>
        <div class="name">关注</div>
      </li>
      <li>
        <div class="num">{{followedNum}}</div>
        <div class="name">粉丝</div>
      </li>
      <li>
        <div class="num">{{sharedNum}}</div>
        <div class="name">分享</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  data () {
    return {
      followingNum: 10,
      followedNum: 23,
      sharedNum: 1
    }
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
