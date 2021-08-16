<template>
  <div :style="{ width: Pwidth + 'px' }" class="sjhmdl-content">
    <div class="sjhmdl-top">
      <van-icon size="25px" name="cross" />
      <span>手机号码登录</span>
    </div>
    <div class="sjhmdl-center">
      <van-field
        v-model="tel"
        placeholder="请输入手机号码"
        autofocus
        type="tel"
        label="手机号"
      />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field
        v-model="password"
        type="password"
        placeholder="请输入密码"
        label="密码"
      />
    </div>
    <div class="dlan">
      <van-button
        @click="login"
        :style="{ width: Pwidth * 0.5 + 'px' }"
        type="danger"
        >登&nbsp;&nbsp; &nbsp;录</van-button
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.sjhmdl-content {
  padding-top: 20px;
  .sjhmdl-top {
    display: flex;
    align-items: center;
    padding: 10px;
    span {
      font-size: 20px;
      padding-left: 10px;
    }
    padding-bottom: 40px;
  }
  .van-cell {
    background-color: #f2f2f2;
  }
  .dlan {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    button {
      border-radius: 90px;
      font-size: 18px;
      font-family: "Microsoft YaHei";
    }
  }
}
</style>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      password: "",
      tel: "",
      Pwidth: "",
    };
  },
  methods: {
    ...mapMutations(["islogin", "userInfoadd"]),
    login() {
      this.$request("/login/cellphone", {
        phone: this.tel,
        password: this.password,
      }).then((result) => {
        if (result.data.code === 200) {
          this.$toast.success("成功登录");
          let jzl = { tel: this.tel, password: this.password };
          jzl = JSON.stringify(jzl);
          window.localStorage.setItem("yhxx", jzl);
          window.localStorage.setItem(
            "userInfo",
            JSON.stringify(result.data.profile)
          );
          this.userInfoadd(result.data.profile);
          this.islogin("true");
          console.log(this.$store.state.userInfo);
          this.$router.push("/");
        } else if (result.data.code === 400) {
          //手机号错误
          this.$toast.fail("手机号错误");
          console.log(result.data);
        } else if (result.data.code === 502) {
          //密码错误
          this.$toast.fail("密码错误");
        } else {
          //登录失败,请稍后再试
          this.$toast.fail("登陆失败,请稍后再试");
        }
      });
    },
  },
  mounted() {
    let Pwidth = document.documentElement.clientWidth;
    this.Pwidth = Pwidth;
    let yhxx = JSON.parse(window.localStorage.getItem("yhxx"));
    if (yhxx) {
      this.tel = yhxx.tel;
      this.password = yhxx.password;
    }
  },
};
</script>
