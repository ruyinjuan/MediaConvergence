<template>
    <div class="header-wrap">
      <ul>
        <!-- tag="li" 可以设定 router-link生成什么样的页面元素 -->
        <router-link class="item" tag="li" :to="{name:'home'}"><div v-on:click="toParent('home')">首页</div></router-link>
        <router-link class="item" tag="li" :to="{name:'fullMediaEdit'}"><div v-on:click="toParent('fullMediaEdit')">全媒体编辑</div></router-link>
        <router-link class="item" tag="li" :to="{name:'monitorDisposal'}"><div v-on:click="toParent('monitorDisposal')">舆情监测处置</div></router-link>
        <router-link class="item" tag="li" :to="{name:'bigDataCenter'}"><div v-on:click="toParent('bigDataCenter')">大数据中心</div></router-link>
        <router-link class="item" tag="li" :to="{name:'mediaPropagation'}"><div v-on:click="toParent('mediaPropagation')">融媒传播力</div></router-link>
        <router-link class="item" tag="li" :to="{name:'teamManage'}"><div v-on:click="toParent('teamManage')">队伍管理</div></router-link>
        <router-link class="item-btn btn-manage" tag="li" :to="{name:'backstageManage'}"><div v-on:click="toParent('backstageManage')">后台管理</div></router-link>
        <router-link class="item-btn" tag="li" :to="{name:'backstageManage'}"><div v-on:click="toParent('submission')">我要投稿</div></router-link>
      </ul>
    </div>
</template>

<script type="text/javascript">

  export default {
    methods: {
      toParent(val) {
        this.$emit('fromChild', val)
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
          background: #272f51;
          border-bottom: 4px solid #265990;
        }
      }
      .item-btn{
        width:87px;
        height:27px;
        line-height:27px;
        background:#00fffe;
        margin-right:18px;
        margin-top:18px;
      }
    }

  }
</style>

