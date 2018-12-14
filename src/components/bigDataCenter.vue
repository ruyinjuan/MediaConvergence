<template>

  <el-container>
    <el-aside width="200px">
      <div class="left-wrap">
        <el-menu :default-active="activeIndex" class="leftmenubox" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-gaojian"></i>
              <span slot="title">大数据云平台</span>
            </template>
            <el-menu-item index="1-1">
              <router-link class="item" :to="{path:'/bigDataCenter/index'}">融媒体大厅</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link class="item" :to="{name:'bigDataCenter'}"><div v-on:click="toParent('bigDataCenter')">全市动态</div></router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link class="item" :to="{name:'bigDataCenter'}"><div v-on:click="toParent('bigDataCenter')">月度数据排行</div></router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link class="item" :to="{name:'bigDataCenter'}"><div v-on:click="toParent('bigDataCenter')">新媒体数据排行榜</div></router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-zixun"></i>
              <span slot="title">优秀成果作品</span>
            </template>
            <el-menu-item index="2-1">
              <router-link class="item" :to="{name:'bigDataCenter'}"><div v-on:click="toParent('bigDataCenter')">图片</div></router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link class="item" :to="{name:'bigDataCenter'}"><div v-on:click="toParent('bigDataCenter')">视频</div></router-link>
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
  }
</style>

