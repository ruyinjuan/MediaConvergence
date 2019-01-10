<template>
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">大数据中心</el-breadcrumb-item>
      <el-breadcrumb-item>大数据云平台</el-breadcrumb-item>
      <el-breadcrumb-item>月度数据排行</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <div class="clearfix search-wrap">
        <div class="fl tabspan-box">
          <a class="active">微信数据</a>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <a>微博数据</a>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <a>头条数据</a>
        </div>
        <div class="fr search-box">
          <span class="fl datetitle">选择时间</span>
          <el-date-picker v-model="dataTime" type="month" placeholder="请选择" class="fl datepicker"></el-date-picker>
          <input type="search" class="input-search" placeholder="支持模糊查询..."/>
          <button type="button" class="btn btn-search"><i class="iconfont icon-chaxun"></i>查询</button>
          <button type="button" class="btn btn-export"><i class="iconfont icon-tubiao05"></i>导出</button>
        </div>
      </div>
      <div class="clearfix table-data">
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column type="index" width="85" label="序号" align="center"></el-table-column>
          <el-table-column label="公众号" width="150" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.imageurl" class="table-img"/>
              <span class="txt">{{scope.row.publicCode}}</span>
            </template>
          </el-table-column>
          <el-table-column label="活跃度" align="center">
            <el-table-column prop="num1" label="文章数" align="center" sortable></el-table-column>
            <el-table-column prop="num2" label="发布次数" align="center" sortable></el-table-column>
          </el-table-column>
          <el-table-column label="吸引力" align="center">
            <el-table-column prop="num3" label="平均阅读数" align="center" sortable></el-table-column>
            <el-table-column prop="num4" label="最高阅读数" align="center" sortable></el-table-column>
          </el-table-column>
          <el-table-column label="认可度" align="center">
            <el-table-column prop="num5" label="平均点赞数" align="center" sortable></el-table-column>
            <el-table-column prop="num6" label="最高点赞数" align="center" sortable></el-table-column>
          </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
     name: 'bigDataCenter',
     data() {
      return {
        dataTime: '',
        tableData: [
          {
            imageurl: require('../../assets/imgs/logo.png'),
            publicCode: '北京检察',
            num1: '1',
            num2: '0',
            num3: '1',
            num4: '1',
            num5: '0',
            num6: '0'
          }, {
            imageurl: require('../../assets/imgs/logo.png'),
            publicCode: '北京检察',
            num1: '1',
            num2: '0',
            num3: '1',
            num4: '1',
            num5: '0',
            num6: '0'
          }, {
            imageurl: require('../../assets/imgs/logo.png'),
            publicCode: '北京检察',
            num1: '1',
            num2: '0',
            num3: '1',
            num4: '1',
            num5: '0',
            num6: '0'
          }, {
            imageurl: require('../../assets/imgs/logo.png'),
            publicCode: '北京检察',
            num1: '1',
            num2: '0',
            num3: '1',
            num4: '1',
            num5: '0',
            num6: '0'
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/lib-variable";
  @import "~assets/css/lib-mixin";

  .tabspan-box{
    line-height:35px;
    a{
      cursor:pointer;
    }
    a.active{
      color:#55a4ed;
    }
  }
  .search-wrap{
    padding-bottom:10px;
    border-bottom:1px solid #e3e3e3;
    .search-box{
      .datetitle{
        line-height:35px;
        margin-right:10px;
      }
      .datepicker{
        margin-right:48px;
      }
      .input-search{
        float:left;
        width:150px;
        height:35px;
        border-radius:0;
        border:1px solid #dde5ef;
        padding-left:15px;
        padding-right:5px;
      }
      .btn{
        width:90px;
        height:35px;
        line-height:35px;
        font-size:14px;
        color:#fff;
      }
      .btn-search{
        float:left;
        background:#bc8dee;
        border:1px solid transparent;
        margin-left:-1px;
        .icon-chaxun{
          font-size:24px;
          float:left;
          margin-left:15px;
          margin-right:-20px;
        }
      }
      .btn-export{
        background:#6bb2f4;
        border:1px solid transparent;
        margin-left:10px;
        .icon-tubiao05{
          font-size:16px;
          float:left;
          margin-left:20px;
          margin-right:-10px;
        }
      }
    }
  }
  .table-data{
    margin-top: 35px;
    box-shadow: 0 0 20px 0 #bacddc;
    background: #f1f5fe;
    border: 1px solid #bacddc;
    .table-img{
      float:left;
      width:37px;
      height:37px;
    }
    .txt{
      line-height:37px;
    }
  }
</style>
