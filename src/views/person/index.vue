<template>
    <div class="personInfo">
        <el-form :model="personForm" :rules="rules" ref="personForm" label-width="100px" class="personForm" label-position="right">
             <el-form-item label="名字" prop="name">
                <el-input  v-model="personForm.name" ></el-input>
            </el-form-item>


            <el-form-item label="性别">
                <el-radio-group v-model="personForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>

             <el-form-item label="座右铭" prop="motto">
                <el-input  v-model="personForm.motto" ></el-input>
            </el-form-item>

             <el-form-item label="电话" prop="phone">
                <el-input  v-model="personForm.phone" ></el-input>
            </el-form-item>

            <el-form-item label="邮箱" prop="email">
                <el-input  v-model="personForm.email" ></el-input>
            </el-form-item>

            

            <div style="overflow: hidden;">
                <label style="float:left; margin-left:60px;">头像</label>
            </div>
            <el-form-item  prop="portrait" >
                <img :src="personForm.portrait" class="img-thumbnail"/>
                <input type="file" id="xdaTanFileImg"  accept="image/*"/>
            </el-form-item>

            <el-form-item label="头像地址" prop="email">
                <el-input  v-model="personForm.portrait" ></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('personForm')">提交</el-button>
                <el-button @click="resetForm('personForm')">重置</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
 export default {
    data() {

        var checkPhone = (rule, value, callback) => {
            const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
            if (!value) {
            return callback(new Error('电话号码不能为空'))
            }
            setTimeout(() => {
            // Number.isInteger是es6验证数字是否为整数的方法,但是我实际用的时候输入的数字总是识别成字符串
            // 所以我就在前面加了一个+实现隐式转换

            if (!Number.isInteger(+value)) {
                callback(new Error('请输入数字值'))
            } else {
                if (phoneReg.test(value)) {
                callback()
                } else {
                callback(new Error('电话号码格式不正确'))
                }
            }
            }, 100)
        }
        var checkEmail = (rule, value, callback) => {
            const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
            if (!value) {
            return callback(new Error('邮箱不能为空'))
            }
            setTimeout(() => {
            if (mailReg.test(value)) {
                callback()
            } else {
                callback(new Error('请输入正确的邮箱格式'))
            }
            }, 100)
        }


      return {
        personForm: {
          name: '',
          sex: '',
          motto:'',
          phone: '',
          email: '',
          portrait: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          motto: [
            { required: true, message: '请输入座右铭', trigger: 'change' }
          ],
          phone: [
            {  required: true, message: '请输入电话', trigger: 'change' },
            // { validator: checkPhone, trigger: 'change' }
          ],
          email: [
            {  required: true, message: '请输入邮箱', trigger: 'change' },
            // { validator: checkEmail, trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              var img =  $('#xdaTanFileImg')[0]
              console.log(img);
            //   xmTanUploadImg(img)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    //   ,xmTanUploadImg(obj){
    //       for(var tt in obj)
    //         console.log(tt)
    //       var file = obj.files[0];
                
    //       console.log(obj);console.log(file);
    //       console.log("file.size = " + file.size);  //file.size 单位为byte

    //       var reader = new FileReader();

    //       //读取文件过程方法
    //       reader.onloadstart = function (e) {
    //           console.log("开始读取....");
    //       }
    //       reader.onprogress = function (e) {
    //           console.log("正在读取中....");
    //       }
    //       reader.onabort = function (e) {
    //           console.log("中断读取....");
    //       }
    //       reader.onerror = function (e) {
    //           console.log("读取异常....");
    //       }
    //       reader.onload = function (e) {
    //           console.log("成功读取....");

    //         //   var img = document.getElementById("xmTanImg");
    //           this.personForm.portrait = e.target.result;
    //           //或者 img.src = this.result;  //e.target == this
    //       }

    //       reader.readAsDataURL(file)
    //   }
    },
    created(){
        this.$api.post('/chatting/user/getUser.do')
            .then(r =>{
                this.personForm = r.aaData
                // for( var tt in this.dynamicList)
                //   for (var m in tt)
                //     console.log(m+":"+tt[m])
            })
            .catch(error => {
                
            });
    }
  }
</script>


<style lang="scss" scoped>
.personInfo{
    width: 100%;
    overflow: hidden;
    min-height: 100px;
    background-color: white;
    .personForm{
        width: 400px;
        margin: 30px auto 0px auto;
        img{
            width: 300px;
            // margin-left: 80px;
            height: auto;
        }
    }
}
</style>
