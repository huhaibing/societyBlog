<template>
  <div class="personInfo">
    <header>
      <ul>
        <li class="left">个人信息</li>
        <li class="right"><i class="iconfont icon-index-active"></i></li>
      </ul>
    </header>
    <div style="width:300px;height:170px;">
      <div class="content">
        <ul>
          <li><i class="iconfont icon-dingwei"></i></li>
          <li>{{location}}</li>
        </ul>
      </div>
      <div class="content">
        <ul>
          <li><i class="iconfont icon-education"></i></li>
          <li>毕业于 {{graduation}}</li>
        </ul>
      </div>
      <div class="content">
        <ul>
          <li><i class="iconfont icon-xingquxiang"></i></li>
          <li>{{xingquxiang}}</li>
        </ul>
      </div>
      <div class="content">
        <ul>
          <li><i class="iconfont icon-love"></i></li>
          <li>{{isSingle}}</li>
        </ul>
      </div>
      <div class="content">
        <ul>
          <li><i class="iconfont icon-xingzuo"></i></li>
          <li>{{xingzuo}}</li>
        </ul>
      </div>
    </div>
    <footer>
      <a href="#">编辑个人资料   >>></a>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'personInfo',
  data () {
    return {
      location: '浙江 宁波',
      graduation: '浙江大学',
      xingquxiang: '异性恋',
      isSingle: '单身',
      xingzuo: '巨蟹座'
    }
  }
}
</script>

<style lang="scss" scoped>
.personInfo{
    width: 300px;
    height: 270px;
    background-color:rgba(255,255,255,1);
    margin: 0px 20px 15px 0px;
}
header{
  width: 300px;
  height: 60px;
  margin: 0px;
  padding: 0px;
  text-align: left;
  border-bottom: 1px solid #F2F2F5;
  ul,li{
    display: inline-block;
  }
  ul{
    margin: 10px 0px;
    padding: 0px;
  }
  li:first-child{
    padding:0px 10px;
    font-size: 12px;
    border-right:1px solid #F2F2F5;
  }
  .left:hover{
    color: orange;
    cursor: pointer;
  }
  .right{
    margin-left: 40px;
  }
}
.content{
  width: 300px;
  height:35px;
  text-align: left;
  font-size: 12px;
  margin: 0px 5px;
  padding: 2px 0px;
  border-bottom:1px solid #F2F2F5;
  ul,li{
    display: inline-block;
  }
  ul{
    margin: 0px;
    padding: 0px;
  }
  li{
    padding: 5px;
  }
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
