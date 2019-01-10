<template>
  <div class="cover">
    <img class="profile" src="../../../assets/profile.png">
    <div class="nickname">{{nickname}} <i class="iconfont icon-nanxing"></i><i class="iconfont icon-nvxing"></i></div>
    <div class="signature">{{signature}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nickname: '胡海兵',
      signature: '机会是给有准备的人的'
    }
  }
}
</script>

<style scoped>
.cover{
  min-width: 600px;
  max-width: 920px;
  height: 315px;
  background-image: url('../../../assets/cover.jpg');
  background-size: 920px;
}
.profile{
  width: 100px;
  height: 100px;
  margin-top: 60px;
  border: 5px solid rgba(255,255,255,0.2);
  border-radius: 50%;
}
.nickname{
  padding: 5px;
  font-family: sans-serif;
  font-size: 20px;
}
.signature{
  font-size: 15px;
}
</style>
