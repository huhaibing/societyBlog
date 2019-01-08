<template>
    <div class="editor">
        <div class="textEditor" align="center">
            <div class="img">
                <img src="../../../assets/word.jpg">
            </div>
            <div class="text">
            </div>
            <div class="button">
                <div class="pic">
                    <span class="icon iconfont icon-tupian2"></span>
                    <span class="picName" @click="showUpPic()">图片</span>           
                </div>
                <div class="publish">
                    <button>发布</button>
                </div>
            </div>
        </div>
        <div class="picUpload" v-show="upPic">
            <div class="info">
                <div class="title">
                    <div class="titleName">
                        {{title}}
                    </div>   
                    <span class="glyphicon glyphicon-remove" aria-hidden="true" @click="close()"></span>
                </div>
                <p>共{{picNum}}张,还能上传{{9-picNum}}张</p>
            </div>
            <div>
                <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-change="change"
                    :on-remove="handleRemove"
                    :auto-upload="false">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </div>           
        </div>
    </div>
</template>

<script>
export default {
     data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        title:'本地上传',
        picNum:0,
        upPic:false
      };
    },
    methods: {
      handleRemove(file, fileList) {
          this.picNum = fileList.length;
        console.log(file, fileList);
      },
      change(file, fileList){
        this.picNum = fileList.length;
      },
      handlePictureCardPreview(file) {
        //   console.log("1");
        this.picNum = this.picNum + 1;
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      close(){
          this.upPic = false;
      },
      showUpPic(){
          this.upPic = true;
      }  
    }
}
</script>


<style lang="scss" scoped>
.editor{
    width: 600px;
    .textEditor{
        width: 600px;
        padding: 15px 10px 5px 10px;
        // height: 165px;
        overflow: hidden;
        background-color: white;
        .img{
            float: left;
            margin-left: 0px;
            width: 200px;
            height: 21px;
        }
        .text{
            // overflow: hidden;
            float: left;
            width: 100%;
            min-height: 100px;
            padding: 5px;
            border: 1px solid black;
            border-radius: 5px;
            margin-top: 10px;
        }
        .button{
            width: 600px;
            padding: 5px 10px 5px 10px;
            overflow: hidden;
            color: green;
            .pic{
                float: left;
                // height:21px ;
                overflow: hidden;
                margin-top: 5px;
                .icon{
                    float: left;
                    font-size: 25px;
                    
                }
                .picName{
                    float: right;
                    margin-top: 7px;
                    margin-left: 5px;
                }
                .picName:hover{
                    color: #eb7350;
                    cursor: pointer;
                }
            }
                
            .publish{
                float: right;
                button{
                    margin-right: 10px;
                    margin-top: 7px;
                    background-color: #ffc09f;
                    color: white;
                    border: 0px;
                    width: 100px;
                    height: 30px;
                }
            }
        }
    }
    .picUpload{
        margin-top: 20px;
        padding: 10px;
        background-color: white;
        width: 490px;
        border-radius: 20px;
        .info{
            width: 100%;
            margin-bottom: 20px;
            text-align: left;
            .title{
                overflow: hidden;   
                .titleName{
                    float: left;
                    margin-left: 20px;
                    margin-right: 300px;
                    font-weight: bold;
                    font-size: 20px;
                }
            }
            p{
                    margin-left: 20px;
                    margin-top: 5px;
             }
             span:hover{
                 color: #eb7350;
                 cursor: pointer;
             }
        }
    }
}
</style>
<style>
.picUpload input{
    display: none!important;
}
</style>
