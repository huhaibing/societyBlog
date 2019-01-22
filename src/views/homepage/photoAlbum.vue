<template>
<!-- 我的相册模块 -->
  <div class="contentContainer">
    <header>
      <span class="left">照片墙</span>
      <span class="right"><img src="#">上传照片</span>
    </header>
    <div class="cotent">
        <div class="default-info">您还没有发布过照片</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'photoAlbum',
  components: {

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
</style>
