<template>
  <div class="edit-box account-wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/bigDataCenter' }">系统设置</el-breadcrumb-item>
      <el-breadcrumb-item>账号管理</el-breadcrumb-item>
      <el-breadcrumb-item>新增绑定</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main-wrap">
      <div class="clearfix linetitle-box">
        <span class="fl title">账号授权</span>
      </div>
      <div class="clearfix">
        <div class="list-box" @click="openDialog('wechat', 'icon-tubiaozhizuo-')">
          <div class="iconfont-box wechat"><i class="iconfont icon-tubiaozhizuo-"></i></div>
          <p class="text">微信公众号</p>
        </div>
        <div class="list-box" @click="openDialog('sina', 'icon-icon')">
          <div class="iconfont-box sina"><i class="iconfont icon-icon"></i></div>
          <p class="text">新浪微博</p>
        </div>
        <div class="list-box" @click="openDialog('toutiao', 'icon-toutiao')">
          <div class="iconfont-box toutiao"><i class="iconfont icon-toutiao">热</i></div>
          <p class="text">头条号</p>
        </div>
        <div class="list-box" @click="openDialog('souhu', 'icon-souhu')">
          <div class="iconfont-box souhu"><i class="iconfont icon-souhu"></i></div>
          <p class="text">搜狐号</p>
        </div>
        <div class="list-box" @click="openDialog('wangyi', 'icon-wangyi')">
          <div class="iconfont-box wangyi"><i class="iconfont icon-wangyi"></i></div>
          <p class="text">网易号</p>
        </div>
        <div class="list-box" @click="openDialog('other', 'icon-wangzhan')">
          <div class="iconfont-box other"><i class="iconfont icon-wangzhan"></i></div>
          <p class="text">其他网站</p>
        </div>
      </div>
    </div>

    <el-dialog :visible.sync="dialogFormVisible" width="700">
      <div class="dialog-logo-box">
        <div class="clearfix">
          <div class="fl iconfont-box" :class="dialogIconbg"><i class="iconfont" :class="dialogIcon">{{iconTxt}}</i></div>
          <div class="fl">
            <p class="title">账号授权</p>
            <p class="subtitle">请填写以下信息</p>
          </div>
        </div>
      </div>
      <div class="clearfix">
        <div class="fl left-form-box">
          <el-form :model="form">
            <el-form-item label="账号" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="fr txt-right-box">
          <p>融媒体平台将获得以下权限：</p>
          <p>获得您的昵称、头像、性别；</p>
          <p>获得您委托发布权限；</p>
          <p>获得您数据报表权限；</p>
          <p>授权后表示您已同意融媒体服务协议</p>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">授 权</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          region: ''
        },
        formLabelWidth: '80px',
        dialogIconbg: '',
        dialogIcon: '',
        iconTxt: '热'
      };
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      openDialog(name, icon) {
        this.dialogIconbg = name;
        this.dialogIcon = icon;
        if (name == 'toutiao'){
          this.iconTxt = '热';
        } else {
          this.iconTxt = '';
        }
        this.dialogFormVisible = true;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/css/lib-variable";
  @import "~assets/css/lib-mixin";

  .linetitle-box{
    margin:20px 20px 30px;
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
  .list-box{
    float:left;
    width:144px;
    border:1px solid #bacddc;
    background:#f9fbfc;
    border-radius:5px;
    margin-left:20px;
    margin-right:20px;
    cursor:pointer;
    transition: 0.3s;
    .iconfont-box{
      width:120px;
      height:110px;
      border-radius:5px;
      margin:12px;
      position: relative;
      i.iconfont{
        font-size:60px;
        text-align:center;
        line-height:110px;
        color:#fff;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
      }
    }
    .wechat{
      background:#47ab36;
    }
    .sina{
      background:#ff7651;
    }
    .toutiao{
      background:#f55059;
      .iconfont{
        font-size:42px!important;
      }
    }
    .souhu{
      background:#f1cd09;
      .iconfont{
        font-size:94px!important;
      }
    }
    .wangyi{
      background:#dc140a;
      .iconfont{
        font-size:104px!important;
      }
    }
    .other{
      background:#459fe4;
    }
    .text{
      color:#1d1d1d;
      margin:16px 12px 12px;
      border-top:1px solid #e5e4e4;
      line-height:40px;
      text-align:center;
    }
  }
  .list-box:hover{
    box-shadow:0 0 10px 5px rgba(0,0,0,0.1);
    transition: 0.3s;
  }
  .left-form-box{
    width: 310px;
    margin-left: 20px;
    margin-top: 20px;
  }
  .txt-right-box{
    width:260px;
    border-left:1px solid #eae6e6;
    padding:15px 0 15px 30px;
    line-height:25px;
  }
  .dialog-logo-box{
    .title{
      font-size:25px;
      color:#333;
    }
    .subtitle{
      font-size:16px;
      color:#999;
    }
    .iconfont-box{
      width:58px;
      height:58px;
      border-radius:5px;
      margin: 3px 12px 0 80px;
      position: relative;
      i.iconfont{
        font-size: 50px;
        text-align: center;
        line-height: 60px;
        color:#fff;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
      }
    }
    .wechat{
      background:#47ab36;
    }
    .sina{
      background:#ff7651;
    }
    .toutiao{
      background:#f55059;
      .iconfont{
        font-size:40px!important;
      }
    }
    .souhu{
      background:#f1cd09;
      .iconfont{
        font-size:55px!important;
      }
    }
    .wangyi{
      background:#dc140a;
      .iconfont{
        font-size:55px!important;
      }
    }
    .other{
      background:#459fe4;
    }
    .text{
      color:#1d1d1d;
      margin:16px 12px 12px;
      border-top:1px solid #e5e4e4;
      line-height:40px;
      text-align:center;
    }
  }
</style>
