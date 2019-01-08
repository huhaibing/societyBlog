<template>
    <div class="person">
        <div class="bg"></div>
        <div class="headPic">
            <img src="../../../../assets/person.png" alt="..." class="img-circle">
        </div>
        <div class="wrap">
            <div class="title">{{name}}</div>
            <div class="motto">{{motto}}</div>
            <div class="contend">
                <ul>
                    <li>
                        <div class="num">{{careNum}}</div>
                        <div class="name">关注</div>
                    </li>
                    <li>
                        <div class="num">{{fanNum}}</div>
                        <div class="name">粉丝</div>
                    </li>
                    <li>
                        <div class="num">{{blogNum}}</div>
                        <div class="name">微博</div>
                    </li>                    
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'胡海兵',
            motto:"机会是给又准备的人的。",
            careNum:10,
            fanNum:23,
            blogNum:7
        }
    }

}
</script>

<style lang="scss" scoped>
.person{
    position: relative;
    width: 100%;
    height: 195px;
    margin-right: 10px;
    background-color: white;
    .bg{
        height: 75px;
        width: 100%;
        background-image: url('../../../../assets/personBg.jpg');
    }
    .headPic{
        position: absolute;
        width: 66px;
        height: 66px;
        z-index: 10;
        top: 25px;
        left: 84px;
        img{
            width: 100%;
            height: auto;
        }
    }
    .wrap{
        height: 120px;
        width: 100%;
        padding: 16px 10px 5px 10px;
        .title{
            font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
            font-size: 20px;
            font-weight: 600;
        }
        .motto{
            margin-top: 5px;
            font-size: 10px;
        }
        .contend{
            width: 100%;
            height: 49px;
            ul{
                width:210px;
                margin: 0 auto;
                padding: 0px;
                height: 100%; 
                list-style-type: none;
                li{
                    // display: inline-block;
                    float: left;
                    width: 70px;
                    height: 100%;
                    .num{
                        height: 25px;
                        font-weight: bold;
                        font-size: 25px;
                    }
                    .name{
                        height: 19px;
                        margin-top: 5px;
                    }

                }
            }
        }
    }
}
</style>
