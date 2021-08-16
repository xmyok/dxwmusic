<template>
  <div>
    <div class="tab-content">
      <div
        v-if="hasplayer"
        :style="{
          width: Pwidth + 'px',
          bottom: (bot = $route.meta.showTab ? '50px' : '0'),
        }"
        class="playermini"
      >
        <audio
          v-show="false"
          ref="audioplayer"
          autoplay
          controls
          :src="playingurl.url"
        ></audio>
        <div @click="showPopup" class="playmini-left">
          <div :class="[discani]" v-if="playing.al" class="minitx">
            <img :src="playing.al.picUrl" alt="" />
          </div>
          <div class="minimsg">
            <span class="minimsg-sp1">{{ playing.name }}</span>
            <span>-</span>
            <span v-if="playing.ar" class="minimsg-sp2">{{
              playing.ar[0].name
            }}</span>
          </div>
        </div>
        <div class="playmini-right">
          <div @click="ztbf">
            <van-circle
              color="black"
              layer-color="gray"
              v-model="currentRate"
              :rate="jdvalue"
              :speed="100"
              :text="text"
              :stroke-width="30"
              size="30px"
            >
              <div v-if="isbf" class="bftz">
                <i v-show="isbf === 'false'" class="iconfont icon-icon-2"></i>
                <i
                  v-show="isbf === 'true'"
                  class="iconfont icon-zantingtingzhi"
                ></i>
              </div>
            </van-circle>
          </div>
          <i
            @click="showbflb"
            lazy-render="false"
            class="iconfont icon-liebiao "
          ></i>
        </div>
      </div>
      <van-popup
        style="background-color:transparent"
        position="bottom"
        :style="{ height: '100%' }"
        v-model="showlb"
      >
        <Bflb @qxbflb="qxbflb"></Bflb>
      </van-popup>
      <van-popup position="bottom" :style="{ height: '100%' }" v-model="show">
        <Playerqp @qxqp="qxqp" :audioplayer="$refs.audioplayer"></Playerqp>
      </van-popup>
      <div>
        <van-tabbar v-if="$route.meta.showTab" route v-model="active">
          <van-tabbar-item to="/" name="home" icon="home-o"
            >发现</van-tabbar-item
          >
          <van-tabbar-item to="/bk" name="search" icon="search"
            >博客</van-tabbar-item
          >
          <van-tabbar-item to="/me" name="friends" icon="friends-o"
            >我的</van-tabbar-item
          >
          <van-tabbar-item to="/ktv" name="setting" icon="setting-o"
            >K歌</van-tabbar-item
          >
        </van-tabbar>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.disc-animal {
  animation: turn 2s linear infinite;
}
.tab-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .playermini {
    display: flex;
    position: fixed;
    height: 50px;
    border-top: 1px solid rgb(199, 185, 185);
    box-shadow: 0px 31px 47px 30px #c7b9b9;
    background-color: #f2f2f2;
    // z-index: 1000;
    .playmini-left {
      width: 70%;
      height: 50px;
      display: flex;
      align-items: center;
      .minitx {
        border-radius: 90px;
        overflow: hidden;
        height: 100%;
        width: 10%;
        padding: 0 5px;
        display: flex;
        align-items: center;
        img {
          border-radius: 90px;
          width: 100%;
        }
      }
      .minimsg {
        .minimsg-sp1 {
          font-size: 16px;
          font-family: "Microsoft YaHei";
        }
        .minimsg-sp2 {
          font-size: 13px;
          color: rgb(165, 156, 156);
        }
      }
    }
    .playmini-right {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      i {
        font-size: 30px;
        color: rgb(155, 143, 143);
      }
      .bftz {
        > i {
          font-size: 30px;
          color: rgb(168, 152, 152);
          text-align: right;
        }
      }
    }
  }
}
</style>
<script>
import { mapState, mapMutations } from "vuex";
import Playerqp from "../../components/common/Player.vue";
import Bflb from "../../components/common/Bflb.vue";
export default {
  components: {
    Playerqp,
    Bflb,
  },
  data() {
    return {
      Pwidth: "",
      Pheight: "",
      active: "home",
      bot: "50px",
      //miniplayer 环形进度条
      currentRate: 0,
      //当前音频总时长
      duration: 0,
      //当前时间
      currentTime: 0,
      //是否全屏 false=全屏
      show: false,
      //底部弹出播放列表
      showlb: false,
      //控制mini播放器是否显示,由底部watch监控vuex中的数据决定
      hasplayer: false,
    };
  },
  computed: {
    ...mapState([
      "isplayer",
      "playingurl",
      "playing",
      "isbf",
      "jdvalue",
      "bfllbtc",
    ]),
    text() {
      return this.currentRate.toFixed(0) + "%";
    },
    //右侧旋转小图片
    discani() {
      return this.isbf == "true" ? "disc-animal" : "";
    },
  },

  mounted() {
    //相关尺寸获取
    let Pwidth = document.documentElement.clientWidth;
    let Pheight = document.documentElement.clientHeight;
    this.Pwidth = Pwidth;
    this.Pheight = Pheight;
  },
  updated() {
    //获取当前音频总时长
    if (this.$refs.audioplayer) {
      let audioEle = this.$refs.audioplayer;
      audioEle.onloadeddata = () => {
        if (this.isplayer) {
          this.duration = audioEle.duration;
          if (this.duration != 0) {
            let part1 = this.duration * 10;
            let time1 = setInterval(() => {
              this.currentTime = audioEle.currentTime;
              let gqjd = ((this.currentTime / this.duration) * 100).toFixed(0);
              this.changejdvalue(gqjd);
              if (this.currentTime >= this.duration || this.isbf == "false") {
                this.changeisbf("false");
                clearInterval(time1);
              }
            }, part1);
          }
        }
      };
    }
  },

  methods: {
    ...mapMutations(["changeisbf", "changejdvalue", "changebfllbtc"]),
    //minicontrols 播放或者暂停
    ztbf() {
      let audioEle = this.$refs.audioplayer;
      let part1 = this.duration * 10;
      if (this.isbf == "true") {
        audioEle.pause();
        this.changeisbf("false");
      } else {
        audioEle.play();
        this.changeisbf("true");
        audioEle.onloadeddata = () => {
          let part1 = this.duration * 10;
          let time1 = setInterval(() => {
            this.currentTime = audioEle.currentTime;
            let gqjd = ((this.currentTime / this.duration) * 100).toFixed(0);
            this.changejdvalue(gqjd);
            if (this.currentTime >= this.duration || this.isbf == "false") {
              clearInterval(time1);
            }
          }, part1);
        };
      }
    },
    //底部弹出全屏播放器
    showPopup() {
      this.show = true;
    },
    qxqp() {
      this.show = false;
    },
    //底部弹出播放列表
    showbflb() {
      this.showlb = true;
      this.changebfllbtc("true");
    },
    qxbflb() {
      this.showlb = false;
      this.changebfllbtc("false");
    },

    //打开播放列表界面
    gobflb() {},
  },
  watch: {
    playingurl: {
      handler(newName, oldName) {
        if (newName.id) {
          this.hasplayer = true;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
