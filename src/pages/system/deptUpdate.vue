<template>
  <div class="edit-box">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">系统设置</el-breadcrumb-item>
      <el-breadcrumb-item>部门管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加部门</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <div class="clearfix table-data">
        <div class="clearfix form-box">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="所属部门">
              <el-select v-model="form.deptCode" placeholder="请选择部门">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="名称">
              <el-input v-model="form.deptName" placeholder="请输入部门名称"></el-input>
            </el-form-item>
            <el-form-item label="级别">
              <el-select v-model="form.level" placeholder="请选择级别">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="位置">
              <el-input v-model="form.address" placeholder="请输入部门显示位置"></el-input>
            </el-form-item>
            <el-form-item label="行政编码">
              <el-input v-model="form.admCode" placeholder="请输入部门行政编码"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="btn-box fr">
          <button type="button" class="btn btn-save">保存</button>
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
          deptName: '',
          level: '',
          address: '',
          admCode: ''
        }
      };
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
