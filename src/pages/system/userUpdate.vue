<template>
  <div class="edit-box">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">系统设置</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加用户</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <div class="clearfix table-data">
        <div class="clearfix form-box">
          <el-form :model="form" :rules="rules" ref="form" label-width="80px">
            <el-form-item label="所属部门" prop="deptCode">
              <el-select v-model="form.deptCode" placeholder="请选择部门">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="管理角色" prop="roleCode">
              <el-select v-model="form.roleCode" placeholder="请选择角色">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="是否启用">
              <el-radio-group v-model="form.isEnable">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="姓名" prop="userName">
              <el-input v-model="form.userName" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="登录账号" prop="userCode">
              <el-input v-model="form.userCode" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="pwd">
              <el-input v-model="form.pwd" type="password" placeholder="请输入登录密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="pwd2">
              <el-input v-model="form.pwd2" type="password" placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-radio-group v-model="form.sex">
                <el-radio label="0">男</el-radio>
                <el-radio label="1">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="职务">
              <el-select v-model="form.position" placeholder="请选择职务">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱">
              <el-input v-model="form.email" placeholder="请输入电子邮箱"></el-input>
            </el-form-item>
            <el-form-item label="兴趣标签">
              <el-input v-model="form.label" placeholder="请输入兴趣标签"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="btn-box fr">
          <button type="button" class="btn btn-save" @click="submitForm('form')">保存</button>
          <button type="button" class="btn btn-reset" @click="resetForm('form')">重置</button>
          <button type="button" class="btn btn-return">返回</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        form: {
          deptCode: '',
          roleCode: '',
          isEnable: '1',
          userName: '',
          userCode: '',
          pwd: '',
          pwd2: '',
          sex: '0',
          position: '',
          phone: '',
          email: '',
          label: ''
        },
        rules: {
          deptCode: [
            { required: true, message: '请选择部门', trigger: 'change' }
          ],
          roleCode: [
            { required: true, message: '请选择角色', trigger: 'change' }
          ],
          userName: [
            { required: true, message: '请填写姓名', trigger: 'blur' }
          ],
          userCode: [
            { required: true, message: '请填写账号', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请填写密码', trigger: 'blur' }
          ],
          pwd2: [
            { required: true, message: '请填写确认密码', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请填写手机号', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/css/lib-variable";
  @import "~assets/css/lib-mixin";

  .linetitle-box{
    margin-top:20px;
    margin-left:20px;
    span{
      line-height:15px;
      i{
        color:#3a8dff;
      }
    }
    .title{
      border-left:4px solid #3a8ee6;
      padding-left:10px;
      color:#4395e1;
    }
  }
  .btn{
    width:96px;
    height:35px;
    line-height:35px;
    font-size:14px;
    color:#fff;
    border:1px solid transparent;
    margin-right:10px;
  }
  .btn-save{
    background:#8693f3;
  }
  .btn-reset{
    background:#bc8dee;
  }
  .btn-return{
    background:#ffffff;
    color:#333;
  }
  .table-data{
    box-shadow: 0 0 20px 0 #bacddc;
    background: #f1f5fe;
    border: 1px solid #bacddc;
    .btn-box{
      margin:15px 20px;
    }
  }
  .form-box{
    background:#fff;
    padding:20px;
    min-height:60vh;
    .el-form{
      width:350px;
    }
  }
</style>
