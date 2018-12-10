import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/home' //首页
import FullMediaEdit from 'pages/fullMediaEdit/index' //全媒体编辑
import MonitorDisposal from 'pages/monitorDisposal/index' //舆情监测处置
import BigDataCenter from 'pages/bigDataCenter/index' //大数据中心
import MediaPropagation from 'pages/mediaPropagation/index' //融媒传播力
import TeamManage from 'pages/teamManage/index' //队伍管理
import BackstageManage from 'pages/backstageManage/index' //后台管理
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  //路由默认跳转
      redirect: 'home'
    }, {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/fullMediaEdit',
      name: 'fullMediaEdit',
      component: FullMediaEdit
    },
    {
      path: '/bigDataCenter',
      name: 'bigDataCenter',
      component: BigDataCenter
    },
    {
      path: '/mediaPropagation',
      name: 'mediaPropagation',
      component: MediaPropagation
    },
    {
      path: '/monitorDisposal',
      name: 'monitorDisposal',
      component: MonitorDisposal
    },
    {
      path: '/teamManage',
      name: 'teamManage',
      component: TeamManage
    },
    {
      path: '/backstageManage',
      name: 'backstageManage',
      component: BackstageManage
    }
  ],
  linkActiveClass: 'active'
})
