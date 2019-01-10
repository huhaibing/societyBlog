<template>
  <nav>
    <ul>
      <li><a href="#">个人主页</a></li>
      <li><a href="#">我的相册</a></li>
      <li><a href="#">个人资料</a></li>
    </ul>
  </nav>
</template>
<style scoped>
nav{
    min-width: 600px;
    max-width: 920px;
    height: 40px;
    background-color:rgba(255,255,255,1);
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
