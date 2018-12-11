<template>
  <div id="app" ref="app" class="theme-red">
    <el-container>
      <el-header>
        <HeaderWrap ref="HeaderWrap" v-on:fromChild="fromChild"></HeaderWrap>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <component v-bind:is="menuName"></component>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderWrap from 'components/header.vue'
import home from 'components/home.vue'
import backstageManage from 'components/backstageManage.vue'
import bigDataCenter from 'components/bigDataCenter.vue'
import fullMediaEdit from 'components/fullMediaEdit.vue'
import mediaPropagation from 'components/mediaPropagation.vue'
import monitorDisposal from 'components/monitorDisposal.vue'
import teamManage from 'components/teamManage.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  //导入getters取得state放入计算属性中
  computed: {
    ...mapGetters(['themeCls'])
  },
  data() {
    return {
      menuName: 'home'
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
    },
    fromChild(val) {
      this.menuName = val
    }
  },
  components: {
    HeaderWrap,
    home, backstageManage, bigDataCenter, fullMediaEdit, mediaPropagation, monitorDisposal, teamManage
  }
}
</script>

<style>
  .el-header, .el-footer {
    padding: 0;
  }
  .el-container {
    height:100vh;
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
