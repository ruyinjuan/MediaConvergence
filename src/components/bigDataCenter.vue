<template>

  <el-container>
    <el-aside width="200px">
      <div class="left-wrap">
        <el-menu default-active="1-1" class="leftmenubox">
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-gaojian"></i>
              <span slot="title">大数据云平台</span>
            </template>
            <el-menu-item index="1-1">
              <router-link class="item" :to="{path:'/bigDataCenter/rongmeidating'}">融媒体大厅</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link class="item" :to="{path:'/bigDataCenter/quanshidongtai'}">全市动态</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link class="item" :to="{path:'/bigDataCenter/yuedupaihang'}">月度数据排行</router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link class="item" :to="{path:'/bigDataCenter/xinmeitipaihang'}">新媒体数据排行榜</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-zixun"></i>
              <span slot="title">优秀成果作品</span>
            </template>
            <el-menu-item index="2-1">
              <router-link class="item" :to="{path:'/bigDataCenter/chengguotupian'}">图片</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link class="item" :to="{path:'/bigDataCenter/chengguoshipin'}">视频</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
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

  .leftmenubox a{
    color:#fff;
    display:block;
  }
</style>

