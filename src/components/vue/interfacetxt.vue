<template>
  <div id="interfacetxt">
    <div class="iftxt">
      <el-table :data="tableData" height="250" stripe>
        <el-table-column prop="id" label="#" width="80%"></el-table-column>
        <el-table-column prop="name" label="商户"></el-table-column>
        <el-table-column prop="url" label="URL"></el-table-column>
        <el-table-column prop="time" label="执行时间(S)"></el-table-column>
        <el-table-column prop="type" label="返回结果状态"></el-table-column>
        <el-table-column prop="parameter" label="参数明细"></el-table-column>
        <el-table-column prop="establish_time" label="创建时间"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style>
#interfacetxt {
  width: 100%;
  background-color: #d81b60;
  color: #fff;
  line-height: 56px;
  margin-top: 15px;
}
.iftxt {
  width: 100%;
}
#interfacetxt .el-table__body-wrapper::-webkit-scrollbar {
  display: none;
}
#interfacetxt table {
  width: 100% !important;
  text-align: center !important;
}
#interfacetxt thead {
  text-align: center !important;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "#4",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          url: "84916514",
          time: "2019-05-24 11:17:15",
          parameter: "没有钱",
          establish_time: "2019-05-24 11:17:15"
        },
        {
          id: "#44544",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          url: "84916514",
          time: "2019-05-24 11:17:15",
          parameter: "没有钱",
          establish_time: "2019-05-24 11:17:15"
        },
        {
          id: "#44",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          url: "84916514",
          time: "2019-05-24 11:17:15",
          parameter: "没有钱",
          establish_time: "2019-05-24 11:17:15"
        },
        {
          id: "#4",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          url: "84916514",
          time: "2019-05-24 11:17:15",
          parameter: "没有钱",
          establish_time: "2019-05-24 11:17:15"
        },
        {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          url: "84916514",
          time: "2019-05-24 11:17:15",
          parameter: "没有钱",
          establish_time: "2019-05-24 11:17:15"
        },
        {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          url: "84916514",
          time: "2019-05-24 11:17:15",
          parameter: "没有钱",
          establish_time: "2019-05-24 11:17:15"
        },
        {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          url: "84916514",
          time: "2019-05-24 11:17:15",
          parameter: "没有钱",
          establish_time: "2019-05-24 11:17:15"
        },
        {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          url: "84916514",
          time: "2019-05-24 11:17:15",
          parameter: "没有钱",
          establish_time: "2019-05-24 11:17:15"
        },
        {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          url: "84916514",
          time: "2019-05-24 11:17:15",
          parameter: "没有钱",
          establish_time: "2019-05-24 11:17:15"
        },
        {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          url: "84916514",
          time: "2019-05-24 11:17:15",
          parameter: "没有钱",
          establish_time: "2019-05-24 11:17:15"
        },
        {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          url: "84916514",
          time: "2019-05-24 11:17:15",
          parameter: "没有钱",
          establish_time: "2019-05-24 11:17:15"
        },
        {
          id: "#444",
          number: "DS2019627212014313",
          name: "赵二麻子小吃店",
          type: "启用",
          url: "84916514",
          time: "2019-05-24 11:17:15",
          parameter: "没有钱",
          establish_time: "2019-05-24 11:17:15"
        }
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