<template>
  <div :style="{ height: Pheight + 'px' }" class="fsqk-content">
    <div class="fs-top">
      <div class="fs-left">
        <van-icon size="25" @click="$router.push('/wdxx')" name="arrow-left" />
      </div>
      <div class="fs-center1">
        <ul>
          <li>
            <span @click="tuijian" :class="{ spaned: xzl == 'tuijian' }"
              >推荐</span
            >
          </li>
          <li>
            <span @click="guanzhu" :class="{ spaned: xzl == 'guanzhu' }"
              >关注</span
            >
          </li>
          <li>
            <span @click="fensi" :class="{ spaned: xzl == 'fensi' }">粉丝</span>
          </li>
        </ul>
        <div :class="xhxed" class="xhx "></div>
      </div>
      <div class="fs-right">
        <van-icon size="25" v-if="search" name="search" />
      </div>
    </div>
    <div class="fs-center">
      <div v-if="nr == 'tuijian'">
        <Tj></Tj>
      </div>
      <div v-else-if="nr == 'guanzhu'">
        <Gz></Gz>
      </div>
      <div v-else-if="nr == 'fensi'">
        <Fs></Fs>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fsqk-content {
  background-color: #f2f2f2;
  .fs-top {
    background: #f2f2f2;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    .fs-center1 {
      ul {
        display: flex;
        li {
          padding: 0 8px;
          display: flex;
          flex-direction: column;
          span {
            font-size: 18px;
          }
          .spaned {
            transition: all 0.3s linear;
            font-weight: bold;
          }
        }
      }
      .xhx {
        width: 36px;
        height: 6px;
        background-color: rgb(231, 63, 63);
        margin: 0 8px;
        border-radius: 20px;
      }
      .xhxed1 {
        transition: all 0.2s linear;
        transform: translate(0px);
      }
      .xhxed2 {
        transition: all 0.2s linear;
        transform: translate(50px);
      }
      .xhxed3 {
        transition: all 0.2s linear;
        transform: translate(102px);
      }
    }
  }
  .fs-center {
    padding-top: 40px;
  }
}
</style>
<script>
import Tj from "../../../components/Me/wdxx/Fs/Tj.vue";
import Gz from "../../../components/Me/wdxx/Fs/Gz.vue";
import Fs from "../../../components/Me/wdxx/Fs/Fs.vue";
import { mapState } from "vuex";
export default {
  components: { Tj, Gz, Fs },
  data() {
    return {
      search: true,
      active: 0,
      xzl: "tuijian",
      xhxed: "",
      nr: "tuijian",
    };
  },
  computed: mapState(["Pwidth", "Pheight"]),
  methods: {
    tuijian() {
      this.xhxed = "xhxed1";
      this.xzl = "tuijian";
      this.nr = "tuijian";
    },
    guanzhu() {
      this.xhxed = "xhxed2";
      this.xzl = "guanzhu";
      this.nr = "guanzhu";
    },
    fensi() {
      this.xhxed = "xhxed3";
      this.xzl = "fensi";
      this.nr = "fensi";
    },
  },
  mounted() {},
};
</script>
