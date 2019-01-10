<template>
  <div class="video-wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">大数据中心</el-breadcrumb-item>
      <el-breadcrumb-item>优秀成果展示</el-breadcrumb-item>
      <el-breadcrumb-item>图片</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <div class="clearfix album-list-box">
        <div class="title-box">
          <span class="title">组织干警参观进度教育季度</span>
          <span class="num">20张</span>
          <span class="date">2018-12-10</span>
        </div>
        <div class="album-item">
          <img src="" @click="openVideo"/>
          <img src=""/>
          <img src=""/>
          <img src=""/>
          <img src=""/>
          <img src=""/>
        </div>
      </div>
      <el-dialog :visible.sync="dialogTableVisible" class="video-wrap">
        <img src="" alt="" class="dialog-img">
      </el-dialog>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
     name: 'bigDataCenter',
     data() {
      return {
        dialogTableVisible: false,
      };
    },
    methods: {
      openVideo() {
        this.dialogTableVisible = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/lib-variable";
  @import "~assets/css/lib-mixin";

  .album-list-box{
    border:1px solid #dbdcde;
    .title-box{
      font-size:18px;
      padding:15px;
      border-bottom:1px solid #dbdcde;
      .title{
        border-right:1px solid #dbdcde;
        line-height:15px;
        padding:0 15px 0 0;
        color:#333;
      }
      .num{
        color:#ff8484;
        margin-left:15px;
      }
      .date{
        float:right;
        color:#b3b3b3;
      }
    }
    .album-item{
      padding:20px 0 0 15px;
      img{
        width:200px;
        height:130px;
        margin:5px 15px;
        background:#3a8ee6;
      }
    }
  }
  .video-wrap{
    .dialog-img{
      display: block;
      min-height: 400px;
      width:100%;
    }
  }
</style>
