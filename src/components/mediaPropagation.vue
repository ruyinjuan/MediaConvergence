<template>
  <el-container>
    <el-aside width="200px">
      <div class="left-wrap">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">融媒传播力</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航五</span>
            </template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
            <el-submenu index="5-4">
              <template slot="title">选项4</template>
              <el-menu-item index="5-4-1">选项1</el-menu-item>
            </el-submenu>
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

