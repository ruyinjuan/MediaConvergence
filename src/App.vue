<template>
  <div id="app" ref="app" class="theme-red">
    <el-container>
      <el-header>
        <HeaderWrap ref="HeaderWrap"></HeaderWrap>
      </el-header>
      <router-view/>
    </el-container>
  </div>
</template>

<script>
import HeaderWrap from 'components/header.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  //导入getters取得state放入计算属性中
  computed: {
    ...mapGetters(['themeCls'])
  },
  data() {
    return {
    }
  },
  mounted() {
    this.setTheme()
  },
  watch: {
    themeCls(newVal) {
      newVal ? this.setTheme() : null
    }
  },
  methods: {
    setTheme() {
      const target = this.$refs.app
      const localStorageCls = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'red'
      target.className = this.themeCls ? 'theme-' + this.themeCls
                                  : `theme-${localStorageCls}`
    }
  },
  components: {
    HeaderWrap
  }
}
</script>

<style>
  .el-header, .el-footer {
    padding: 0;
  }
  .el-container {
    height:100vh;
    border-top: 1px solid #104865;
  }
  .el-aside {
    background-color: #383a6a;
    color: #fff;
  }
  .el-main {
    color: #333;
    min-width:1166px;
    overflow:auto;
  }
</style>
