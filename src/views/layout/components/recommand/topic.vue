<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <div class="left">
                <span >热门话题</span>
            </div>
            <div class="right">               
                <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
                <span >换一换</span>
            </div>
            
        </div>
        <div class="panel-body">
            <ul>
                <li class="box" v-for="item in hotTopic" :key="item.name">
                    <span class="left">{{item.name}}</span> <span class="right">{{item.num}}</span>
                </li>
            </ul>
        </div>
        <div class="panel-footer">
            <div class="more">
                查看更多
                <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            hotTopic:[
                {
                    name:'#我家那闺女#',
                    num:10
                },
                {
                    name:'#微博之夜#',
                    num:10
                },
                {
                    name:'#工大之声#',
                    num:10
                },
                {
                    name:'#软院产案#',
                    num:10
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.panel{
    margin-top: 40px;
    .panel-heading{
        overflow: hidden;
        .left{
            float: left;
            font-weight: bold;
        }
        .left:hover{
            color: orange;
            cursor: pointer;
        }
        .glyphicon{
            margin-top: 3px;
            margin-right: 7px;
        }
        .right{
            float: right;   
        }
        .right:hover{
            color: orange;
            cursor: pointer;
        }
    }
    .panel-body{
        ul{
            width: 198px;
            padding: 0px;
            list-style-type: none;
            li{
                text-align: left;
                margin-top: 10px;
                overflow: hidden;
                .left{
                    float: left;
                }
                .right{
                    float: right;
                }
                .left:hover{
                    color: orange;
                    cursor: pointer;
                }
            }
        }
    }

    .panel-footer{
        .more{
            
        }
        .more:hover{
            color: orange;
            cursor: pointer;
        }
    }
    
}
</style>

