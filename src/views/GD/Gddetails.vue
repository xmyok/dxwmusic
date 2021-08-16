<template>
  <div class="gddetails-content">
    <div class="detailst">
      <div @click="scroltop" class="details-top">
        <div>
          <van-icon
            @click="$router.back()"
            color="#fff"
            size="25"
            name="arrow-left"
          />
          <span class="top-msg1">歌单</span>
        </div>
        <div>
          <van-icon color="#fff" size="25" name="search" />
          <i class="top-msg2 iconfont icon-gengduo2"></i>
        </div>
      </div>

      <div :style="{ height: Pheight * 0.2 + 'px' }" class="details-center">
        <div class="gdmsg">
          <div class="gdtp" :style="{ width: Pwidth * 0.2 + 'px' }">
            <img :src="gddetails.coverImgUrl" alt="" />
          </div>
          <div class="gdwz">
            <div class="gdwz-top">
              <span>{{ gddetails.name }}</span>
              <span v-if="gddetails.creator">{{
                gddetails.creator.nickname
              }}</span>
            </div>
            <div class="gdwz-bottom">
              <span>{{ gddetails.description }}</span>
            </div>
          </div>
        </div>
        <div class="gddb">
          <ul>
            <li>
              <i
                v-show="
                  this.gddetails.subscribed == false || isLogin == 'false'
                "
                @click="shoucang"
                class="iconfont icon-jia"
              ></i>
              <i
                v-show="this.gddetails.subscribed == true && isLogin == 'true'"
                class="iconfont icon-dui"
              ></i>
              <span>{{ gddetails.subscribedCount | handleNum }}</span>
            </li>
            <li><span class="shu">|</span></li>
            <li>
              <i
                @click="
                  $router.push({
                    path: '/gdpinglun',
                    query: { id: gddetails.id },
                  })
                "
                class="iconfont icon-jianyi"
              ></i>
              <span>{{ gddetails.commentCount | handleNum }}</span>
            </li>
            <li><span class="shu">|</span></li>
            <li>
              <i class="iconfont icon-fenxiang1"></i>
              <span>{{ gddetails.shareCount | handleNum }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="gqlist">
      <div class="gqlist-top">
        <div class="gqlist-top-left">
          <van-icon color="#ff6600" size="20" name="play-circle-o" />
          <span class="top-left-bfqb">播放全部</span>
          <span>({{ songcount }})</span>
        </div>
        <div class="gqlist-top-right">
          <van-icon size="20" name="down" />
          <van-icon size="20" name="certificate" />
        </div>
      </div>
      <div class="gqlist-content">
        <van-list
          offset="50"
          :immediate-check="ischeck"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onload"
        >
          <ul
            class="gqlist-ul"
            v-for="(item, index) in gddetails.tracks"
            :key="index"
          >
            <li @click="play(item.id, index, $event)">
              <div class="gqlist-li-left">
                <span v-show="isplayid != item.id">{{ index + 1 }}</span>
                <span :ref="item.id" v-show="isplayid == item.id">
                  <i
                    style="color:red;font-size:18px"
                    class="iconfont icon-bofangzhong"
                  ></i>
                </span>
                <div class="gqlist-li-left-div">
                  <span>{{ item.name }}</span>
                  <span>{{ item.ar[0].name }}-{{ item.al.name }}</span>
                  <div>
                    <img :src="gddetails.creator.avatarUrl" alt="" />
                    <span>{{ gddetails.creator.nickname }}</span>
                  </div>
                </div>
              </div>
              <div class="gqlist-li-right">
                <i class="iconfont icon-bofang1"></i>
                <i class="iconfont icon-gengduo1"></i>
              </div>
            </li>
          </ul>
        </van-list>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.gddetails-content {
  .detailst {
    background-color: gray;
    padding: 20px;
    .details-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        display: flex;
        align-items: center;
      }
      .top-msg1 {
        font-size: 20px;
        font-family: "Microsoft YaHei";
        padding-left: 10px;
        color: #fff;
      }
      .top-msg2 {
        font-size: 30px;
        padding-left: 10px;
        color: #fff;
      }
    }
    .details-center {
      position: relative;
      padding: 10px;
      .gdmsg {
        display: flex;
        .gdtp {
          overflow: hidden;
          border-radius: 18px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .gdwz {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0 15px;
          width: 70%;
          .gdwz-top {
            display: flex;
            flex-direction: column;
            :first-child {
              font-size: 16px;
              font-weight: bold;
              color: #fff;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            :last-child {
              padding: 10px 0;
              font-size: 14px;
              color: rgb(233, 213, 213);
            }
          }
          .gdwz-bottom {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 80%;
            font-size: 12px;
            font-weight: bold;
            color: rgb(228, 194, 194);
          }
        }
      }
      .gddb {
        box-shadow: 0px 3px 24px -4px gray;
        border-radius: 20px;
        position: absolute;
        width: 70%;
        height: 30px;
        background: #fff;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 50%);
        ul {
          padding: 0 10px;
          height: 30px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          li {
            display: flex;
            align-items: center;
            span {
              font-size: 14px;
              color: rgb(43, 41, 41);
            }
            i {
              font-size: 20px;
            }
            .shu {
              color: rgb(211, 203, 203);
            }
          }
        }
      }
    }
  }
  .gqlist {
    .gqlist-top {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      padding-top: 40px;
      align-items: center;
      > div {
        display: flex;
        align-items: center;
      }
      .gqlist-top-left {
        display: flex;
        align-items: center;
        > :last-child {
          font-size: 14px;
          color: rgb(126, 118, 118);
        }
        .top-left-bfqb {
          font-size: 18px;
          padding-left: 15px;
          font-weight: bold;
        }
      }
      .gqlist-top-right {
        display: flex;
        align-items: center;
        i {
          padding: 0 7.5px;
        }
      }
    }
  }
  .gqlist-content {
    padding: 10px;
    .gqlist-ul {
      li {
        height: 60px;
        padding: 10px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .gqlist-li-left {
          > span {
            width: 10%;
            font-size: 16px;
            color: gray;
          }
          height: 100%;
          width: 80%;
          display: flex;
          align-items: center;
          .gqlist-li-left-div {
            height: 100%;
            width: 90%;
            span:first-child {
              width: 100%;
              font-weight: bold;
              font-size: 16px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            > span:nth-child(2) {
              font-size: 13px;
              color: rgb(173, 158, 158);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            > div {
              span {
                padding-left: 4px;
                font-size: 13px;
                color: rgb(173, 158, 158);
              }
            }
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            > div {
              display: flex;
              align-items: center;
              img {
                width: 15px;
                border-radius: 90px;
              }
            }
          }
        }
        .gqlist-li-right {
          width: 20%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          i {
            color: rgb(136, 123, 123);
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
<script>
import { handleNum } from "../../plugins/utils.js";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      //歌单列表
      gddetails: {},
      loading: false,
      finished: false,
      //是否有更多的音乐
      isMore: "",
      //该歌单的歌曲数量
      songcount: "",
      //正在播放的歌曲id,存入sessionStorge
      isplayid: "",
      ischeck: false,
      Pwidth: "",
      Pheight: "",
    };
  },
  computed: {
    ...mapState(["isLogin", "isplayer", "playing", "playingurl", "isbf"]),
  },
  filters: {
    handleNum,
  },
  created() {
    //获取并且查询歌单列表详情
    let id = this.$route.query.Id;
    this.$request("/playlist/detail", {
      id: id,
    }).then((result) => {
      if (result.status === 200) {
        // console.log(result);
        this.gddetails = result.data.playlist;
        for (let i = 0; i < this.gddetails.tracks.length; i++) {
          this.gddetails.tracks[i].isplay = false;
        }
        // console.log(this.gddetails.tracks);
        // 判断是否有更多的音乐;
        if (this.gddetails.tracks.length <= this.gddetails.trackIds.length) {
          this.isMore = true;
        } else {
          this.finished = true;
        }
        //获取该歌单的歌曲数量
        this.songcount = this.gddetails.trackIds.length;
        //判断是否有正在播放的音乐
        // console.log(window.sessionStorage.getItem("isplayid"));
        this.isplayid = !window.sessionStorage.getItem("isplayid")
          ? ""
          : window.sessionStorage.getItem("isplayid");
        console.log(this.isplayid);
        if (this.isplayid) {
          this.onload();
        }
      }
    });
  },
  mounted() {
    let Pwidth = document.documentElement.clientWidth;
    let Pheight = document.documentElement.clientHeight;
    this.Pwidth = Pwidth;
    this.Pheight = Pheight;
    let time1 = setTimeout(() => {
      if (this.isplayid) {
        let arr = this.$refs[`${this.isplayid}`];
        //如果歌单详细列表里面没有该歌曲则不执行
        if (arr) {
          let ysgd = arr[0].offsetTop;
          let pmgd = document.documentElement.clientHeight;
          document.documentElement.scrollTop = ysgd - pmgd / 2;
          clearTimeout(time1);
        } else {
          clearTimeout(time1);
        }
      }
    }, 1000);
  },
  methods: {
    ...mapMutations([
      "changeisplayer",
      "changeplaying",
      "changeplayingurl",
      "changeisbf",
      "changeplaylist",
    ]),
    //收藏该歌单
    shoucang() {
      //点击收藏,判断是否处于登录状态,如果未登录,则跳转到登录界面
      if (this.isLogin == "false") {
        this.$router.push("/login");
      } else if (this.isLogin == "true" && this.gddetails.subscribed == false) {
        this.$request("/playlist/subscribe", {
          t: 1,
          id: this.gddetails.id,
        }).then((result) => {
          // console.log(result);
          if (result.data.code == 200) {
            this.gddetails.subscribed = true;
            // console.log(this.gddetails);
          }
        });
      }
    },
    //向下滑动加载更多的音乐
    onload() {
      let arr = this.gddetails.trackIds;

      arr = arr.slice(this.gddetails.tracks.length);
      let ids = "";
      arr.forEach((item) => {
        ids += item.id + ",";
      });
      //去掉末尾的','
      ids = ids.substr(0, ids.length - 1);
      this.$request("song/detail", { ids }).then((result) => {
        if (result.data.code === 200) {
          // console.log("进入了", result.data.songs);
          this.gddetails.tracks = [
            ...this.gddetails.tracks,
            ...result.data.songs,
          ];
          if (this.gddetails.tracks.length == this.gddetails.trackIds.length) {
            // this.loading = false;
            this.finished = true;
          }
        }
      });
    },

    //点击播放音乐
    play(id, index) {
      //更改播放状态
      //1.获取播放歌曲的ID
      window.sessionStorage.setItem("isplayid", id);
      this.isplayid = id;
      //2.修改vuex中的 isplayer,isbf 是否正在播放歌曲
      let isplayer = "true";
      this.changeisplayer(isplayer);
      this.changeisbf(isplayer);
      //3.音乐基本信息,获取音乐url,存入vuex
      this.$request("/song/url", { id: id }).then((result) => {
        if (result.data.code === 200) {
          // console.log(this.gddetails.tracks[index]);
          this.changeplaying(this.gddetails.tracks[index]);
          this.changeplayingurl(result.data.data[0]);
        }
      });
      //4.歌单信息存入vuex
      if (this.gddetails) {
        this.onload();
        this.changeplaylist(this.gddetails);
      }

      //进入播放器界面
    },

    //点击回滚道顶部
    scroltop() {},
  },
};
</script>
