<template>
  <div class="operatePage">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">系统设置</el-breadcrumb-item>
      <el-breadcrumb-item>操作日志</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <div class="clearfix search-wrap">
        <div class="fl">
          <span class="fl datetitle">选择操作日期</span>
          <el-date-picker v-model="dataTime" type="date" placeholder="请选择" class="fl datepicker"></el-date-picker>
        </div>
        <div class="fr search-box">
          <input type="search" class="input-search" placeholder="支持模糊查询..."/>
          <button type="button" class="btn btn-search"><i class="iconfont icon-chaxun"></i>查询</button>
        </div>
      </div>
      <div class="clearfix table-data">
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column prop="userName" label="用户名" width="180" ></el-table-column>
          <el-table-column prop="danwei" label="单位名称" align="center"></el-table-column>
          <el-table-column prop="operateTxt" label="操作说明" ></el-table-column>
          <el-table-column prop="ipCode" label="IP地址" ></el-table-column>
          <el-table-column prop="addTime" label="添加时间" ></el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '北京检察院',
          children: [
            {
              id: 11,
              label: '海淀检察院'
            }, {
              id: 12,
              label: '朝阳检察院'
            }, {
              id: 13,
              label: '丰台检察院'
            }, {
              id: 14,
              label: '东城检察院'
            }, {
              id: 15,
              label: '西城检察院'
            }, {
              id: 16,
              label: '***检察院'
            }, {
              id: 17,
              label: '***检察院'
            }, {
              id: 18,
              label: '***检察院'
            }, {
              id: 19,
              label: '***检察院'
            }
          ]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData: [
          {
            userName: 'XXX',
            danwei: 'XXX',
            operateTxt: 'XXX',
            ipCode: 'XXX',
            addTime: '2018/3/1 13:14:44'
          }, {
            userName: 'XXX',
            danwei: 'XXX',
            operateTxt: 'XXX',
            ipCode: 'XXX',
            addTime: '2018/3/1 13:14:44'
          }, {
            userName: 'XXX',
            danwei: 'XXX',
            operateTxt: 'XXX',
            ipCode: 'XXX',
            addTime: '2018/3/1 13:14:44'
          }, {
            userName: 'XXX',
            danwei: 'XXX',
            operateTxt: 'XXX',
            ipCode: 'XXX',
            addTime: '2018/3/1 13:14:44'
          }, {
            userName: 'XXX',
            danwei: 'XXX',
            operateTxt: 'XXX',
            ipCode: 'XXX',
            addTime: '2018/3/1 13:14:44'
          }, {
            userName: 'XXX',
            danwei: 'XXX',
            operateTxt: 'XXX',
            ipCode: 'XXX',
            addTime: '2018/3/1 13:14:44'
          }, {
            userName: 'XXX',
            danwei: 'XXX',
            operateTxt: 'XXX',
            ipCode: 'XXX',
            addTime: '2018/3/1 13:14:44'
          }, {
            userName: 'XXX',
            danwei: 'XXX',
            operateTxt: 'XXX',
            ipCode: 'XXX',
            addTime: '2018/3/1 13:14:44'
          }, {
            userName: 'XXX',
            danwei: 'XXX',
            operateTxt: 'XXX',
            ipCode: 'XXX',
            addTime: '2018/3/1 13:14:44'
          }, {
            userName: 'XXX',
            danwei: 'XXX',
            operateTxt: 'XXX',
            ipCode: 'XXX',
            addTime: '2018/3/1 13:14:44'
          }
        ],
        dataTime: ''
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/css/lib-variable";
  @import "~assets/css/lib-mixin";

  .linetitle-box{
    margin-top:20px;
    margin-left:20px;
    span{
      line-height:15px;
      i{
        color:#3a8dff;
      }
    }
    .title{
      border-left:4px solid #3a8ee6;
      padding-left:10px;
      color:#4395e1;
    }
  }
  .left-box{
    margin-top:-20px;
    margin-left:-20px;
    padding:20px 0 20px;
    width:219px;
    height:83.8vh;
    background:#dce1ea;
    border-right:1px solid #dce1ea;
    .tree-box{
      margin:20px 0;
    }
  }
  .btn{
    width:90px;
    height:35px;
    line-height:35px;
    font-size:14px;
    color:#fff;
  }
  .btn-adddept{
    width:105px;
    background:#6bb2f4;
    border:1px solid transparent;
    margin-left:10px;
  }
  .btn-delete{
    width:105px;
    background:#8693f3;
    border:1px solid transparent;
    margin-left:10px;
  }
  .datetitle{
    line-height:35px;
    margin-right:10px;
  }
  .search-wrap{
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
    }
  }
  .table-data{
    margin-top: 25px;
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
    .table-btn-update{
      color:#67a8e7;
      font-weight:200;
      line-height:17px;
      i{
        float:left;
        font-size:20px;
        margin-right:3px;
      }
      span{
        font-size:13px;
        text-decoration: underline;
      }
    }
    .table-btn-delete{
      color:#bc8dee;
      font-weight:300;
      line-height:17px;
      i{
        float:left;
        font-size:20px;
        margin-right:3px;
      }
      span{
        font-size:13px;
        text-decoration: underline;
      }
    }
  }
</style>
