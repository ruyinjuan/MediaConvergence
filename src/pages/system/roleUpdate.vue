<template>
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">系统设置</el-breadcrumb-item>
      <el-breadcrumb-item>角色管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加角色</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <div class="clearfix table-data">
        <div class="clearfix form-box">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="角色名称">
              <el-input v-model="form.deptName" placeholder="请输入角色名称" class="w200"></el-input>
            </el-form-item>
            <el-form-item label="管理权限">
              <div class="el-table form-table el-table--fit el-table--striped el-table--enable-row-hover el-table--enable-row-transition">
                <table width="100%" class="el-table">
                  <thead>
                  <tr>
                    <th class="is-leaf"><div class="cell">导航名称</div></th>
                    <th class="is-leaf is-center"><div class="cell">权限分配</div></th>
                    <th class="is-leaf"><div class="cell">全选</div></th>
                  </tr>
                  </thead>
                  <tbody v-for="tableList in form.tableData">
                  <tr>
                    <td class="parent"><div class="cell">{{tableList.name}}</div></td>
                    <td width="600"><div class="cell"><el-checkbox :label="tableList.state" :key="tableList.state">{{tableList.state}}</el-checkbox></div></td>
                    <td><div class="cell"><el-checkbox></el-checkbox></div></td>
                  </tr>
                  <tr v-for="childList in tableList.child">
                    <td class="child pl20"><div class="cell">{{childList.name}}</div></td>
                    <td class="child"><div class="cell"><el-checkbox v-for="stat in childList.state" :label="stat" :key="stat">{{stat}}</el-checkbox></div></td>
                    <td class="child"><div class="cell"><el-checkbox @change="handleCheckAllChange(tableList.name)"></el-checkbox></div></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="btn-box fr">
          <button type="button" class="btn btn-save">保存</button>
          <button type="button" class="btn btn-submit">提交</button>
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
          admCode: '',
          tableData: [
            {
              name: '中央信息厨房',
              state: '显示',
              child: [
                {
                  name: '投稿系统',
                  state: ['显示', '查看', '投稿', '编辑', '审核']
                }, {
                  name: '消息中心',
                  state: ['显示', '查看', '添加', '修改', '删除']
                }, {
                  name: '热点事件',
                  state: ['显示', '查看']
                }
              ]
            }, {
              name: '大数据中心',
              state: '显示',
              child: [
                {
                  name: '大数据云平台',
                  state: ['显示']
                }, {
                  name: '新媒体大厅',
                  state: ['显示', '查看']
                }, {
                  name: '各院监控',
                  state: ['显示', '查看']
                }, {
                  name: '全媒体排行',
                  state: ['显示', '查看']
                }, {
                  name: '两微一端',
                  state: ['显示', '查看']
                }, {
                  name: '新媒体运营报告',
                  state: ['显示', '查看']
                }, {
                  name: '微信媒体数据',
                  state: ['显示', '查看']
                }
              ]
            }
          ]
        }
      };
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
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
  .btn-submit{
    background:#89c3f8;
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
  .w200{
    width:200px;
  }
  .form-box{
    background:#fff;
    padding:20px;
    min-height:60vh;
    .el-form-item__label{
      padding-right:30px;
    }
  }
  .form-table{
    border:1px solid #bacddc;
    font-size:13px;
    td{
      padding:10px 0;
      border:1px solid #f3f3f3;
    }
    .pl20{
      padding-left:20px;
    }
    .parent{
      color:#393b6a;
    }
  }
</style>
