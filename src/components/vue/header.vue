<template>
  <div id="header">
    <el-header style="  height:64px;">
      <el-dropdown style="    float: right;">
        <span class="el-dropdown-link">
          <i class="el-icon-user"></i>
          未登录
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
  </div>
</template>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
  margin: 0 8px;
}
/* .el-icon-user::before{
width: 24px;
height: 24px;
} */
.el-icon-arrow-down {
  font-size: 12px;
}
</style>