<template>
  <div class="tj-content">
    <div class="tjlist">
      <ul>
        <li v-for="(item, index) of tjlist" :key="index">
          <div>
            <i class="iconfont" :class="[item.img]"></i>
          </div>
          <div>
            <span>{{ item.mc }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="gxqlist">
      <p>你可能感兴趣的人</p>
      <ul>
        <li v-for="(item, index) of gxqdrlist" :key="index">
          <div class="lileft">
            <div class="imag">
              <img :src="item.img" alt="" />
            </div>
            <div class="info">
              <div>
                <span class="mxname">{{ item.mxname }}</span
                ><span></span>
              </div>
              <div>
                <span class="itemfs"
                  ><span> {{ item.fs }}</span
                  >&nbsp;|&nbsp;<span>{{ item.title }}</span>
                </span>
              </div>
            </div>
          </div>
          <div v-if="item.gz" class="liright">
            <span @click="changewgz(index)">已关注</span>
          </div>
          <div v-else class="liright">
            <span @click="changegz(index)"> + 关注</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tj-content {
  .tjlist {
    border-bottom: 1px solid rgb(236, 227, 227);
    ul {
      padding: 10px;
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        div:last-child {
          padding-top: 10px;
        }
        i {
          font-size: 25px;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
  .gxqlist {
    padding: 10px;
    padding-top: 0;
    color: rgb(44, 41, 41);
    p {
      font-size: 20px;
      font-weight: bold;
    }
    ul {
      display: flex;
      flex-direction: column;
      li {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        .lileft {
          width: 80%;
          display: flex;
          .imag {
            width: 20%;
            border-radius: 45px;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .info {
            padding-left: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            > div {
              padding: 5px 0;
            }
            .mxname {
              font-weight: bold;
            }
            .itemfs {
              font-size: 13px;
              color: rgb(156, 143, 143);
            }
          }
        }
        .liright {
          width: 20%;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            border: 1px solid red;
            border-radius: 20px;
            padding: 3px 12px;
            font-size: 13px;
            color: red;
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      tjlist: [
        { img: "icon-ren", mc: "认识的人" },
        { img: "icon-vip", mc: "明星用户" },
        { img: "icon-music", mc: "音乐人" },
        { img: "icon-shoucang2", mc: "音乐达人" },
        { img: "icon-biaoqiankuozhan_fujin-398", mc: "认识的人" },
      ],
      gxqdrlist: [
        {
          mxname: "薛之谦",
          fs: "123435235",
          title: "原创歌手薛之谦",
          xb: 1,
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
          gz: false,
        },
        {
          mxname: "Mkuag",
          fs: "8166",
          title: "说唱乐评人",
          xb: 1,
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
          gz: false,
        },
        {
          mxname: "牧童电竞",
          fs: "35228",
          title: "游戏视频原创作者",
          xb: 1,
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
          gz: false,
        },
        {
          mxname: "在天黑之前画完色彩8",
          fs: "455",
          title: "宝藏村民的日常",
          xb: 0,
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
          gz: false,
        },
        {
          mxname: "夏小夏Soki",
          fs: "38719",
          title: "音乐人:夏小夏",
          xb: 1,
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
          gz: false,
        },
        {
          mxname: "陈粒",
          fs: "456222333",
          title: "音乐人:陈粒",
          xb: 0,
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
          gz: false,
        },
        {
          mxname: "毛不易",
          fs: "635767653",
          title: "唱做音乐人毛不易",
          xb: 1,
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
          gz: false,
        },
        {
          mxname: "阿鱼爱学习ay",
          fs: "1245",
          title: "优质用户推荐",
          xb: 0,
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
          gz: false,
        },
        {
          mxname: "穷电影",
          fs: "63434",
          title: "优质用户推荐",
          xb: 1,
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
          gz: false,
        },
        {
          mxname: "许嵩",
          fs: "478939393",
          title: "音乐人",
          xb: 1,
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
          gz: false,
        },
        {
          mxname: "朴树",
          fs: "12832949",
          title: "知名歌手朴树",
          xb: 1,
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
          gz: false,
        },
        {
          mxname: "长瑜_",
          fs: "1245",
          title: "优质用户推荐",
          xb: 0,
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
          gz: false,
        },
      ],
    };
  },
  methods: {
    changegz(i) {
      this.gxqdrlist[i].gz = true;
      this.$toast("成功关注");
    },
    changewgz(i) {
      this.gxqdrlist[i].gz = false;
      this.$toast("取消关注");
    },
  },
};
</script>
