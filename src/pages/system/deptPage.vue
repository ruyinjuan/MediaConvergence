<template>
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">系统设置</el-breadcrumb-item>
      <el-breadcrumb-item>部门管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <div class="fl left-box">
        <div class="clearfix linetitle-box">
          <span class="fl title">检察院列表</span>
        </div>
        <div class="tree-box">
          <el-tree :data="data" :props="defaultProps"
                   @node-click="handleNodeClick"
                   :default-expanded-keys="[1]"
                   :default-checked-keys="[11]"></el-tree>
        </div>
      </div>
      <div class="fl right-box">
        <div class="clearfix search-wrap">
          <div class="fl">
            <button type="button" class="btn btn-adddept" @click="goAddPage"><i class="iconfont icon-tianjia"></i>添加部门</button>
            <button type="button" class="btn btn-delete"><i class="iconfont icon-shanchu"></i>批量删除</button>
          </div>
          <div class="fr search-box">
            <input type="search" class="input-search" placeholder="支持模糊查询..."/>
            <button type="button" class="btn btn-search"><i class="iconfont icon-chaxun"></i>查询</button>
          </div>
        </div>
        <div class="clearfix table-data">
          <el-table :data="tableData" style="width: 100%" stripe>
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="deptName" label="部门名称" width="180" ></el-table-column>
            <el-table-column prop="level" label="级别" align="center"></el-table-column>
            <el-table-column prop="address" label="地址" ></el-table-column>
            <el-table-column label="操作" width="180" >
              <template slot-scope="scope">
                <el-button type="text" class="table-btn-update"><i class="iconfont icon-xiugai"></i><span>修改</span></el-button>
                <el-button type="text" class="table-btn-delete"><i class="iconfont icon-shanchu"></i><span>删除</span></el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
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
            deptName: '某某部门',
            level: '省级',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            deptName: '某某部门',
            level: '省级',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            deptName: '某某部门',
            level: '省级',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            deptName: '某某部门',
            level: '省级',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            deptName: '某某部门',
            level: '省级',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            deptName: '某某部门',
            level: '省级',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            deptName: '某某部门',
            level: '省级',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            deptName: '某某部门',
            level: '省级',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            deptName: '某某部门',
            level: '省级',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            deptName: '某某部门',
            level: '省级',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ]
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      goAddPage() {
        this.$router.push('/system/dept/edit');
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
    margin-right:10px;
  }
  .btn-delete{
    width:105px;
    background:#8693f3;
    border:1px solid transparent;
    margin-right:10px;
  }
  .right-box{
    width: 80%;
    padding-left: 23px;
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
  }
</style>
