<template>
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">大数据中心</el-breadcrumb-item>
      <el-breadcrumb-item>大数据云平台</el-breadcrumb-item>
      <el-breadcrumb-item>全市动态</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <div class="clearfix search-wrap">
        <div class="fl tabspan-box">
          <a class="active">微信文章</a>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <a>微博文章</a>
        </div>
        <div class="fr search-box">
          <el-form :inline="true" :model="formInfo" class="demo-form-inline fl datepicker">
            <el-form-item label="检察院选择">
              <el-select v-model="formInfo.jianchayuan" placeholder="全部">
                <el-option label="全部" value="0"></el-option>
                <el-option label="检察院1" value="1"></el-option>
                <el-option label="检察院2" value="2"></el-option>
              </el-select>
              <el-select v-model="formInfo.jianchayuan2" placeholder="- -">
                <el-option label="全部" value="0"></el-option>
                <el-option label="检察院1" value="1"></el-option>
                <el-option label="检察院2" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="type">
              <el-checkbox-group v-model="formInfo.type">
                <el-checkbox label="包含本院" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
          <input type="search" class="input-search" placeholder="支持模糊查询..."/>
          <button type="button" class="btn btn-search"><i class="iconfont icon-chaxun"></i>查询</button>
          <button type="button" class="btn btn-export"><i class="iconfont icon-tubiao05"></i>导出</button>
        </div>
      </div>
      <div class="clearfix datalist-box">
        <div class="data-box">
          <div class="clearfix list-box">
            <img class="list-img" src="../../assets/imgs/img.jpg"/>
            <div class="content-box">
              <a class="title">实锤了！吸毒被抓之后，可能还会面临…</a>
              <p class="jianjie">石景山公安作出行政拘留的依据是我国治安管理处罚法第七十二条的规定，即非法持有鸦片不满200克、海洛因或者甲基苯丙胺不满10克或者其他少量毒品和吸食、注射毒品。</p>
              <p class="tongji-box">
                <span class="shijian">时间：2016-10-23</span>
                <span class="zuozhe">作者：长安剑</span>
                <span class="tongji">
                  <a><i class="iconfont icon-yanjing-shi"></i>121</a>
                  <a><i class="iconfont icon-zan"></i>300</a>
                  <a><i class="iconfont icon-xiaoxi_"></i>60条评论</a>
                </span>
              </p>
            </div>
          </div>
          <div class="clearfix list-box">
            <img class="list-img" src="../../assets/imgs/img.jpg"/>
            <div class="content-box">
              <a class="title">实锤了！吸毒被抓之后，可能还会面临…</a>
              <p class="jianjie">石景山公安作出行政拘留的依据是我国治安管理处罚法第七十二条的规定，即非法持有鸦片不满200克、海洛因或者甲基苯丙胺不满10克或者其他少量毒品和吸食、注射毒品。</p>
              <p class="tongji-box">
                <span class="shijian">时间：2016-10-23</span>
                <span class="zuozhe">作者：长安剑</span>
                <span class="tongji">
                  <a><i class="iconfont icon-yanjing-shi"></i>121</a>
                  <a><i class="iconfont icon-zan"></i>300</a>
                  <a><i class="iconfont icon-xiaoxi_"></i>60条评论</a>
                </span>
              </p>
            </div>
          </div>
          <div class="clearfix list-box">
            <img class="list-img" src="../../assets/imgs/img.jpg"/>
            <div class="content-box">
              <a class="title">实锤了！吸毒被抓之后，可能还会面临…</a>
              <p class="jianjie">石景山公安作出行政拘留的依据是我国治安管理处罚法第七十二条的规定，即非法持有鸦片不满200克、海洛因或者甲基苯丙胺不满10克或者其他少量毒品和吸食、注射毒品。</p>
              <p class="tongji-box">
                <span class="shijian">时间：2016-10-23</span>
                <span class="zuozhe">作者：长安剑</span>
                <span class="tongji">
                  <a><i class="iconfont icon-yanjing-shi"></i>121</a>
                  <a><i class="iconfont icon-zan"></i>300</a>
                  <a><i class="iconfont icon-xiaoxi_"></i>60条评论</a>
                </span>
              </p>
            </div>
          </div>
          <div class="clearfix list-box">
            <img class="list-img" src="../../assets/imgs/img.jpg"/>
            <div class="content-box">
              <a class="title">实锤了！吸毒被抓之后，可能还会面临…</a>
              <p class="jianjie">石景山公安作出行政拘留的依据是我国治安管理处罚法第七十二条的规定，即非法持有鸦片不满200克、海洛因或者甲基苯丙胺不满10克或者其他少量毒品和吸食、注射毒品。</p>
              <p class="tongji-box">
                <span class="shijian">时间：2016-10-23</span>
                <span class="zuozhe">作者：长安剑</span>
                <span class="tongji">
                  <a><i class="iconfont icon-yanjing-shi"></i>121</a>
                  <a><i class="iconfont icon-zan"></i>300</a>
                  <a><i class="iconfont icon-xiaoxi_"></i>60条评论</a>
                </span>
              </p>
            </div>
          </div>
          <div class="clearfix list-box">
            <img class="list-img" src="../../assets/imgs/img.jpg"/>
            <div class="content-box">
              <a class="title">实锤了！吸毒被抓之后，可能还会面临…</a>
              <p class="jianjie">石景山公安作出行政拘留的依据是我国治安管理处罚法第七十二条的规定，即非法持有鸦片不满200克、海洛因或者甲基苯丙胺不满10克或者其他少量毒品和吸食、注射毒品。</p>
              <p class="tongji-box">
                <span class="shijian">时间：2016-10-23</span>
                <span class="zuozhe">作者：长安剑</span>
                <span class="tongji">
                  <a><i class="iconfont icon-yanjing-shi"></i>121</a>
                  <a><i class="iconfont icon-zan"></i>300</a>
                  <a><i class="iconfont icon-xiaoxi_"></i>60条评论</a>
                </span>
              </p>
            </div>
          </div>
          <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
        <div class="tag-box">
          <p>排序</p>
          <div class="tag-txt">
            <span class="active">时间</span>
            <span>阅读数</span>
            <span>点赞数</span>
          </div>
          <p>分类</p>
          <div class="tag-txt">
            <span class="active">全部</span>
            <span>原创</span>
            <span>转载</span>
          </div>
          <p>时间</p>
          <div class="tag-txt">
            <span class="active">3天内</span>
            <span>7天内</span>
            <span>指定时间</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
     name: 'bigDataCenter',
     data() {
      return {
        formInfo: {
          jianchayuan: '0',
          jianchayuan2: '0',
          type: ''
        }
      };
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
      .el-form-item{
        margin-bottom:0;
      }
      .datetitle{
        line-height:35px;
        margin-right:10px;
      }
      .datepicker{
        margin-right:40px;
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
  .datalist-box{
    margin-top:15px;
    .data-box{
      width:80%;
      float:left;
      .list-box{
        border-bottom:1px solid #e9eff3;
        padding:20px 0;
        .list-img{
          float:left;
          width:106px;
          height:64px;
          margin-right:20px;
        }
        .content-box{
          float:left;
          width:85%;
          .title{
            display:block;
            font-size:14px;
            color:#333;
            font-weight:bold;
            margin-bottom:10px;
            line-height:15px;
          }
          .jianjie{
            font-size:13px;
            color:#999;
            line-height:20px;
          }
          .tongji-box{
            font-size:13px;
            margin-top:10px;
            line-height:15px;
            .shijian,.zuozhe{
              color:#333;
              margin-right:30px;
            }
            .tongji{
              float:right;
              a{
                display:inline-block;
                margin-left:30px;
                color:#c9d1e0;
                i{
                  float:left;
                  font-size:18px;
                }
              }
            }
          }
        }
      }
      .list-box:last-child{
        border-bottom:0;
      }
    }
    .tag-box{
      float:right;
      background:#f2f5fa;
      padding:5px 15px 15px;
      p{
        margin:10px 0;
        color:#4395e1;
      }
      .tag-txt{
        span{
          display:inline-block;
          min-width:54px;
          height:25px;
          line-height:25px;
          text-align:center;
          font-size:13px;
          color:#333;
          cursor:pointer;
        }
        span.active{
          background:#c3ddf6;
        }
      }
    }
  }
</style>
