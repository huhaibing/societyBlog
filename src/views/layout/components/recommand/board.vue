<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            公告栏
        </div>
        <div class="panel-body">
            <ul>
                <li v-for=" item in content" :key="item">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            content:[
                '《全国辟谣平台》',
                '《首都互联网协会发布坚守七条底线倡议书》'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.panel{
    .panel-heading{
        text-align: left;
        font-weight: bold;
    }
    .panel-body{
        ul{
            padding: 0px;
            list-style-type: none;
            text-align: left;
            display: inline-block;
            li{
                color: orange;
                margin-top: 5px;
            }
            li:hover{
                cursor: pointer;
                // color: black;
            }
        }
        
    }
}
</style>

