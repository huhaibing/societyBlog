<template>
    <div class="fixLeft">
        <ul>
           <li @click="skip(1)"><a>首页</a></li>
           <li @click="skip(2)"><a>我的收藏</a></li>
           <li @click="skip(3)"><a>我的赞</a></li>
        </ul>

        <ul>
           <li><a href="#home">热门微博</a></li>
           <li><a href="#news">热门视频</a></li>
        </ul>

        <ul>
           <li><a href="#home">好友圈</a></li>
           <li><a href="#news">特别关注</a></li>
           <li><a href="#news">同学</a></li>
           <li><a href="#news">悄悄关注</a></li>
           <li><a href="#news">群微博</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'huhaibing'
        }
    },
    methods:{
        skip(num){
            switch(num){
                case 1:
                this.$router.push('/admin/index')
                break
                case 2:
                this.$router.push('/admin/collection')
                break
                case 3:
                this.$router.push('/admin/like')
                break
                default:
                this.$router.push('/admin/index')
                break
            }
        }
    }

}
</script>


<style lang="scss" scoped>
.fixLeft{
    position: fixed;
    // height: 100%;
    width: 150px;
    // float: left;
    height: 1000px;
    // background-color: red;
    overflow: hidden;
    // background-color: aliceblue;
    // background: black;
        ul {
                list-style-type: none;
                margin-top: 20px;
                padding: 0;
                padding-bottom: 20px;
                width: 100%;
                border-bottom: #87badb 2px solid;
                li{
                    height: 30px;
                    padding: 0px 50px 0px 20px ;
                    text-align: left;
                    line-height: 30px;
                    a{
                        color: white;
                        text-decoration:none;
                    }
               }
               li:hover{
                   background-color: #ffc09f;
                   cursor: pointer;
               }
           }
            
}
</style>
