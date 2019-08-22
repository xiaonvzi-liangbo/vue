<template>
  <div id="listing">
    <div id="listinghead">
      <i class="el-icon-warning-outline"></i>
      <p class="title">支付成功但未成功通知商户订单</p>
      <i class="el-icon-refresh"></i>
    </div>
    <div class="litxt">
      <el-table :data="tableData" height="372" border style="width: 100%">
        <el-table-column prop="id" label="订单ID" width="100px"></el-table-column>
        <el-table-column prop="number" label="订单号" width="360px"></el-table-column>
        <el-table-column prop="money" label="金额(分)" width="150px"></el-table-column>
        <el-table-column prop="time" label="支付时间" width="250px"></el-table-column>
        <el-table-column label="操作" width="120px">
          <button class="notice">手动通知</button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style>
#listinghead {
  width: 100%;
  height: 56px;
  background-color: #d81b60;
  color: #fff;
  line-height: 56px;
}
.el-icon-warning-outline {
  float: left;
  font-size: 24px;
  margin: 0 16px;
  line-height: 56px;
}
.title {
  float: left;
}
.el-icon-refresh {
  float: right;
  font-size: 22px;
  font-weight: 600;
  margin: 0 16px;
  line-height: 56px;
}
.litxt {
  width: 100%;
}
.litxt ::-webkit-scrollbar {
  display:none;
}
.notice {
  width: 90px;
  height: 40px;
  background-color: #dd0b0b;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}
tr {
  width: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "55",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        },
        {
          id: "502",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        },
        {
          id: "457",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        },
        {
          id: "823",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        },
        {
          id: "452",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        },
        {
          id: "635",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        },
        {
          id: "688",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        },
        {
          id: "68",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        },
        {
          id: "68",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        },
        {
          id: "856",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        },
        {
          id: "85",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        },
        {
          id: "882",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        },
        {
          id: "55",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        },
        {
          id: "55",
          number: "201908090012554",
          money: "5",
          time: "20190809"
        }
      ]
    };
  }
};
</script>
