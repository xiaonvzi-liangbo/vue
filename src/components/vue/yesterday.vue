<template>
  <div id="today">
    <div id="yesterdayhead">
      <i class="el-icon-date"></i>
      <p class="title">昨日数据统计</p>
    </div>
    <div id="card">
      <el-row :gutter="12">
        <el-col :span="6" v-for="(yDay,key) in yester" :key="key">
          <el-card height="120px" shadow="always">
            <div class="txt">
              <p class="num">{{yDay.num}}</p>
              <p class="name">{{yDay.name}}</p>
              <p class="beizhu">{{yDay.beizhu}}</p>
            </div>
            <i class="imgurl" :class="yDay.imgurl"></i>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      yester: [
        {
          num: "0",
          name: "支付订单数量",
          beizhu: "已支付并且有效的订单",
          imgurl: "el-icon-top-right color0",
        },
        {
          num: "1",
          name: "支付订单金额",
          beizhu: "已支付并且有效的订单",
          imgurl: "el-icon-s-shop",
        },
        {
          num: "2",
          name: "待支付数量",
          beizhu: "未支付的新订单",
          imgurl: "el-icon-top-right color2"
        },
        {
          num: "3",
          name: "待支付金额",
          beizhu: "未支付的新订单",
          imgurl: "el-icon-s-shop"
        },
        {
          num: "4",
          name: "提现数量",
          beizhu: "申请提现成功",
          imgurl: "el-icon-top-right color4"
        },
        {
          num: "5",
          name: "提现金额",
          beizhu: "申请提现成功",
          imgurl: "el-icon-s-finance"
        },
        {
          num: "6",
          name: "提现待处理数量",
          beizhu: "申请提现中",
          imgurl: "el-icon-top-right color6"
        },
        {
          num: "7",
          name: "提现待处理金额",
          beizhu: "申请提现中",
          imgurl: "el-icon-s-finance"
        },
        {
          num: "8",
          name: "用户新增",
          beizhu: "新钱包数据",
          imgurl: "el-icon-user"
        },
        {
          num: "9",
          name: "流水记录",
          beizhu: "有效转账记录",
          imgurl: "el-icon-sort"
        },
        {
          num: "10",
          name: "接口调用",
          beizhu: "商户API请求次数",
          imgurl: "el-icon-circle-check"
        },
        {
          num: "11",
          name: "接口错误",
          beizhu: "商户API未成功返回",
          imgurl: "el-icon-cpu"
        }
      ]
    };
  }
};
</script>

