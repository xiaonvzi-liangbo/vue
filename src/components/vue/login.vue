<template>
  <div id="login">
    <el-input v-model="input1" placeholder="请输入内容"></el-input>
    <el-input placeholder="请输入密码" v-model="input2" show-password></el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input1: "",
      input2:"",
    };
  }
};
</script>
<style>
#login{
    width:50%;
    height:50%;
    margin: 14% 0 0 25%;
    padding: 20px;
    background-color: #fff;
}
</style>

