<template>
    <div class="header-wrap">
      <div class="logobox clearfix">
        <img class="logoimg" src="../assets/imgs/logo.png"/>
        <div class="textbox">
          <p>北京市人民检察院</p>
          <p><span>新闻中心融媒体平台</span></p>
        </div>
      </div>
      <el-menu class="menubox" mode="horizontal">
        <el-menu-item index="1">
          <router-link class="item" :to="{path:'home'}">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link class="item" :to="{path:'fullMediaEdit'}">全媒体编辑</router-link>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">舆情监测处置</template>
          <el-menu-item index="3-1">
            <router-link class="item" :to="{path:'monitorDisposal'}">舆情监测</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link class="item" :to="{path:'monitorDisposal'}">舆情处置</router-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="4">
          <router-link class="item" :to="{path:'/bigDataCenter/rongmeidating'}">大数据中心</router-link>
        </el-menu-item>
        <el-menu-item index="5">
          <router-link class="item" :to="{path:'mediaPropagation'}">融媒传播力</router-link>
        </el-menu-item>
        <el-menu-item index="6">
          <router-link class="item" :to="{path:'/teamManage/zongtikaohe'}">队伍管理</router-link>
        </el-menu-item>
      </el-menu>
      <div class="headrightbox">
        <div class="btnbox">
          <router-link class="item-btn btn-manage" :to="{path:'/system/dept'}"><i class="iconfont icon-xinxinicon"></i></router-link>
          <router-link class="item-btn btn-tougao" :to="{path:'backstageManage'}"><i class="iconfont icon-bianji"></i>我要投稿</router-link>
        </div>
        <div class="userbox">
          <img class="headimg" src="../assets/imgs/img.jpg"/>
          <span>数据分析师</span>
        </div>
        <div class="closebox">
          <a><i class="iconfont icon-tuichubianji"></i></a>
        </div>
      </div>
    </div>
</template>

<script type="text/javascript">

  export default {
    methods: {
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
    .logobox{
      float:left;
      margin:6px 20px 0 13px;
      .logoimg{
        float:left;
        width:47px;
        height:47px;
      }
      .textbox{
        text-align:center;
        width:200px;
        padding-top:3px;
        margin-left:10px;
        p{
          font-size:18px;
          line-height:20px;
          span{
            font-size:14px;
            letter-spacing:2px;
          }
        }
      }
    }
    .menubox{
      float:left;
      /*width: 100%;
      display: flex;
      justify-content: flex-end;*/
      .el-menu-item{padding:0;}
      a{color:#fff;}
      .item{
        float:left;
        height:56px;
        padding: 0 25px;
        cursor: pointer;
        font-weight:bold;
        color:#fff;
        &.active{
          background: #272f51;
          border-bottom: 4px solid #265990;
        }
      }
      .item:hover{
        opacity:0.9;
      }
    }
    .headrightbox{
      float:right;
      .btnbox{
        float:left;
        .item-btn{
          float:left;
          width:87px;
          height:27px;
          line-height:27px;
          background:#00fffe;
          margin-right:15px;
          margin-top:16px;
          padding: 0;
          text-align: center;
          border-radius:5px;
          font-weight:200;
          font-size:12px;
          color:#fff;
        }
        .item-btn:hover{
          opacity:0.9;
        }
        .btn-manage{
          background: #bc8dee;
          margin-left: 20px;
          width: 30px;
          height: 30px;
          line-height: 30px;
          border-radius: 100%;
          margin-top: 14px;
          i.icon-xinxinicon{
            float: left;
            margin-right: -10px;
          }
        }
        .btn-tougao{
          background:#67a8e7;
          i.icon-bianji{
            font-size: 18px;
            float: left;
            margin-left: 7px;
            margin-right: -5px;
          }
        }
      }
      .userbox{
        float: left;
        height: 35px;
        line-height: 35px;
        margin-top: 11px;
        border-right: 1px solid #fff;
        .headimg{
          width: 35px;
          height: 35px;
          border-radius: 100%;
          border: 2px solid #fff;
          float: left;
          margin-right: 15px;
          overflow: hidden;
        }
        span{
          margin-right: 15px;
        }
      }
      .closebox{
        float:left;
        height:60px;
        line-height:60px;
        a{
          display:inline-block;
          height:60px;
          line-height:60px;
          i{
            color:#fff;
            font-size:26px;
            margin:0 15px;
          }
        }
      }
    }
  }
</style>

