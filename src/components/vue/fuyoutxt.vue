<template>
  <div id="fuyoutxt">
    <div class="fytxt">
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column prop="id" label="#" width="100px"></el-table-column>
        <el-table-column prop="number" label="流水号" width="360px"></el-table-column>
        <el-table-column prop="Mer_name" label="商户全称" width="150px"></el-table-column>
        <el-table-column prop="mer_name" label="商户号" width="250px"></el-table-column>
        <el-table-column prop="name" label="法人姓名" width="150px"></el-table-column>
        <el-table-column prop="phone_name" label="联系人姓名" width="150px"></el-table-column>
        <el-table-column prop="phone" label="联系人手机号" width="150px"></el-table-column>
        <el-table-column label="操作" width="120px">
          <button class="notice">详情</button>
          <button class="notice" @click="open">审核通知</button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style>
#fuyoutxt {
  width: 100%;
  height: 56px;
  background-color: #d81b60;
  color: #fff;
  line-height: 56px;
  margin-top: 15px;
}
.fytxt {
  width: 100%;
}
#fuyoutxt .el-table__body-wrapper::-webkit-scrollbar {
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
          phone_name: "李四",
          phone: "18596478853"
        },
        {
          id: "#85",
          number: "DS2019627212014313",
          Mer_name: "张三小吃店",
          name: "张三",
          phone: "18596478853",
          phone_name: "李四"
        },
        {
          id: "#88",
          number: "DS201968954474313",
          Mer_name: "赵二麻子小吃店",
          name: "赵二麻子",
          phone: "18596478853",
          phone_name: "李四"
        }
      ]
    };
  },methods:{
     open() {
        this.$message('附件不存在');
      },
  }
};
</script>