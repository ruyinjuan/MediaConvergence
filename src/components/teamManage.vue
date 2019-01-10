<template>

  <el-container>
    <el-aside width="200px">
      <div class="left-wrap">
        <el-menu default-active="1-1" class="leftmenubox">
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-gaojian"></i>
              <span slot="title">绩效考核</span>
            </template>
            <el-menu-item index="1-1">
              <router-link class="item" :to="{path:'/teamManage/zongtikaohe'}">总体考核</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link class="item" :to="{path:'/teamManage/weixinkaohe'}">微信考核</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link class="item" :to="{path:'/teamManage/weibokaohe'}">微博考核</router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link class="item" :to="{path:'/teamManage/menhukaohe'}">门户网站考核</router-link>
            </el-menu-item>
            <el-menu-item index="1-5">
              <router-link class="item" :to="{path:'/teamManage/qinmiandukaohe'}">系统勤勉度考核</router-link>
            </el-menu-item>
            <el-menu-item index="1-6">
              <router-link class="item" :to="{path:'/teamManage/xinmeitibangdan'}">新媒体榜单</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-zixun"></i>
              <span slot="title">通讯录</span>
            </template>
            <el-menu-item index="2-1">
              <router-link class="item" :to="{path:'/teamManage/tongxunlu'}">通讯录</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="iconfont icon-zixun"></i>
              <span slot="title">媒体记者</span>
            </template>
            <el-menu-item index="3-1">
              <router-link class="item" :to="{path:'/teamManage/meitijizhe'}">媒体记者</router-link>
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

