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
import System from 'components/system'

import rongmeidating from 'pages/bigDataCenter/index' //大数据中心
import quanshidongtai from 'pages/bigDataCenter/quanshidongtai' //全市动态
import yuedupaihang from 'pages/bigDataCenter/yuedupaihang' //月度排行
import xinmeitipaihang from 'pages/bigDataCenter/xinmeitipaihang' //新媒体排行
import chengguotupian from 'pages/bigDataCenter/chengguotupian' //成果展示-图片
import chengguotupianDetail from 'pages/bigDataCenter/chengguotupianDetail' //成果展示-图片详情页
import chengguoshipin from 'pages/bigDataCenter/chengguoshipin' //成果展示-视频
import chengguoshipinDetail from 'pages/bigDataCenter/chengguoshipinDetail' //成果展示-视频详情页
import deptPage from 'pages/system/deptPage' //系统管理-部门管理
import deptUpdate from 'pages/system/deptUpdate' //系统管理-部门管理-部门编辑新增
import rolePage from 'pages/system/rolePage' //系统管理-角色管理
import roleUpdate from 'pages/system/roleUpdate' //系统管理-角色管理-角色编辑新增
import userPage from 'pages/system/userPage' //系统管理-用户管理
import userUpdate from 'pages/system/userUpdate' //系统管理-用户管理-用户编辑新增
import accountPage from 'pages/system/accountPage' //系统管理-账号管理
import accountUpdate from 'pages/system/accountUpdate' //系统管理-账号管理-账号编辑新增
import operatePage from 'pages/system/operatePage' //系统管理-用户管理
import zongtikaohe from 'pages/teamManage/index' //队伍管理-总体考核
import xinmeitibangdan from 'pages/teamManage/xinmeitibangdan' //队伍管理-新媒体榜单

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
          path: 'rongmeidating',
          name: 'rongmeidating',
          component: rongmeidating
        },
        {
          path: 'quanshidongtai',
          name: 'quanshidongtai',
          component: quanshidongtai
        },
        {
          path: 'yuedupaihang',
          name: 'yuedupaihang',
          component: yuedupaihang
        },
        {
          path: 'xinmeitipaihang',
          name: 'xinmeitipaihang',
          component: xinmeitipaihang
        },
        {
          path: 'chengguotupian',
          name: 'chengguotupian',
          component: chengguotupian
        },
        {
          path: 'chengguotupianDetail',
          name: 'chengguotupianDetail',
          component: chengguotupianDetail
        },
        {
          path: 'chengguoshipin',
          name: 'chengguoshipin',
          component: chengguoshipin
        },
        {
          path: 'chengguoshipinDetail',
          name: 'chengguoshipinDetail',
          component: chengguoshipinDetail
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
      component: TeamManage,
      children: [
        {
          path: 'zongtikaohe',
          name: 'zongtikaohe',
          component: zongtikaohe
        }, {
          path: 'xinmeitibangdan',
          name: 'xinmeitibangdan',
          component: xinmeitibangdan
        }
      ]
    },
    {
      path: '/backstageManage',
      name: 'backstageManage',
      component: BackstageManage
    },
    {
      path: '/system',
      name: 'system',
      component: System,
      children: [
        {
          path: 'dept',
          name: 'dept',
          component: deptPage
        }, {
          path: 'dept/edit',
          name: 'dept/edit',
          component: deptUpdate
        }, {
          path: 'role',
          name: 'role',
          component: rolePage
        }, {
          path: 'role/edit',
          name: 'role/edit',
          component: roleUpdate
        }, {
          path: 'user',
          name: 'user',
          component: userPage
        }, {
          path: 'user/edit',
          name: 'user/edit',
          component: userUpdate
        }, {
          path: 'account',
          name: 'account',
          component: accountPage
        }, {
          path: 'account/edit',
          name: 'account/edit',
          component: accountUpdate
        }, {
          path: 'operate',
          name: 'operate',
          component: operatePage
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})
