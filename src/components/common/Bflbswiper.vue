<template>
  <div class="swiper-conetent">
    <div class="swiper-container">
      <div class="swiper-pagination"></div>
      <div class="swiper-wrapper">
        <div ref="dqbf" class="swiper-slide dqbf2">
          <div class="dqlb">
            <p>当前播放</p>
            <div class="dqlb-controls">
              <div class="xhfs">
                <i @click="changebflb" :class="[bflb]" class="iconfont "></i>
                <span>{{ bflbmsg }}</span>
              </div>
              <div>
                <i class="iconfont icon-jiahao"></i>
                <span>收藏全部</span>
                <span>|</span>
                <i class="iconfont icon-lajitong"></i>
              </div>
            </div>
            <ul v-if="playlist.tracks">
              <li
                :ref="playingurl.id == item.id ? 'myref' : 'nomyref'"
                v-for="(item, index) of playlist.tracks"
                :key="index"
                class="bflb-dqbf"
              >
                <div>
                  <span style="font-size:18px;">{{ index + 1 }}.</span>
                  <span style="font-size:18px;">{{ item.name }}</span>
                  <span style="font-size:12px;color:gray">-</span>
                  <span style="font-size:12px;color:gray">{{
                    item.ar[0].name
                  }}</span>
                </div>
                <div style="display:flex;align-items:center">
                  <van-icon
                    @click="scgq(index)"
                    size="18"
                    color="gray"
                    name="cross"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="sclb">
            <p>上次播放</p>
            <div class="sclb-top">
              <div>
                <span style="font-size:16px;color:gray">歌单</span>
                <span style="font-size:16px;color:gray">歌单名称</span>
              </div>
              <div>
                <i class="iconfont icon-jiahao"></i>
                <span>收藏全部</span>
                <span>|</span>
                <i class="iconfont icon-lajitong"></i>
              </div>
            </div>
            <ul>
              <li class="bflb-dqbf">
                <div>
                  <span style="font-size:18px;">歌曲名称</span>
                  <span style="font-size:12px;color:gray">-</span>
                  <span style="font-size:12px;color:gray">歌手名字</span>
                </div>
                <div style="display:flex;align-items:center">
                  <van-icon size="18" color="gray" name="cross" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="sclb">
            <p>历史播放</p>
            <div class="sclb-top">
              <div>
                <span style="font-size:16px;color:gray">歌单</span>
                <span style="font-size:16px;color:gray">歌单名称</span>
              </div>
              <div>
                <i class="iconfont icon-jiahao"></i>
                <span>收藏全部</span>
                <span>|</span>
                <i class="iconfont icon-lajitong"></i>
              </div>
            </div>
            <ul>
              <li class="bflb-dqbf">
                <div>
                  <span style="font-size:18px;"></span>
                  <span style="font-size:12px;color:gray"></span>
                  <span style="font-size:12px;color:gray"></span>
                </div>
                <div style="display:flex;align-items:center">
                  <van-icon size="18" color="gray" name="cross" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.swiper-conetent {
  height: 100%;
  > div {
    height: 90%;
  }
  .swiper-wrapper {
    .dqbf2 {
      overflow: scroll;
    }
  }
  .swiper-slide {
    padding: 4px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 13px;
    margin-left: 10px;
    .bflb-dqbf {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 2px;
    }
    .dqlb {
      i {
        font-size: 14px;
        padding: 0 2px;
      }
      p {
        font-size: 16px;
        font-weight: bold;
      }
      .dqlb-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          display: flex;
          align-items: center;
        }
      }
    }
    .sclb {
      i {
        font-size: 14px;
        padding: 0 2px;
      }
      p {
        font-size: 16px;
        font-weight: bold;
      }
      .sclb-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
<script>
import { mapState, mapMutations } from "vuex";
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";
export default {
  data() {
    return {
      bflb: "icon-suijibofang",
      bflbmsg: "随机播放",
      bflblist: [
        "icon-suijibofang",
        "icon-hanhan-01-01",
        "icon-23_shunxubofang",
      ],
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 40,
      autoplay: true,
      loop: true, //循环
      pagination: {
        //分页符
        el: ".swiper-pagination",
      },
      breakpoints: {
        320: {
          //当屏幕宽度大于等于320
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        768: {
          //当屏幕宽度大于等于768
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        1280: {
          //当屏幕宽度大于等于1280
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
      },
    });
  },
  computed: {
    ...mapState([
      "isplayer",
      "isbf",
      "playingurl",
      "playing",
      "playlist",
      "bfllbtc",
    ]),
  },
  methods: {
    //切换播放方式====单曲循环-顺序播放-随机播放
    changebflb() {
      switch (this.bflb) {
        case "icon-suijibofang":
          this.bflb = "icon-hanhan-01-01";
          this.bflbmsg = "单曲循环";
          break;
        case "icon-hanhan-01-01":
          this.bflb = "icon-23_shunxubofang";
          this.bflbmsg = "顺序播放";
          break;
        case "icon-23_shunxubofang":
          this.bflb = "icon-suijibofang";
          this.bflbmsg = "随机播放";
          break;
        default:
      }
    },
    //删除正在播放的改歌单里面的元素
    scgq(i) {
      this.playlist.tracks.splice(i, 1);
    },
  },
  watch: {
    bfllbtc: {
      handler(newName, oldName) {
        if (newName == "true") {
          this.$nextTick(() => {
            let elem = this.$refs.myref[0];
            if (elem) {
              let ysgd = elem.offsetTop;
              this.$refs.dqbf.scrollTop = ysgd;
            }
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
