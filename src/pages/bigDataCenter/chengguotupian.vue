<template>
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">大数据中心</el-breadcrumb-item>
      <el-breadcrumb-item>优秀成果展示</el-breadcrumb-item>
      <el-breadcrumb-item>图片</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <div class="clearfix linetitle-box">
      <span class="fl title">图片</span>
    </div>
      <div class="clearfix album-list-box">
        <div class="album-item" @click="jump('/bigDataCenter/chengguotupianDetail')">
          <div class="div1"></div>
          <div class="div2"></div>
          <div class="album">
            <div class="imgbox">
              <img/>
              <img/>
              <img/>
              <img/>
            </div>
            <p>组织干警参观禁毒教育基地</p>
          </div>
        </div>
        <div class="album-item" @click="jump('/bigDataCenter/chengguotupianDetail')">
          <div class="div1"></div>
          <div class="div2"></div>
          <div class="album">
            <div class="imgbox">
              <img/>
              <img/>
              <img/>
              <img/>
            </div>
            <p>组织干警参观禁毒教育基地</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
     name: 'bigDataCenter',
     data() {
      return {
      }
    },
    methods: {
      jump: function (e) {
        this.$router.push(e);
      }
    }
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
  .album-list-box{
    .album-item{
      float:left;
      position: relative;
      width:225px;
      height:195px;
      margin-top:30px;
      margin-right:40px;
      cursor: pointer;
      .div1,.div2,.album{
        position:absolute;
        width:215px;
        height:185px;
        border:1px solid #dbdcde;
        background:#fff;
      }
      .div1{
        top:10px;
        left:10px;
      }
      .div2{
        position:absolute;
        top:5px;
        left:5px;
      }
      .album{
        .imgbox{
          padding-left:8px;
          padding-top:8px;
          img{
            width:90px;
            height:58px;
            margin:3px;
          }
        }
        p{
          display:block;
          line-height:30px;
          margin-left:10px;
        }
      }
    }
  }
</style>
