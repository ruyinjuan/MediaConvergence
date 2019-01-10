<template>
  <div class="teamManage">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">队伍管理</el-breadcrumb-item>
      <el-breadcrumb-item>绩效考核</el-breadcrumb-item>
      <el-breadcrumb-item>总体考核</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <div class="form-box">
        <div class="clearfix">
          <span class="label-title">年份</span>
          <el-select v-model="yearValue" placeholder="请选择" class="select-box">
            <el-option v-for="item in year" :key="item" :label="item" :value="item"></el-option>
          </el-select>
          <el-tabs v-model="activeName" class="tabs-box fl">
            <el-tab-pane label="月" name="1"></el-tab-pane>
            <el-tab-pane label="季" name="2"></el-tab-pane>
            <el-tab-pane label="年" name="3"></el-tab-pane>
          </el-tabs>
          <el-radio-group v-model="tabPosition" class="fl month-box">
            <el-radio-button v-for="item in month" :key="item" :label="item" :value="item"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="clearfix">
          <span class="label-title">地域选择</span>
          <el-select v-model="regionValue" placeholder="全部" class="select-box">
            <el-option v-for="item in region" :key="item" :label="item" :value="item"></el-option>
          </el-select>
          <el-tabs v-model="activeName" class="tabs-box">
            <el-tab-pane label="月" name="1"></el-tab-pane>
            <el-tab-pane label="季" name="2"></el-tab-pane>
            <el-tab-pane label="年" name="3"></el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="clearfix table-data">
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column type="index" label="序号" width="50"></el-table-column>
          <el-table-column prop="name" label="单位名称" show-overflow-tooltip ></el-table-column>
          <el-table-column prop="level" label="单位层级" width="80" align="center"></el-table-column>
          <el-table-column prop="wechat" label="微信名" align="center"></el-table-column>
          <el-table-column prop="articleNum" label="文章数" align="center"></el-table-column>
          <el-table-column prop="releaseNum" label="发布次数" align="center"></el-table-column>
          <el-table-column prop="readNum" label="篇幅阅读数" align="center"></el-table-column>
          <el-table-column prop="maxReadNum" label="最高阅读数" align="center"></el-table-column>
          <el-table-column prop="likeNum" label="篇均点赞数" align="center"></el-table-column>
          <el-table-column prop="maxLikeNum" label="最高点赞数" align="center"></el-table-column>
          <el-table-column label="总分" width="60" align="center">
            <template slot-scope="scope">
              <span class="txt-blue">{{scope.row.allNum}}</span>
            </template>
          </el-table-column>
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
        yearValue: '2018',
        regionValue: '',
        activeName: '1',
        year: ['2015', '2016', '2017', '2018', '2019'],
        quarter: ['第一季度', '第二季度', '第三季度', '第四季度'],
        month: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        region: ['北京'],
        tabPosition: '1',
        tableData: [
          {
            name: '北京市人民检察院',
            level: '市级',
            wechat: 'XXX',
            articleNum: 'XXX',
            releaseNum: 'XXX',
            readNum: 'XXX',
            maxReadNum: 'XXX',
            likeNum: 'XXX',
            maxLikeNum: 'XXX',
            allNum: '97.95'
          }, {
            name: '北京市朝阳区人民检察院',
            level: '市级',
            wechat: 'XXX',
            articleNum: 'XXX',
            releaseNum: 'XXX',
            readNum: 'XXX',
            maxReadNum: 'XXX',
            likeNum: 'XXX',
            maxLikeNum: 'XXX',
            allNum: '97.95'
          }, {
            name: '北京市东城区人民检察院',
            level: '市级',
            wechat: 'XXX',
            articleNum: 'XXX',
            releaseNum: 'XXX',
            readNum: 'XXX',
            maxReadNum: 'XXX',
            likeNum: 'XXX',
            maxLikeNum: 'XXX',
            allNum: '97.95'
          }, {
            name: '北京市海淀区人民检察院',
            level: '市级',
            wechat: 'XXX',
            articleNum: 'XXX',
            releaseNum: 'XXX',
            readNum: 'XXX',
            maxReadNum: 'XXX',
            likeNum: 'XXX',
            maxLikeNum: 'XXX',
            allNum: '97.95'
          }, {
            name: '北京市密云县人民检察院',
            level: '市级',
            wechat: 'XXX',
            articleNum: 'XXX',
            releaseNum: 'XXX',
            readNum: 'XXX',
            maxReadNum: 'XXX',
            likeNum: 'XXX',
            maxLikeNum: 'XXX',
            allNum: '97.95'
          }, {
            name: '北京市西城区人民检察院',
            level: '市级',
            wechat: 'XXX',
            articleNum: 'XXX',
            releaseNum: 'XXX',
            readNum: 'XXX',
            maxReadNum: 'XXX',
            likeNum: 'XXX',
            maxLikeNum: 'XXX',
            allNum: '97.95'
          }, {
            name: '北京市通州区人民检察院',
            level: '市级',
            wechat: 'XXX',
            articleNum: 'XXX',
            releaseNum: 'XXX',
            readNum: 'XXX',
            maxReadNum: 'XXX',
            likeNum: 'XXX',
            maxLikeNum: 'XXX',
            allNum: '97.95'
          }, {
            name: '北京市延庆县人民检察院',
            level: '市级',
            wechat: 'XXX',
            articleNum: 'XXX',
            releaseNum: 'XXX',
            readNum: 'XXX',
            maxReadNum: 'XXX',
            likeNum: 'XXX',
            maxLikeNum: 'XXX',
            allNum: '97.95'
          }, {
            name: '北京市人民检察院第二分院',
            level: '市级',
            wechat: 'XXX',
            articleNum: 'XXX',
            releaseNum: 'XXX',
            readNum: 'XXX',
            maxReadNum: 'XXX',
            likeNum: 'XXX',
            maxLikeNum: 'XXX',
            allNum: '97.95'
          }, {
            name: '北京市人民检察院第三分院',
            level: '市级',
            wechat: 'XXX',
            articleNum: 'XXX',
            releaseNum: 'XXX',
            readNum: 'XXX',
            maxReadNum: 'XXX',
            likeNum: 'XXX',
            maxLikeNum: 'XXX',
            allNum: '97.95'
          }, {
            name: '北京市石景山区人民检察院',
            level: '市级',
            wechat: 'XXX',
            articleNum: 'XXX',
            releaseNum: 'XXX',
            readNum: 'XXX',
            maxReadNum: 'XXX',
            likeNum: 'XXX',
            maxLikeNum: 'XXX',
            allNum: '97.95'
          }
        ]
      };
    },
    methods: {

    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/css/lib-variable";
  @import "~assets/css/lib-mixin";

  .label-title{
    float:left;
    line-height:45px;
  }
  .select-box{
    float:left;
    height:40px;
    margin:5px 15px;
  }
  .month-box{
    margin: 5px 20px 0 20px;
  }
  .table-data{
    margin-top:20px;
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
    .txt-blue{
      color:#67a8e7;
    }
  }
</style>
