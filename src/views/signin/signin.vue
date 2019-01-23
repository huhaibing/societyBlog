<template>
<div class="form-container">
  <div style="height:150px;"></div>
  <div class="border">
  <form>
    <div>
      <label>用户名&nbsp;&nbsp;</label>
      <span><input type="text" name="username"/></span>
    </div>
    <div>
      <label>密码&nbsp;&nbsp;</label>
      <span><input type="text" name="password"/></span>
    </div>
    <div>
      <label>昵称&nbsp;&nbsp;</label>
      <span><input type="text" name="name"/></span>
    </div>
    <div hidden>
      <label>个性签名&nbsp;&nbsp;</label>
      <span><input type="text" name="motto"/></span>
    </div>
    <div>
      <label>手机号码&nbsp;&nbsp;</label>
      <span><input type="text" name="phone"/></span>
    </div>
    <div>
      <label>性别&nbsp;&nbsp;</label>
      <span>
        <span class="radio"><input type="radio" name="sex" value="male" checked /> 男</span>
        <span class="radio"><input type="radio" name="sex" value="female" /> 女</span>
      </span>
    </div>
    <div>
      <label></label><span><button type="submit">注册</button></span>
    </div>
  </form>
  </div>
</div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.form-container{
  width: 100%;
  height: 1100px;
  background-image: url('../../assets/pic01.png');
  background-repeat:repeat-y;
  background-size: 100%;
.border{
  width: 500px;
  margin-left: 60%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
}
form{
  div{
    margin: 10px;
    label{
      display: inline-block;
      width: 100px;
      text-align:right;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 16px;
    }
    span{
      display: inline-block;
      width: 150px;
      height: 40px;
      text-align: left;
      input{
        height: 30px;
        border:1px solid rgba(48, 48, 48, 0.2);
        border-radius: 5px;
      }
    }
    .radio{
      display: inline;
      width: 200px;
      height: 40px;
      text-align: left;
      padding: 0px 0px 0px 30px;
    }
    button{
      height: 30px;
      width: 180px;
      font-size: 16px;
      border-radius:5px;
      border-style: none;
      color: white;
      background-color:#66B1FF;
    }
  }
}
}
</style>
