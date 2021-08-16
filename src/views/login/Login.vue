<template>
  <div
    :style="{ width: Pwidth + 'px', height: Pheight + 'px' }"
    class="login-content"
  >
    <div></div>
    <div class="yytp">
      <img class="yylogo" src="../../../public/logo/test.jpg" alt="" />
      <div class="scale2"></div>
      <div class="scale1"></div>
    </div>

    <div class="dlfs">
      <div class=" sjdl">
        <button
          @click="$router.push('/sjhmdl')"
          :style="{ width: Pwidth * 0.7 + 'px' }"
        >
          手 机 号 登 录
        </button>
      </div>
      <ul class="gzfs">
        <li>
          <i class="iconfont icon-weixin"></i>
        </li>
        <li>
          <i class="iconfont icon-tubiao215"></i>
        </li>
        <li>
          <i class="iconfont icon-tubiao214"></i>
        </li>
        <li>
          <i class="iconfont icon-wangyi0"></i>
        </li>
      </ul>
      <p>
        登录即已同意
        <span>《用户协议》</span>
        <span>《隐私政策》</span>
        <span>《儿童隐私政策》</span>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@keyframes sbw {
  0% {
    transform: scale(1);
    border: 1px solid rgb(209, 92, 92);
  }
  25% {
    transform: scale(2.3);
    border: 1px solid rgb(177, 60, 60);
  }
  50% {
    transform: scale(3.3);
    border: 1px solid rgb(190, 47, 47);
  }
  75% {
    transform: scale(4.3);
    border: 1px solid rgb(209, 50, 50);
  }
  100% {
    transform: scale(5);
    border: 1px solid #c20c0c;
  }
}

.login-content {
  background-color: #c20c0c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .yytp {
    border-radius: 90px;
    width: 80px;
    height: 80px;
    margin-bottom: 20%;
    display: flex;
    justify-content: center;
    position: relative;
    img {
      width: 80px;
      height: 80px;
      border-radius: 90px;
    }
    .scale1 {
      width: 80px;
      height: 80px;
      border-radius: 90px;
      animation: sbw 3s linear 1.5s infinite;
      position: absolute;
    }
    .scale2 {
      width: 80px;
      height: 80px;
      border-radius: 90px;
      animation: sbw 3s linear infinite;
      position: absolute;
    }
  }
  .dlfs {
    .sjdl {
      display: flex;
      justify-content: center;
      button {
        height: 40px;
        border-radius: 14px;
        outline: none;
        border: 0;
        color: #c20c0c;
      }
    }
    .gzfs {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      li {
        i {
          font-size: 25px;
          color: rgb(207, 193, 193);
        }
      }
    }
    p {
      font-size: 10px;
      color: rgb(179, 171, 171);
      span {
        color: white;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      Pwidth: "",
      Pheight: "",
    };
  },

  mounted() {
    let Pwidth = document.documentElement.clientWidth;
    let Pheight = document.documentElement.clientHeight;
    this.Pwidth = Pwidth;
    this.Pheight = Pheight;
  },
};
</script>
