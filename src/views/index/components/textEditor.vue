<template>
    <div class="editor">
        <div class="textEditor" align="center">
            <div class="img">
                <img src="../../../assets/word.jpg">
            </div>
            <div class="text">
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 3}"
                    placeholder="请输入内容"
                    v-model="textarea">
                </el-input>

            </div>
            <div class="button">
                <div class="pic">
                    <span class="icon iconfont icon-tupian2"></span>
                    <span class="picName" @click="showUpPic()">图片</span>           
                </div>
                <div class="publish">
                    <button @click="uploadMess()">发布</button>
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
                <el-upload action="https://sm.ms/api/upload"
                    list-type="picture-card"
                    ref="upload"
                    :on-change="change"
                    :on-remove="handleRemove"
                    :on-success="uploadSuccess"
                    :auto-upload="false"
                    >
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
import {Message} from 'element-ui'
export default {
     data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        title:'本地上传',
        picNum:0,
        upPic:false,
        fileList:[],
        successLink:[],
        textarea:''
      };
    },
    watch:{

    },
    methods: {
      handleRemove(file, fileList) {
          this.picNum = fileList.length;
          this.fileList = fileList;
        console.log(file, fileList);
      },
      change(file, fileList){
        this.picNum = fileList.length;
        this.fileList = fileList
        // console.log('tupianNum:',this.picNum);
      },
      close(){
          this.$refs.upload.clearFiles()
          this.picNum = 0;
          this.upPic = false
      },
      showUpPic(){
          this.upPic = true;
      },
      uploadMess(){
        //   console.log("upload");
        //   this.$refs.upload.submit();
        var value="55db290787786fca3916701082583d13f8e6f4b4:leT7VVlBypxaq7LaVNMG-Ulz1TI=:eyJkZWFkbGluZSI6MTQ5NTU5MTQ1NywiYWN0aW9uIjoiZ2V0IiwidWlkIjoiMTk0OSIsImFpZCI6IjM0OTAiLCJmcm9tIjoiZmlsZSJ9"
        var num =0;
        var that = this;
        var successLink = new Array();
        for(var tt = 0 ;tt < this.fileList.length ; tt++){
            var formData = new FormData();
            formData.append('Token',value)
            formData.append("file",this.fileList[tt].raw);
            $.ajax({
                url: 'http://up.imgapi.com/',
                type: 'POST',
                success: function(data){
                    // console.log(data);
                    // $('#res').html(JSON.stringify(data));
                    console.log("上传成功，linkurl:"+data.linkurl);
                    successLink.push(data.linkurl);
                    num++;
                    if(num == that.picNum) {
                        // alert("全部上传完毕");
                        that.successLink = successLink
                        //上传动态
                        let param = new URLSearchParams()
                        param.append('description', that.textarea)
                        param.append('pictures', that.successLink)
                         that.$api.post('/chatting/post/insert.do',param)
                         .then(r =>{
                            if(r.code == 0){
                                //上传成功
                                Message({
                                    message: '动态上传成功',
                                    type: 'success',
                                    duration: 3 * 1000
                                })
                                that.$refs.upload.clearFiles()
                                that.picNum = 0;
                                that.upPic = false
                                // alert('上传成功');
                            }
                         })
                         .catch(error => {
                             Message({
                                message: '动态上传失败',
                                type: 'warning',
                                duration: 3 * 1000
                            })
                         })
                    }
                    //window.location.reload();
                },
                error: function(data){
                    console.log(data);
                },
                data:formData,
                cache: false,
                contentType: false,
                processData: false
            });
        }

      },
      uploadSuccess(response, file, fileList){
          console.log('success');
        console.log(response);
        console.log(response.code);
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
            // min-height: 100px;
            // padding: 5px;
            // border: 1px solid black;
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
