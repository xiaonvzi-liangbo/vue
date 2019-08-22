<template>
  <div id="yibaotxt">
    <div class="ybtxt">
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column prop="id" label="#" width="100px"></el-table-column>
        <el-table-column prop="number" label="入网请求号" width="360px"></el-table-column>
        <el-table-column prop="Mer_name" label="商户名" width="150px"></el-table-column>
        <el-table-column prop="name" label="法人姓名" width="150px"></el-table-column>
        <el-table-column prop="phone" label="法人手机号" width="150px"></el-table-column>
        <el-table-column prop="type" label="类型" width="80px"></el-table-column>
        <el-table-column prop="mer_name" label="商户号" width="250px"></el-table-column>
        <el-table-column prop="state" label="状态" width="80px"></el-table-column>
        <el-table-column prop="remarks" label="备注" width="150px"></el-table-column>
        <el-table-column prop="add_state" label="进件状态" width="250px"></el-table-column>
        <el-table-column prop="Reporting_state" label="报备状态" width="260px"></el-table-column>
        <el-table-column prop="time" label="创建时间" width="150px"></el-table-column>
        <el-table-column label="操作" width="120px">
          <button class="notice">修改</button>
          <button class="notice" @click="baobei">立即报备</button>
          <button class="notice"  @click="peizhi">配置</button>
        </el-table-column>
        <el-table-column label="应用" width="120px">
          <button class="notice">支付扫码</button>
          <button class="notice">台牌</button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style>
#yibaotxt {
  width: 100%;
  height: 56px;
  background-color: #d81b60;
  color: #fff;
  line-height: 56px;
  margin-top: 15px;
}
.ybtxt {
  width: 100%;
}
#yibaotxt .el-table__body-wrapper::-webkit-scrollbar {
  display:none;
}
</style>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "#85",
          number: "DS2019627212014313",
          Mer_name: "赵二麻子小吃店",
          name: "张三",
          phone: "18596478853",
          type: "个人",
          mer_name: "77479*85",
          state: "启用",
          remarks: "已审核通过！",
          add_state: "PROCESS_SUCCESS",
          Reporting_state: "未提交/未通过",
          time: "2019-07-11 12:36:21"
        },
        {
          id: "#85",
          number: "DS2019627212014313",
          Mer_name: "张三小吃店",
          name: "张三",
          phone: "18596478853",
          type: "个人",
          mer_name: "77479*85",
          state: "启用",
          remarks: "已审核通过！",
          add_state: "PROCESS_SUCCESS",
          Reporting_state: "未提交/未通过",
          time: "2019-07-11 12:36:21"
        },
        {
          id: "#88",
          number: "DS201968954474313",
          Mer_name: "赵二麻子小吃店",
          name: "赵二麻子",
          phone: "18596478853",
          type: "个人",
          mer_name: "77458485",
          state: "禁用",
          remarks: "已审核通过！",
          add_state: "PROCESS_SUCCESS",
          Reporting_state: "未提交/未通过",
          time: "2019-07-11 12:36:21"
        }
      ]
    };
  },
  methods: {
    baobei() {
      this.$alert("报备提交成功", "返回结果：", {
        confirmButtonText: "确定",
      });
    },
     peizhi() {
      this.$alert("提交成功", "返回结果：", {
        confirmButtonText: "确定",
      });
    }
  }
};
</script>