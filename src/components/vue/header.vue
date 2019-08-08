<template>
  <div id="header">
    <el-header style="height:64px;">
      <div class="collapse-btn" @click="collapseChage">
        <i class="el-icon-menu"></i>
      </div>
      <p id="user">pay-xiamen</p>
      <el-dropdown style="float right;">
        <span class="el-dropdown-link">
          <i class="el-icon-user"></i>
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
          <el-dropdown-item  @click="open"  divided>
            <i class="el-icon-edit"  ></i>修改密码
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
  </div>
</template>

<style>
/* headers */
.collapse-btn {
  width: 70px;
  font-size: 25px;
  float: left;
}
#user {
  float: left;
  font-size: 25px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
  margin: 0 15px 0 0;
}
.el-dropdown-menu {
  width: 320px;
}
.el-icon-user {
  font-size: 20px;
}
</style>

<script>
import bus from "../bus.js";
export default {
  data() {
    return {
      collapse: true,
    };
  },
  methods: {
    collapseChage: function() {
      this.collapse = !this.collapse;
    },
     open() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
  }
};
</script>