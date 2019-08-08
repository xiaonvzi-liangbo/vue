<template>
    <div id="aside">
         <el-aside width="240px" v-bind:class="{ active: collapse }">
      <el-menu class="el-menu-vertical-demo">
        <el-submenu class="el-submenu_title" index="1">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span slot="title">代理商管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/dailiAdd">代理商新增</el-menu-item>
            <el-menu-item index="/dailiEnquire">代理商信息查询</el-menu-item>
            <el-menu-item index="/tubiao">代理商信息修改</el-menu-item>
            <el-menu-item index="/access">代理商业务权限管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    </div>
</template>
<style>

/* aside */
.active{
  display: none;
}
aside
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 100%;
}
.el-submenu_title {
  text-align: left;
}
</style>

