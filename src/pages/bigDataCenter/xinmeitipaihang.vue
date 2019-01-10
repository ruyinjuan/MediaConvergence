<template>
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">大数据中心</el-breadcrumb-item>
      <el-breadcrumb-item>大数据云平台</el-breadcrumb-item>
      <el-breadcrumb-item>新媒体数据排行榜</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <div class="clearfix linetitle-box">
        <span class="fl title">新媒体运营报告</span>
        <span class="fr">共有<i>212</i>条记录</span>
      </div>
      <div class="clearfix table-data">
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column prop="title" label="标题" align="center"></el-table-column>
          <el-table-column prop="puData" label="发布时间" align="center"></el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
     name: 'bigDataCenter',
     data() {
      return {
        dataTime: '',
        tableData: [
          {
            title: '检察长列席审委会，助力司法公正',
            puData: '2018/9/29'
          }, {
            title: '检察长列席审委会，助力司法公正',
            puData: '2018/9/29'
          }, {
            title: '检察长列席审委会，助力司法公正',
            puData: '2018/9/29'
          }, {
            title: '检察长列席审委会，助力司法公正',
            puData: '2018/9/29'
          }, {
            title: '检察长列席审委会，助力司法公正',
            puData: '2018/9/29'
          }, {
            title: '检察长列席审委会，助力司法公正',
            puData: '2018/9/29'
          }, {
            title: '检察长列席审委会，助力司法公正',
            puData: '2018/9/29'
          }, {
            title: '检察长列席审委会，助力司法公正',
            puData: '2018/9/29'
          }, {
            title: '检察长列席审委会，助力司法公正',
            puData: '2018/9/29'
          }, {
            title: '检察长列席审委会，助力司法公正',
            puData: '2018/9/29'
          }, {
            title: '检察长列席审委会，助力司法公正',
            puData: '2018/9/29'
          }
        ]
      };
    },
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/lib-variable";
  @import "~assets/css/lib-mixin";

  .linetitle-box{
    margin-top:10px;
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
  .table-data{
    margin-top: 30px;
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
  }
</style>
