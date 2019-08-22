<template>
  <div id="keytxt">
    <div class="ktxt">
      <el-table :data="tableData" height="250" stripe>
        <el-table-column prop="id" label="#" width="80%"></el-table-column>
        <el-table-column prop="number" label="ID" ></el-table-column>
        <el-table-column prop="name" label="支付渠道名称" ></el-table-column>
        <el-table-column prop="type" label="状态" width="80%" ></el-table-column>
        <el-table-column prop="remarks" label="备注" width="80%"></el-table-column>
        <el-table-column prop="time" label="创建时间" ></el-table-column>
        <el-table-column prop="modify_time" label="修改时间" ></el-table-column>
        <el-table-column label="操作" width="120">
          <button class="notice">修改</button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style>
#keytxt {
  width: 100%;
  height: 56px;
  background-color: #d81b60;
  color: #fff;
  line-height: 56px;
  margin-top: 15px;
}
.ktxt {
  width: 100%;
}
#keytxt .el-table__body-wrapper::-webkit-scrollbar {
  display:none;
}
#keytxt table {
  width:100% !important;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          remarks: "没有钱",
          time: "2019-05-24 11:17:15",
          modify_time: "2019-05-24 11:17:15"
        },
         {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          remarks: "没有钱",
          time: "2019-05-24 11:17:15",
          modify_time: "2019-05-24 11:17:15"
        },
         {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          remarks: "没有钱",
          time: "2019-05-24 11:17:15",
          modify_time: "2019-05-24 11:17:15"
        },
         {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          remarks: "没有钱",
          time: "2019-05-24 11:17:15",
          modify_time: "2019-05-24 11:17:15"
        },
         {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          remarks: "没有钱",
          time: "2019-05-24 11:17:15",
          modify_time: "2019-05-24 11:17:15"
        }, {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          remarks: "没有钱",
          time: "2019-05-24 11:17:15",
          modify_time: "2019-05-24 11:17:15"
        },
       
      ]
    };
  },
  methods: {
    open() {
      this.$message("附件不存在");
    }
  }
};
</script>