<template>
<!-- 博客模板 -->
    <div class="moment">
        <div>
            <div class="profile"><img :src=this.post.userPortrait class="img-circle" style="width:50px;height=50px;"/></div>
            <div class="info">
                <div class="operation">
                    <button><i class="iconfont icon-shouqi"></i></button>
                    <div id="op" class="op">
                        <ul>
                            <li>删除</li>
                            <li>分享</li>
                        </ul>
                    </div>
                </div>
                <div class="nickname">{{post.userName}}</div>
                <div><time>{{post.postDate}}</time></div>
            </div>
        </div>
        <div class="sharedContent">
            <div class="words">
                <p>{{post.description}}</p>
            </div>
            <div class="pictures" >
                <img v-for="(item,index) in post.pictures" :key="index" :src=item alt="图片加载失败"/>
            </div>
        </div>
        <nav>
            <ul>
                <li><i class="iconfont icon-shoucang"></i>&nbsp;&nbsp;收藏</li>
                <li><i class="iconfont icon-dianzan"></i>&nbsp;&nbsp;点赞 </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  methods: {
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
    min-height: 10px;
    border-bottom: 1px solid #F2F2F5;
    .pictures{
        width: 340px;
        min-height: 110px;
        margin-left: 85px;
        text-align: left;

    }
    .pictures img{
        width:100px;
        height:100px;
        margin: 0px 0px 5px 5px;
    }
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
        padding: 5px 100px;
        font-size: 14px;
    }
    li:first-child{
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
