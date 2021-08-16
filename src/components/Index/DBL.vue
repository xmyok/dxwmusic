<template>
  <div class="dbl-content">
    <div class="top-msg">
      <span> 退出登录/关闭</span>
    </div>
    <div class="content">
      <p>关闭得悉味音乐</p>
      <p @click="signout">退出得悉味音乐登录</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dbl-content {
  height: 90%;
  .top-msg {
    height: 25%;
    display: flex;
    border-bottom: 1px solid rgb(209, 197, 197);
    span {
      font-size: 14px;
      color: rgb(116, 110, 110);
      padding: 10px;
    }
  }
  .content {
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
      margin: 0 10px;
      font-family: "STHeiti";
      font-weight: bold;
    }
  }
}
</style>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["islogin"]),
    signout() {
      this.$dialog
        .confirm({
          title: "退出登录",
          message: "是否要退出得悉味音乐的登录",
        })
        .then(() => {
          //vuex 中状态修改
          let obj = { isLogin: "false" };
          this.islogin(obj);
          //关闭底部弹出框
          this.$emit("gbDBL");
          //切换为退出登录样式
          this.$router.go(0);
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>
