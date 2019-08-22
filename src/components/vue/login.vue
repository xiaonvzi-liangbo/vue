<template>
  <div id="login">
    <P class="biaoti">Pay-xiamen</P>
    <div id="shuru">
      <i class="el-icon-user-solid"></i>
      <el-input v-model="input1" placeholder="请输入内容"></el-input>
      <i class="el-icon-s-goods"></i>
      <el-input placeholder="请输入密码" v-model="input2" show-password></el-input>
      <el-button class="butlog" @click="back" type="primary" >登录</el-button>
    </div>
    <p id="foot">© 2016 pay_xiamen www.lll201905.com All rights reserved</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input1: "",
      input2: ""
    };
  },
  methods: {
    back(){
  		this.$router.push('/home')
  	}

  }
};
</script>
<style>
#login {
  width: 37%;
  height: 50%;
  margin: 12% 0 0 30%;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
}
.biaoti {
  text-align: left;
  font-size: 18px;
  font-weight: 800;
}
#shuru {
  font-size: 25px;
  margin-bottom: 10px;
  border-bottom: rgb(201, 197, 197) 1px solid;
  text-align: center;
}
.el-icon-user-solid,
.el-icon-s-goods {
  width: 10%;
  float: left;
  margin-top: 50px;
}
.el-input {
  width: 90%;
  margin-top: 50px;
  border: 0px;
}
.butlog {
  margin: 20px 0;
  background-color: #1e88e5;
}
#foot {
  font-size: 5px;
  text-align: center;
  color: rgb(201, 197, 197);
}
</style>

