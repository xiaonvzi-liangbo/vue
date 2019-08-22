<template>
  <div id="fuyou">
    <div id="add">
        <el-button style="margin-left: 15px;" type="primary" @click="dialogFormVisible = true">+ 添加</el-button>
       

      <el-dialog style="overflow-y: hidden;"  title="商户进件" :visible.sync="dialogFormVisible">
        <el-form  :model="form">
          <el-form-item label="商户全称">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商户简称">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商户真实名称（同营业执照）">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="证件类型">
            <br />
            <el-select v-model="form.region" placeholder="请选择类型">
              <el-option label="营业执照" value="personal"></el-option>
              <el-option label="三证合一" value="individual"></el-option>
              <el-option label="身份证" value="enterprise"></el-option>
              <el-option label="个体户" value="enterprise"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="证件号码">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="证件到期日">
            <el-input v-model="form.name" autocomplete="off" placeholder="无有效期日请填19000101"></el-input>
          </el-form-item>

          <el-form-item label="法人姓名">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="法人身份证号">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="法人身份证到期日">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item style="width:100%" label="省市代码">
              <br/>
            <v-distpicker></v-distpicker>
          </el-form-item>
          <el-form-item label="联系人姓名">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="联系电话">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系地址">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="客服电话">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="经营范围">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="入帐卡类型">
              <br/>
            <el-radio v-model="rz_type" label="1">对公</el-radio>
            <el-radio v-model="rz_type" label="2">对私</el-radio>
           </el-form-item>
          <el-form-item label="入账卡开户行银联号">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="入帐卡开户行名称">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="入帐卡户名">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="清算类型">
            <br />
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="自动结算（T1）" value="personal"></el-option>
              <el-option label="手动结算" value="individual"></el-option>
              <el-option label="自动结算（D1）身份证" value="enterprise"></el-option>
              <el-option label="手动结算个体户" value="enterprise"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="法人入账标识">
            <br />
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="非法人入帐标识" value="personal"></el-option>
              <el-option label="法人入帐标识" value="individual"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="入账证件到期日">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="微信开通标识">
               <br/>
            <el-radio v-model="wx" label="1">开通</el-radio>
            <el-radio v-model="wx" label="2">不开通</el-radio>
          </el-form-item>
          <el-form-item label="微信扣率">
            <br />
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="0.38%" value="personal"></el-option>
              <el-option label="0.5%" value="individual"></el-option>
              <el-option label="0.55%" value="personal"></el-option>
              <el-option label="0.6%" value="individual"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="支付宝开通标识">
               <br/>
            <el-radio v-model="zfb" label="1">开通</el-radio>
            <el-radio v-model="zfb" label="2">不开通</el-radio>
          </el-form-item>
          <el-form-item label="支付宝扣率">
            <br />
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="0.38%" value="personal"></el-option>
              <el-option label="0.5%" value="individual"></el-option>
              <el-option label="0.55%" value="personal"></el-option>
              <el-option label="0.6%" value="individual"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
      <el-divider></el-divider>
    <div id="search">
      <el-form>
        <el-form-item label="商户名称：">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选择日期：">
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-button style="margin-top:5px" type="primary" icon="el-icon-search">搜索</el-button>
      </el-form>
    </div>
    <div id="yibaotxt">
      <txtNav></txtNav>
    </div>
  </div>
</template>
<style>
#fuyou .el-dialog .el-form-item {
  width: 30%;
 float: left;
 margin-right: 10px;
 height: 80px;
}
#fuyou .el-dialog{
    margin: auto;
    width: 80%;
}
#fuyou .distpicker-address-wrapper select{
  width: 30%;
  margin-right  : 10px;
  float: left;
}
</style>
<script>
import txt from "./fuyoutxt.vue";

export default {
  components: {
    txtNav: txt
  },
  data() {
    return {
      dialogFormVisible: false,
      radio1: "1",
      wx: "1",
      zfb: "1",
      rz_type: "1",
      form: {
        name: "",
        region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: ""
      /*   formLabelWidth: "120px" */
    };
  }
};
</script>