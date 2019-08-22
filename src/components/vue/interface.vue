<template>
  <div id="interface">
    <div id="txt">
      <p class="inttxt">注：此接口数据只统计商户API模块接口，其他暂不列入范围内</p>
    </div>
    <el-divider></el-divider>
    <div id="search">
      <el-form>
        <el-form-item label="匹配:">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="返回类型">
          <el-radio v-model="radio1" label="1">异常返回</el-radio>
          <el-radio v-model="radio1" label="2">成功返回</el-radio>
        </el-form-item>
        <el-button style="margin-top:5px" type="primary" icon="el-icon-search">搜索</el-button>
      </el-form>
    </div>
    <div id="yibaotxt">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="默认商户" name="first">
          <txtNav></txtNav>
        </el-tab-pane>
        <el-tab-pane label="李四麻辣串" name="second">
          <txtNav></txtNav>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style>
.interface .el-form-item {
  float: left;
  width: 90%;
}
#interface #txt {
  height: 27px;
  border-left: 5px #d3d1d1 solid;
}
.inttxt {
  float: left;
  margin-left: 15px;
  font-size: 15px;
  color: #000000de;
}
</style>
<script>
import txt from "./interfacetxt.vue";

export default {
  components: {
    txtNav: txt
  },
  data() {
    return {
      radio1: "1",
      form: {
        name: "",
        region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      activeName: "first",
      value1: "",
      value2: ""
      /*   formLabelWidth: "120px" */
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>