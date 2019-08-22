<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <headerNav></headerNav>
      <div class="content-box" :class="{'content-collapse':collapse}">
        <div class="content">
          <!--  <contentHeader></contentHeader> -->
          <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>
      </div>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import header from "./components/vue/header.vue";
import bus from "./components/bus.js";
export default {
  name: "App",
  components: {
    headerNav: header,
  },

  data() {
    return {
      tagsList: [],
      collapse: false,
      dynamicValidateForm: {
					domains: [{
						value: ''
					}],
					email: ''
				}
    };
  },
  methods: {
    created: function() {
      bus.$on("collapse", msg => {
        console.log(msg);
        this.collapse = msg;
      });
    },
    	submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			removeDomain(item) {
				var index = this.dynamicValidateForm.domains.indexOf(item)
				if (index !== -1) {
					this.dynamicValidateForm.domains.splice(index, 1)
				}
			},
			addDomain() {
				this.dynamicValidateForm.domains.push({
					value: '',
					key: Date.now()
				});
			}
		},
  
		mounted: function() {
			//   执行该方法
			this.created();
		}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  overflow: hidden;
}
body{
  overflow: hidden;
}
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 68px;
  bottom: 0;
  overflow-y: scroll;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
}

.content {
  width: auto;
  padding: 30px;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
}

.content-collapse {
  left: 0px;
}
</style>
