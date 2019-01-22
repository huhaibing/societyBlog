<template>
    <div class="fixNav">
        <div class="main">
            <div class="head_logo">
                <!-- <span class="logo"></span> -->
                <img src="../../../assets/logo2.png" alt="" style="width:40px;height:40px;">
            </div>
            <div class="head_search">
                    <el-input   placeholder="请输入内容"  v-model="input1"   >
                        <el-button slot="suffix" icon="el-icon-search" circle size=""></el-button>
                    </el-input>
            </div>

            <div class="head_nav">
                <ul>
                    <li><a @click="indexPage"><span class="icon iconfont icon-shouye-moren"><p>首页</p></span></a></li>
                    <li><a @click="homePage"><span class="icon iconfont icon-gerenzhongxin-moren"><p>{{personInfo.name}},您好！</p></span></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        personInfo:{
            type:Object
        }
    },
  data () {
    return {
      input1: '',
      name: '胡海兵'
    }
  },
  methods:{
      indexPage(){
          this.$router.push('/admin/index');
      },
      homePage(){
          this.$router.push('/homePage');
      }
  }
}
</script>

<style lang="scss" scoped>

.fixNav{
    position: fixed;
    margin: 0px;
    width: 100%;
    height: 50px;
    background-color:#ffffff;
    overflow: hidden;
    z-index: 1000;
    .main{
        height: 100%;
        width: 1000px;
        margin:0px auto;

        .head_logo{
            // display: inline-block;
            float: left;
            overflow: hidden;
            width: auto;
            height: 40px;
            padding: 5px 0px;
            img{
                width: auto;
                height: 100%;
            }
        }
        a{
            text-decoration:none;
        }
        .head_search{
            float: left;
            // overflow: hidden;
            width: auto;
            height: 40px;
            margin-left: 50px;
            .el-input{
                margin-top: 5px;
                overflow: hidden!important;
            }

        }

        .el-button{
            border: #ffffff!important;
            // margin-top: -5px!important;
            // height: 30px;
        }

        .head_nav{
            float: right;
            width: 600px;
            height: 50px;
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                height: 100%;
            }
            li{
                display: inline-block;
                height: 30px;
                margin: 15px 50px 5px 10px ;
            }
            span{
                margin: 10px auto;
                color: black;
                p{
                    display: inline;
                    margin-left: 10px;
                }
            }
            span:hover{
                color: orange;
                cursor: pointer;
            }
        }

    }
}
</style>
<style>
.head_search input{
    height: 40px!important;
    width: 230px!important;
}
/* .head_search .el-input{
    float: left!important;
} */
/* .main .el-button{
    float: left!important;
} */
</style>
