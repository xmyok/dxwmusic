<template>
  <div :style="{ height: Pheight + 'px' }" class="Player-content">
    <div class="player-top">
      <div class="top-left">
        <van-icon @click="qxqp" size="30" color="#fff" name="arrow-down" />
      </div>
      <div class="top-center">
        <span></span>
        <span></span>
      </div>
      <div class="top-right">
        <i class="iconfont icon-fenxiang"></i>
      </div>
    </div>
    <div class="player-center">
      <div>
        <img
          :class="[needleani]"
          class="needle"
          src="../../../public/icons/bfq/needle.png"
          alt=""
        />
      </div>
      <div class="disback">
        <div>
          <img
            :class="[discani]"
            class="disc"
            src="../../../public/icons/bfq/disc.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="playler-controls">
      <div class="control-top">
        <i class="iconfont icon-shoucang1"></i>
        <i class="iconfont icon-icon--"></i>
        <i class="iconfont icon-yichang"></i>
        <i class="iconfont icon-jianyi"></i>
        <i class="iconfont icon-gengduo2"></i>
      </div>
      <div class="control-center">
        <span>{{ currentTime | sfm }}</span>
        <van-slider
          @change="jindu"
          v-model="value"
          active-color="rgb(204, 179, 179)"
        >
          <template #button>
            <div class="custom-button"></div>
          </template>
        </van-slider>
        <span>{{ duration | sfm }}</span>
      </div>
      <div class="control-bottom">
        <i class="iconfont icon-xunhuan"></i>
        <i class="iconfont icon-icon-1"></i>
        <i
          @click="play"
          v-if="isbf == 'false'"
          class="iconfont icon-bofang2 bf"
        ></i>
        <i @click="pause" v-else class="iconfont icon-zanting zt"></i>
        <i class="iconfont icon-icon-"></i>
        <i class="iconfont icon-liebiao"></i>
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
.Player-content {
  background-color: #4e4445;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .player-top {
    padding: 20px 12px;
    padding-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .top-center {
      display: flex;
      flex-direction: column;
      align-items: center;

      :first-child {
        font-size: 18px;
        color: #fff;
        font-family: "Roman";
      }

      :last-child {
        font-size: 14px;
        color: rgb(201, 196, 196);
      }
    }

    .top-right {
      i {
        font-size: 25px;
        color: #fff;
      }
    }
  }
  .player-center {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: -70px;
    :first-child {
      z-index: 1000;
    }
    :last-child {
      z-index: 999;
    }
    .disback {
      background: url("../../../public/mrtj/gqlist/duoxiangzaipingyongdeshenghuoyongbaoni.jpg")
        no-repeat center;
      .disc {
        border-radius: 50%;
        box-shadow: 0px 0px 2px 10px #695f5f;
      }
    }
    div {
      text-align: center;
      .needle {
        width: 50%;
        margin-left: 45%;
        transition: all 1s;
        transform-origin: 0px 0px;
      }
      .needle-animal-l {
        transform: rotate(25deg);
      }
      .needle-animal-r {
        transform: rotate(0deg);
      }
      .disc {
        margin-top: -20px;
        width: 80%;
      }
      .disc-animal {
        animation: turn 2s linear infinite;
      }
    }
  }
  .playler-controls {
    display: flex;
    flex-direction: column;
    .control-top {
      padding: 15px;
      display: flex;
      padding-bottom: 5px;
      justify-content: space-around;
      i {
        font-size: 30px;
        color: rgb(204, 179, 179);
      }
    }
    .control-center {
      padding: 0px 15px;
      display: flex;
      align-items: center;
      span {
        margin: 0 8px;
        color: #fff;
        font-size: 8px;
      }
    }
    .control-bottom {
      padding: 5px 15px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      i {
        font-size: 30px;
        color: rgb(204, 179, 179);
      }
      .bf,
      .zt {
        font-size: 45px;
      }
    }
  }
}
</style>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["audioplayer"],
  data() {
    return {
      Pwidth: "",
      Pheight: "",
      needleani: "",
      discani: "",
      currentTime: 0,
      duration: 0,
      value: 0,
    };
  },
  filters: {
    sfm: function(value) {
      if (!value) return "";
      let fen = "";
      let miao = "";
      fen =
        Math.floor(value / 60) > 9
          ? Math.floor(value / 60)
          : "0" + Math.floor(value / 60);
      miao =
        Math.floor(value % 60) > 9
          ? Math.floor(value % 60)
          : "0" + Math.floor(value % 60);
      return fen + ":" + miao;
    },
  },
  computed: {
    ...mapState(["isplayer", "playingurl", "playing", "isbf", "jdvalue"]),
  },
  methods: {
    ...mapMutations(["changeisbf", "changejdvalue"]),
    play() {
      let audioEle = this.audioplayer;
      audioEle.play();
      let part1 = (this.duration / 100) * 1000;
      this.needleani = "needle-animal-l";
      this.discani = "disc-animal";
      this.changeisbf("true");
      let time1 = setInterval(() => {
        this.currentTime = audioEle.currentTime;
        if (this.currentTime == this.duration || this.isbf == true) {
          clearInterval(time1);
        }
      }, 1000);
      let time2 = setInterval(() => {
        this.currentTime = audioEle.currentTime;
        let gqjd = ((this.currentTime / this.duration) * 100).toFixed(0);
        this.changejdvalue(gqjd);
        this.value = parseInt(gqjd);
        if (this.currentTime >= this.duration || this.isbf == true) {
          clearInterval(time2);
        }
      }, part1);
      // audioEle.onended = () => {
      //   this.needleani = "needle-animal-r";
      //   this.discani = "";
      //   this.isbf = "false";
      //   this.changejdvalue(0);
      //   this.value = 0;
      // };
    },
    pause() {
      let audioEle = this.audioplayer;
      audioEle.pause();
      this.needleani = "needle-animal-r";
      this.discani = "";
      this.changeisbf("false");
    },
    jindu() {
      let audioEle = this.audioplayer;
      audioEle.currentTime = this.duration * (this.value / 100);
      this.currentTime = audioEle.currentTime;
    },
    qxqp() {
      this.$emit("qxqp");
    },
  },
  mounted() {
    let Pwidth = document.documentElement.clientWidth;
    let Pheight = document.documentElement.clientHeight;
    this.Pwidth = Pwidth;
    this.Pheight = Pheight;
    console.log(this.Pheight);
  },
  updated() {
    //获取当前音频总时长
    let audioEle = this.audioplayer;
    this.duration = audioEle.duration;
    let part1 = this.duration * 10;
    if (!audioEle.paused) {
      this.needleani = "needle-animal-l";
      this.discani = "disc-animal";
    }
    //定时器,控制左侧已播放的时间
    let time1 = setInterval(() => {
      this.currentTime = audioEle.currentTime;
      if (this.currentTime == this.duration || this.isbf == "false") {
        clearInterval(time1);
      }
    }, 1000);
    //定时器,控制条形进度兰
    let time2 = setInterval(() => {
      this.currentTime = audioEle.currentTime;
      let gqjd = ((this.currentTime / this.duration) * 100).toFixed(0);
      this.changejdvalue(gqjd);
      this.value = parseInt(gqjd);
      if (this.currentTime >= this.duration || this.isbf == "false") {
        clearInterval(time2);
      }
    }, part1);
    audioEle.onended = () => {
      console.log("jieshu");
      this.needleani = "needle-animal-r";
      this.discani = "";
      audioEle.currentTime = 0;
      this.currentTime = audioEle.currentTime;
      this.changejdvalue(0);
      this.value = 0;
      this.changeisbf("false");
    };
  },
};
</script>
