<template>
<!-- 相册卡片模块 -->
  <div class="card">
    <header>
      <div>相册</div>
    </header>
    <div class="content">
      <img src="../../../assets/logo.png">
      <img src="../../../assets/logo1.png">
      <img src="../../../assets/logo2.png">
    </div>
    <footer>
      <a href="#">查看更多   >>></a>
    </footer>
  </div>
</template>
<style scoped>
.card{
    width: 300px;
    min-height: 195px;
    max-height: 495px;
    background-color:rgba(255,255,255,1);
    margin: 0px 20px 15px 0px;
}
header{
  width: 300px;
  height: 60px;
  border-bottom: 1px solid #F2F2F5;
}
header div{
  width: 300px;
  height: 60px;
  text-align: left;
  font-size: 12px;
  margin: 10px 10px;
  padding:20px 0px 0px 0px;
}
header div:hover{
  color: orange;
  cursor: pointer;
}
.content{
  width: 300px;
  min-height: 100px;
  max-height: 300px;
  text-align: left;
}
img{
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 0px 5px;
}
footer{
  width: 300px;
  height: 35px;
  font-size: 14px;
  margin: 0px;
  padding: 10px;
  border-top:1px solid #F2F2F5;
}
footer:hover{
    color:orange;
    cursor:pointer;
}
</style>
