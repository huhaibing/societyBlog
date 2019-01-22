<template>
<!-- 博客模板 -->
    <div class="moment">
        <div>
            <div class="profile"><img v-bind:src="imgUrl" style="width:50px;height=50px;"/></div>
            <div class="info">
                <div class="operation">
                    <button><i class="iconfont icon-shouqi"></i></button>
                    <div @click="unfold" id="op" class="op">
                        <ul>
                            <li>删除</li>
                            <li>分享</li>
                        </ul>
                    </div>
                </div>
                <div class="nickname">{{name}}</div>
                <div><time>{{time}}</time>&nbsp;<span>来自</span>&nbsp;<span>{{phone}}</span></div>
            </div>
        </div>
        <div class="sharedContent">
            <div class="words">
                <p>{{blog}}</p>
            </div>
            <div class="pictures"></div>
        </div>
        <nav>
            <ul>
                <li><i class="iconfont icon-yuedu"></i>&nbsp;&nbsp;阅读 {{yuedu_num}}</li>
                <li><i class="iconfont icon-dianzan"></i>&nbsp;&nbsp;点赞 {{dianzan_num}}</li>
                <li><i class="iconfont icon-shoucang"></i>&nbsp;&nbsp;收藏 {{shoucang_num}}</li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
  name: 'moment',
  data () {
    return {
      imgUrl: require('../../../assets/profile.png'),
      name: '胡海兵',
      time: '2019-01-01 00:00',
      phone: 'iphoneX',
      blog: 'Hello World !',
      yuedu_num: '1289',
      dianzan_num: '890',
      shoucang_num: '534'
    }
  },
  methods: {
    unfold: function () {
      document.getElementById('op').style.display = 'block'
    }
  }
}
</script>

<style lang="scss" scoped>
.moment{
    width: 600px;
    min-height: 130px;
    height: auto;
    background-color: white;
    margin-bottom: 15px;
}
.profile{
    float: left;
    margin: 10px 10px 0px 10px;
    padding: 10px;
}
.info{
    margin: 0px 10px;
    padding: 10px;
    text-align: left;
}
.nickname{
    margin: 8px 0px;
    font-size: 16px;
}
.words{
    text-align: left;
    padding: 5px 15px 5px 90px;
}
.sharedContent{
    border-bottom: 1px solid #F2F2F5;
}
nav{
    width: 600px;
    height: 40px;
    ul, li{
        display: inline-block;
    }
    ul{
        margin: 5px 0px 0px 0px;
        padding: 0px;
    }
    li{
        text-align: left;
        padding: 5px 50px;
        font-size: 14px;
    }
    li:first-child,li:nth-child(2){
    border-right: 1px solid #DAD5D5;
    }
    li:hover{
        color: orange;
        cursor: pointer;
    }
}
.operation{
    float: right;
    button{
        float: right;
        border: 1px solid rgba(124, 118, 118, 0.2);
        border-radius: 50%;
        background: none;
    }
    .op{
        display: none;
        ul,li{
            margin: 0px;
            padding: 0px;
            list-style: none;
        }
        ul{
            margin: 30px 20px 0px 0px;
        }
        li{
            padding: 1px 0px;
        }
    }
}
</style>
