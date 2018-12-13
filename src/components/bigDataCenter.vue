<template>
    <div class="left-wrap">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="iconfont icon-gaojian"></i>
            <span slot="title">大数据云平台</span>
          </template>
          <el-menu-item index="1-1">融媒体大厅</el-menu-item>
          <el-menu-item index="1-2">全市动态</el-menu-item>
          <el-menu-item index="1-3">月度数据排行</el-menu-item>
          <el-menu-item index="1-4">新媒体数据排行榜</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="iconfont icon-zixun"></i>
            <span slot="title">优秀成果作品</span>
          </template>
          <el-menu-item index="2-1">图片</el-menu-item>
          <el-menu-item index="2-2">视频</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script type="text/javascript">
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/lib-variable";
  @import "~assets/css/lib-mixin";
  .header-wrap{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #191a2c;
    ul{
      width: 100%;
      display: flex;
      justify-content: flex-end;
      li{
        color: $cl-txt;
        height:56px;
        line-height:56px;
        padding: 0 20px;
        cursor: pointer;
        font-weight:bold;
        &.active{
          background:#262f50;
          border-bottom:4px solid #2a578e;
        }
      }
    }

  }
</style>

