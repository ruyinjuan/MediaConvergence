import Vue from 'vue'
import Router from 'vue-router'
/*import Home from 'pages/home/home' //首页
import FullMediaEdit from 'pages/fullMediaEdit/index' //全媒体编辑
import MonitorDisposal from 'pages/monitorDisposal/index' //舆情监测处置
import MediaPropagation from 'pages/mediaPropagation/index' //融媒传播力
import TeamManage from 'pages/teamManage/index' //队伍管理
import BackstageManage from 'pages/backstageManage/index' //后台管理*/

import Home from 'components/home'
import FullMediaEdit from 'components/fullMediaEdit'
import MonitorDisposal from 'components/monitorDisposal'
import BigDataCenter from 'components/bigDataCenter'
import MediaPropagation from 'components/mediaPropagation'
import TeamManage from 'components/teamManage'
import BackstageManage from 'components/backstageManage'

import BigDataCenterMain from 'pages/bigDataCenter/index' //大数据中心

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
      component: BigDataCenter,
      children: [
        {
          path: 'index',
          name: 'bigDataCenter1',
          component: BigDataCenterMain
        }
      ]
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
