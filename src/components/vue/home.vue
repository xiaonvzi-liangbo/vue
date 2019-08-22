<template>
  <div id="home">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="今日实时数据统计" name="first">
        <todayNav></todayNav>
      </el-tab-pane>
      <el-tab-pane label="昨日数据统计" name="second">
        <yesterdayNav></yesterdayNav>
      </el-tab-pane>
      <el-tab-pane label="支付成功但未成功通知商户订单" name="third">
        <listingNav></listingNav>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import today from "../vue/today.vue";
import yesterday from "../vue/yesterday.vue";
import listing from "../vue/listing.vue";

export default {
  components: {
    todayNav: today,
    yesterdayNav: yesterday,
    listingNav: listing
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    today() {
      this.$router.push("/today");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

