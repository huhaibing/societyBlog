<template>
    <div class="dynamic">
        <div class="headPic">
            <img :src=this.post.userPortrait alt="..." class="img-circle"/>
        </div>
        <div class="contend">
            <div class="name">
                <p>{{post.userName}}</P>
            </div>
            <div class="time">
                <p>{{post.postDate}}</p>
            </div>
            <div class="wordContend">
                <div class="word">
                    <p>{{post.description}}</p>
                </div>
                <div class="pic">
                    <div class="pp" v-for="(item,index) in post.pictures" :key="index">
                        <img :src=item alt="网络不好，暂时无图" />
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="collect" @click="collect">
                   <span  v-if="post.collected" class="icon iconfont icon-shoucang1"></span> 
                   <span  v-else class="icon iconfont icon-tuanduicankaoxian-"></span> 
                   <span v-if="post.collected">已收藏</span>
                   <span v-else>收藏</span>
                </div>
                <div class="thumb" @click="like">
                    <span  v-if="post.liked" class="icon iconfont icon-dianzan"></span>
                    <span  v-else class="icon iconfont icon-z-like"></span>
                    <span v-if="post.liked">已点赞</span>
                    <span v-else>点赞</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Message} from 'element-ui'
export default {
    props:['post'],
    data(){
        return{
            //  userPortrait: '',
            //  pictures:[]               
        }
    },
    created(){
        // console.log(this.post.userPortrait)
        // str ="'"+this.post.userPortrait+"'";
        // // this.userPortrait = require('../../../assets/defaultHportrait.png')
        // this.userPortrait = require(str)
        // for(var tt = 0 ; tt < this.post.pictures.length ; tt++)
        //     this.pictures.push(require(this.post.pictures[tt]))
    },
    methods:{
        collect(){
            var status = this.post.collected 
            if( status== false) status = true  //使用!取反，不能实现，只能这样写
            else status =false
            var temp = 'momentId=' + this.post.momentId
            this.$api.post("/chatting/collections/collectOrCancel.do",temp)
            .then(r => {
                if(r.code == 0)
                {
                     Message({
                        message: r.message,
                        type: 'success',
                        duration: 3 * 1000
                    })
                    this.post.collected = status
                }
            })
            .catch(error => {

            })
        },
        like(){
            var status = this.post.liked
            if( status== false) status = true  //使用!取反，不能实现，只能这样写
            else status =false
            var temp = 'momentId=' + this.post.momentId
            this.$api.post("/chatting/like/likeOrCancel.do",temp)
            .then(r => {
                if(r.code == 0)
                {
                     Message({
                        message: r.message,
                        type: 'success',
                        duration: 3 * 1000
                    })
                    this.post.liked = status
                }
            })
            .catch(error => {

            })
        }
    }
}
</script>


<style lang="scss" scoped>
.dynamic{
    width: 600px;
    background-color: white;
    margin-top: 30px;
    // min-height: 100px;
    overflow: hidden;
    padding: 20px 20px 4px 20px;
    border-radius: 20px;
    .headPic{
        width: 66px;
        float: left;
        // min-height: 300px;
        img{
            width: 66px;
            height: 66px;
        }
    }
    .contend{
        float: left;
        margin-left: 14px;
        width: 480px;
        // min-height: 300px;
        // background-color: aqua;
        // margin-top: 10px;
        .name{
            font-size: 20px;
            font-weight: bold;
            overflow: hidden;
            p{
                float: left;
                margin: 0px;
            }
        }
        .time{
            overflow: hidden;
            p{
                float: left;
                color: #808080;
            }
        }
        .wordContend{
            overflow: hidden;
            .word{
                overflow: hidden;
                p{
                    float: left;
                }
            }

            .pic{
                width: 100%;
                // min-height: 100px;
                // background-color: aqua;
                overflow: hidden;
                .pp{
                    float: left;
                    width: 140px;
                    height: 140px;
                    margin: 10px ;
                    padding: 0px;
                    img{
                        width: 140px;
                        height: 140px;
                    }
                }
            }
        }
        .footer{
                overflow: hidden;
                width: 400px;
                margin: 10px auto;
                .collect{
                    display: inline-block;
                    // float: right;
                    margin-right: 250px;
                }
                .collect:hover{
                    color: orange;
                    cursor: pointer;
                }
                .thumb{
                    display: inline-block;
                    // float: right;
                    margin-left: 0px;
                }
                .thumb:hover{
                    color: orange;
                    cursor: pointer;
                }
            }
    }
}
</style>
