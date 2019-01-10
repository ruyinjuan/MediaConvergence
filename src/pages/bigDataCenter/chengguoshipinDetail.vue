<template>
  <div class="video-wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">大数据中心</el-breadcrumb-item>
      <el-breadcrumb-item>优秀成果展示</el-breadcrumb-item>
      <el-breadcrumb-item>视频</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <div class="clearfix album-list-box">
        <div class="title-box">
          <span class="title">组织干警参观进度教育季度</span>
          <span class="num">20张</span>
          <span class="date">2018-12-10</span>
        </div>
        <div class="clearfix album-item">
          <div class="img" @click="openDialog"><i class="iconfont icon-bofang"></i><img/></div>
          <div class="img"><i class="iconfont icon-bofang"></i><img/></div>
          <div class="img"><i class="iconfont icon-bofang"></i><img/></div>
          <div class="img"><i class="iconfont icon-bofang"></i><img/></div>
          <div class="img"><i class="iconfont icon-bofang"></i><img/></div>
          <div class="img"><i class="iconfont icon-bofang"></i><img/></div>
        </div>
      </div>
      <el-dialog :visible.sync="detialPlayVideo" @close="closePlay">
        <Player :video-url="videoUrl" :state="state"></Player>
      </el-dialog>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Player from '../../components/Player'

  export default {
     name: 'chengguoshipinDetail',
     data() {
      return {
        detialPlayVideo: false,
        videoUrl: '',
        state: false
      };
    },
    mounted() {
    },
    components: {
      Player
    },
    methods: {
       openDialog() {
         this.detialPlayVideo = true;
         this.videoUrl = 'http://vjs.zencdn.net/v/oceans.mp4';
         this.state = false;
       },
      closePlay() {
         this.videoUrl = '';
         this.state = true;
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
      padding:20px 0 20px 15px;
      .img{
        position:relative;
        float:left;
        width:200px;
        height:130px;
        margin:5px 15px;
        background:#3a8ee6;
        cursor:pointer;
        i.icon-bofang{
          position:absolute;
          background:rgba(0,0,0,0.5);
          font-size:50px;
          color:rgba(255,255,255,0.7);
          padding:28px 75px;
        }
      }
    }
  }
</style>
