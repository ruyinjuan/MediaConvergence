<template>
  <el-container>
    <el-aside width="200px">
      <div class="left-wrap">
        <el-menu default-active="1-1" class="leftmenubox">
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-gaojian"></i>
              <span slot="title">系统管理</span>
            </template>
            <el-menu-item index="1-1">
              <router-link class="item" :to="{path:'/system/dept'}">部门管理</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link class="item" :to="{path:'/system/role'}">角色管理</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link class="item" :to="{path:'/system/user'}">用户管理</router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link class="item" :to="{path:'/system/account'}">账号管理</router-link>
            </el-menu-item>
            <el-menu-item index="1-5">
              <router-link class="item" :to="{path:'/system/operate'}">操作日志</router-link>
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

