<template>
  <div id="header">
    <el-header style="height:64px;">
      <div class="collapse-btn" @click="collapseChage">
        <i class="el-icon-menu"></i>
      </div>
      <p id="user">pay-xiamen</p>
      <el-button class="layot" type="primary" @click="layot">注销</el-button>
      <el-button class="layot" type="primary" @click="home">返回首页</el-button>

      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-user" style="color:#fff"></i>
          未登录
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <i class="el-icon-s-custom"></i>无姓名
          </el-dropdown-item>
          <el-dropdown-item>
            <i class="el-icon-phone"></i>无手机号
          </el-dropdown-item>
          <el-dropdown-item>
            <i class="el-icon-message"></i>无邮箱
          </el-dropdown-item>

          <el-dropdown-item divided>
            <i class="el-icon-finished"></i>本次登录
          </el-dropdown-item>
          <el-dropdown-item disabled>
            <i class="el-icon-more"></i>无历史记录
          </el-dropdown-item>
          <el-dropdown-item divided>
            <el-button style="color:#000" @click="dialogFormVisible = true" type="text">
              <i class="el-icon-key"></i>修改密码
            </el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dialog
        class="password"
        style="overflow-y: hidden;"
        title="修改登录密码"
        :visible.sync="dialogFormVisible"
      >
        <el-form :model="form">
          <el-form-item label="现登录密码">
            <el-input v-model="form.old_pass" show-password autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="新登陆密码">
            <el-input v-model="form.new_pass" show-password autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认新登陆密码）">
            <el-input v-model="form.new_password" show-password autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-header>
    <el-aside style="height:100%">
      <el-menu class="el-menu-vertical-demo" :collapse="collapse" router unique-opened>
        <el-submenu class="el-submenu_title" index="1">
          <template slot="title">
            <span slot="title">
              <i class="el-icon-s-claim"></i>进价商户管理
            </span>
          </template>
          <el-menu-item-group>
            <el-menu-item @click="yibao">易宝进件</el-menu-item>
            <el-menu-item @click="fuyou">富有进件</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu class="el-submenu_title" index="2">
          <template slot="title">
            <span slot="title">
              <i class="el-icon-s-custom"></i>接口商户管理
            </span>
          </template>
          <el-menu-item-group>
            <el-menu-item @click="inter">接口记录</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu class="el-submenu_title" index="3">
          <template slot="title">
            <span slot="title">
              <i class="el-icon-s-custom"></i>支付密钥管理
            </span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/dailiAdd" @click="key">商户支付配置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<style>
.pass {
  width: 100%;
  text-align: left;
}
#header .el-dropdown-menu__item{
  font-size: 25px !important;
}
.password .el-form-item,
.password .el-from-item__content {
  height: 70px;
}
.password .el-dialog__body {
  height: 280px;
  overflow-y: scroll;
  padding: 80px 10px 20px 20px;
}

.password .dialog-footer {
  width: 80%;
  height: 80px;
  float: right;
  padding-left: 30px;
  position: absolute;
}
.password .el-dialog__footer{
  padding: 0;
}
</style>

<script>
import bus from "../bus.js";
export default {
  data() {
    return {
      collapse: false,
      dialogFormVisible: false,
      form: {
        old_pass: "",
        new_pass: "",
        new_password: ""
      }
    };
  },
  methods: {
    collapseChage: function() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    },
    layot() {
      this.$router.push("/");
    },
    home() {
      this.$router.push("/home");
    },
    yibao() {
      this.$router.push("/yibao");
    },
    fuyou() {
      this.$router.push("/fuyou");
    },
    inter() {
      this.$router.push("/interface");
    },
    key() {
      this.$router.push("/key");
    }
  }
};
</script>