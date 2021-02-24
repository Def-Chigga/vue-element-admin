<template>
  <!--登录页面-->
  <div class="login">
    <!--登录容器-->
    <div class="login-container">
      <!--登录头像-->
      <div class="login-avatar">
        <img src="./../assets/images/timg.gif" alt="">
      </div>
      <!--登录表单-->
      <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0">
        <el-form-item label="" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入登录密码"  prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <div class="login-verifyCode">
          <el-form-item class="verifyCode-input" label="" prop="verifyCode">
            <el-input v-model="loginForm.verifyCode" placeholder="请输入手机验证码"  prefix-icon="el-icon-mobile"></el-input>
          </el-form-item>
          <el-form-item class="verifyCode-img" label="">
            <img src="../assets/images/verifyCode.gif" alt="" title="验证码">
          </el-form-item>
        </div>
        <el-form-item class="login-btn">
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        verifyCode: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        verifyCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    // 表单校验并提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            type: 'success',
            message: '登录成功'
          });
          sessionStorage.setItem('token', `${this.loginForm.username}${this.loginForm.password}`);
          this.$router.push('/main');
        } else {
          this.$message({
            type: 'error',
            message: '登录失败'
          });
          return false;
        }
      });
    },
    // 表单重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="scss">
  @import "./../assets/css/mixin";

  .login {
    width: 100%;
    height: 100%;
    background: aquamarine;
    position: relative;

    .login-container {
      width: 450px;
      height: 380px;
      background-color: #FFFFFF;
      @include XYCenter();
      border-radius: 3px;

      .login-avatar {
        width: 130px;
        height: 130px;
        border: 1px solid #EEEEEE;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        margin: -65px auto;
        background-color: #FFFFFF;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #EEEEEE;
        }
      }
      .login-form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        .login-verifyCode{
          display: flex;
          align-items: center;
          .verifyCode-input{
            width: 70%;
          }
          .verifyCode-img{
            width: 30%;
            height: 45px;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .login-btn{
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
</style>
