<template>
  <div class="teamManage">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">队伍管理</el-breadcrumb-item>
      <el-breadcrumb-item>绩效考核</el-breadcrumb-item>
      <el-breadcrumb-item>新媒体榜单</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs-box">
        <el-tab-pane label="总榜单" name="1"></el-tab-pane>
        <el-tab-pane label="微信榜单" name="2"></el-tab-pane>
        <el-tab-pane label="微博榜单" name="3"></el-tab-pane>
      </el-tabs>
      <div class="clearfix linetitle-box">
        <span class="fl title">第一季度升级榜单</span>
      </div>
      <div class="clearfix table-data">
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column type="index" label="序号" width="50"></el-table-column>
          <el-table-column prop="name" label="单位名称" show-overflow-tooltip ></el-table-column>
          <el-table-column prop="level" label="单位层级" width="80" align="center"></el-table-column>
          <el-table-column prop="weixinNum" label="微信考核得分" sortable align="center"></el-table-column>
          <el-table-column prop="weiboNum" label="微博考核得分" sortable align="center"></el-table-column>
          <el-table-column prop="menhuNum" label="门户网站考核得分" sortable align="center"></el-table-column>
          <el-table-column prop="zhumeitiNum" label="主流媒体考核得分" sortable align="center"></el-table-column>
          <el-table-column prop="qinmianduNum" label="勤勉度考核得分" sortable align="center"></el-table-column>
          <el-table-column label="总分" width="60" align="center">
            <template slot-scope="scope">
              <span class="txt-blue">{{scope.row.allNum}}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        activeName: '1',
        tableData: [
          {
            name: '北京市人民检察院',
            level: '市级',
            weixinNum: '96.12',
            weiboNum: '96.12',
            menhuNum: '96.12',
            zhumeitiNum: '96.12',
            qinmianduNum: '96.12',
            allNum: '97.95'
          }, {
            name: '北京市朝阳区人民检察院',
            level: '市级',
            weixinNum: '96.12',
            weiboNum: '96.12',
            menhuNum: '96.12',
            zhumeitiNum: '96.12',
            qinmianduNum: '96.12',
            allNum: '97.95'
          }, {
            name: '北京市东城区人民检察院',
            level: '市级',
            weixinNum: '96.12',
            weiboNum: '96.12',
            menhuNum: '96.12',
            zhumeitiNum: '96.12',
            qinmianduNum: '96.12',
            allNum: '97.95'
          }, {
            name: '北京市海淀区人民检察院',
            level: '市级',
            weixinNum: '96.12',
            weiboNum: '96.12',
            menhuNum: '96.12',
            zhumeitiNum: '96.12',
            qinmianduNum: '96.12',
            allNum: '97.95'
          }, {
            name: '北京市密云县人民检察院',
            level: '市级',
            weixinNum: '96.12',
            weiboNum: '96.12',
            menhuNum: '96.12',
            zhumeitiNum: '96.12',
            qinmianduNum: '96.12',
            allNum: '97.95'
          }, {
            name: '北京市西城区人民检察院',
            level: '市级',
            weixinNum: '96.12',
            weiboNum: '96.12',
            menhuNum: '96.12',
            zhumeitiNum: '96.12',
            qinmianduNum: '96.12',
            allNum: '97.95'
          }, {
            name: '北京市通州区人民检察院',
            level: '市级',
            weixinNum: '96.12',
            weiboNum: '96.12',
            menhuNum: '96.12',
            zhumeitiNum: '96.12',
            qinmianduNum: '96.12',
            allNum: '97.95'
          }, {
            name: '北京市延庆县人民检察院',
            level: '市级',
            weixinNum: '96.12',
            weiboNum: '96.12',
            menhuNum: '96.12',
            zhumeitiNum: '96.12',
            qinmianduNum: '96.12',
            allNum: '97.95'
          }, {
            name: '北京市人民检察院第二分院',
            level: '市级',
            weixinNum: '96.12',
            weiboNum: '96.12',
            menhuNum: '96.12',
            zhumeitiNum: '96.12',
            qinmianduNum: '96.12',
            allNum: '97.95'
          }, {
            name: '北京市人民检察院第三分院',
            level: '市级',
            weixinNum: '96.12',
            weiboNum: '96.12',
            menhuNum: '96.12',
            zhumeitiNum: '96.12',
            qinmianduNum: '96.12',
            allNum: '97.95'
          }, {
            name: '北京市石景山区人民检察院',
            level: '市级',
            weixinNum: '96.12',
            weiboNum: '96.12',
            menhuNum: '96.12',
            zhumeitiNum: '96.12',
            qinmianduNum: '96.12',
            allNum: '97.95'
          }
        ]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/css/lib-variable";
  @import "~assets/css/lib-mixin";

  .linetitle-box{
    margin-bottom:30px;
    span{
      line-height:15px;
      i{
        color:#3a8dff;
      }
    }
    .title{
      border-left:4px solid #3a8ee6;
      padding-left:10px;
    }
  }
  .btn{
    width:90px;
    height:35px;
    line-height:35px;
    font-size:14px;
    color:#fff;
  }
  .btn-adddept{
    width:105px;
    background:#6bb2f4;
    border:1px solid transparent;
    margin-right:10px;
  }
  .btn-delete{
    width:105px;
    background:#8693f3;
    border:1px solid transparent;
  }
  .table-data{
    box-shadow: 0 0 20px 0 #bacddc;
    background: #f1f5fe;
    border: 1px solid #bacddc;
    .table-img{
      float:left;
      width:37px;
      height:37px;
    }
    .txt{
      line-height:37px;
    }
    .table-btn-update{
      color:#67a8e7;
      font-weight:200;
      line-height:17px;
      i{
        float:left;
        font-size:20px;
        margin-right:3px;
      }
      span{
        font-size:13px;
        text-decoration: underline;
      }
    }
    .table-btn-delete{
      color:#bc8dee;
      font-weight:300;
      line-height:17px;
      i{
        float:left;
        font-size:20px;
        margin-right:3px;
      }
      span{
        font-size:13px;
        text-decoration: underline;
      }
    }
    .txt-blue{
      color:#67a8e7;
    }
  }
</style>
