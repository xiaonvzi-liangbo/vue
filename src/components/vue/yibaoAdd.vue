<template>
  <div id="yibao">
    <div id="add">
        <el-button style="margin-left: 15px;" type="primary" @click="dialogFormVisible = true">+ 添加</el-button>

      <el-dialog title="商户进件" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="入网请求号">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商户类型">
            <br />
            <el-select v-model="form.region" placeholder="请选择商户类型">
              <el-option label="个人" value="personal"></el-option>
              <el-option label="个体" value="individual"></el-option>
              <el-option label="企业" value="enterprise"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="商户品牌名称/简称">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="法人姓名">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="法人身份证号">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商户法人手机号">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商户法人邮箱">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <p class="address">商户经营地址</p>
          <v-distpicker></v-distpicker>
          <el-form-item label="商户经营具体地址">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="商户经营范围">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="银行账户">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="开户行编码">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="开户银行支行编码">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <p class="address">开户银行省市</p>
          <v-distpicker></v-distpicker>
          <el-form-item label="开通产品">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="资质影印件">
            <el-input class="photo" v-model="form.name" autocomplete="off" placeholder="身份证正面"></el-input>
            <el-input class="photo" v-model="form.name" autocomplete="off" placeholder="身份证反面"></el-input>
            <el-input class="photo" v-model="form.name" autocomplete="off" placeholder="营业执照"></el-input>
            <el-input class="photo" v-model="form.name" autocomplete="off" placeholder="结算银行卡"></el-input>
            <el-input class="photo" v-model="form.name" autocomplete="off" placeholder="手持身份证照"></el-input>
            <el-input class="photo" v-model="form.name" autocomplete="off" placeholder="手持卡照"></el-input>
            <el-input
              class="photo"
              v-model="form.name"
              autocomplete="off"
              placeholder="手持营业执照、身份证门头合影"
            ></el-input>
          </el-form-item>
          <el-form-item label="补充资料">
             <br/>
            <el-radio v-model="radio1" label="1">是</el-radio>
            <el-radio v-model="radio1" label="2">否</el-radio>
            <el-input class="data" v-model="form.name" autocomplete="off" placeholder="手持卡照"></el-input>
          </el-form-item>
           <el-form-item label="业务功能">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="授权类型">
            <el-input v-model="form.name" autocomplete="off"></el-input>
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
.yibao .el-form-item{
  float: left;
  width: 90%
}
</style>
<script>
import txt from "./yibaotxt.vue";

export default {
  components: {
    txtNav: txt
  },
  data() {
    return {
      dialogFormVisible: false,
      radio1: "1",
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