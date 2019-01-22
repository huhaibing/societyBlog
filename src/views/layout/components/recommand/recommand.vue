<template>
    <div class="recommand">
        <person :personInfo='personInfo'></person>
        <topic></topic>
        <board></board>
    </div>
</template>

<script>
import person from './person.vue'
import topic from './topic.vue'
import board from './board.vue'
export default {
    name:'recommand',
    props:{
        personInfo:{
            type:Object
        }
    },
    components:{person , topic,board},
    data(){
        return{
            name:''
        }
    }

}
</script>

<style lang="scss" scoped>
.recommand{
    float: left;
    width: 230px;
    margin-right: 10px;
    // margin-top: 
    // height: 100px;
    // background-color: black;
    // overflow: hidden;
}
</style>
