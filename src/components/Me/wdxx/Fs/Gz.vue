<template>
  <div :style="{ height: Pheight + 'px' }" class="gz-content">
    <div class="gz-top">
      <div class="px">
        <span>按关注时间排序</span>
      </div>
      <div class="fl">
        <ul>
          <li><span>全部</span></li>
          <li><span>|</span></li>
          <li><span>歌手</span></li>
          <li><span>|</span></li>
          <li><span>用户</span></li>
        </ul>
      </div>
    </div>
    <div class="gz-center">
      <div class="cleft">
        <span>本周更新</span>
      </div>
      <div class="cright">
        <ul>
          <li v-for="(item, index) of bzlist" :key="index">
            <img :src="item" alt="" />
          </li>
        </ul>
        <span class="jrgx">
          {{ bzlist.length }}人更新 <span>&nbsp;&nbsp;> </span>
        </span>
      </div>
    </div>
    <div class="gz-bottom">
      <ul>
        <li v-for="(item, index) of ygzlist" :key="index">
          <div class="leftimg">
            <img :src="item.img" alt="" />
          </div>

          <div class="rightmsg">
            <span class="mxname">{{ item.mxname }}</span>
            <span class="zjdt">{{ item.zjdt | dhksj }}前,发布了新动态</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.gz-content {
  .gz-top {
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    .px {
      font-size: 13px;
      color: #333;
      font-weight: bold;
    }
    .fl {
      ul {
        display: flex;
        justify-content: space-between;
        li {
          padding: 0 2px;
          span {
            font-size: 14px;
            color: rgb(173, 159, 159);
          }
        }
      }
    }
  }
  .gz-center {
    width: 90%;
    height: 50px;
    border: 1px solid rgb(199, 191, 191);
    margin: 0 auto;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    .cleft {
      span {
        font-size: 15px;
        font-weight: bold;
        font-family: "Microsoft YaHei";
      }
    }
    .cright {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        padding-right: 5px;
        li {
          width: 30px;
          height: 30px;
          background-color: red;
          border-radius: 50%;
          margin-left: -10px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
      }
      .jrgx {
        font-size: 12px;
        color: rgb(180, 174, 174);
      }
    }
  }
  .gz-bottom {
    ul {
      padding: 10px;
      display: flex;
      flex-direction: column;
      li {
        padding: 10px 0;
        display: flex;
        align-items: center;
        .leftimg {
          width: 15%;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .rightmsg {
          width: 80%;
          border-bottom: 1px solid rgb(206, 194, 194);
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          .mxname {
            padding: 2px;
            font-family: "Microsoft YaHei";
            font-weight: bold;
          }
          .zjdt {
            padding: 2px;
            font-size: 12px;
            color: rgb(182, 168, 168);
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
      Pwidth: "",
      Pheight: "",
      ygzlist: [
        {
          mxname: "网易CEO丁磊",
          zjdt: "1627445032",
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
        },
        {
          mxname: "云音乐小秘书",
          zjdt: "1627345032",
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
        },
        {
          mxname: "网易云音乐",
          zjdt: "1627245032",
          img: require("../../../../../public/mrtj/gqlist/dongmian.jpg"),
        },
      ],
      bzlist: [],
    };
  },
  filters: {
    //最后一条对话距离现在的时间差
    dhksj: function(val) {
      let newtime = new Date().getTime();
      let gap = newtime - val * 1000;
      let gaptime = gap / 1000 / 60;
      if (gaptime > 1 && gaptime < 1) {
        return "刚刚";
      } else if (gaptime >= 1 && gaptime < 60) {
        return (gaptime = Math.floor(gaptime) + "分钟前");
      } else if (gaptime >= 60 && gaptime < 1440) {
        return (gaptime = Math.floor(gaptime / 60) + "小时前");
      } else if (gaptime >= 1440 && gaptime < 10080) {
        return (gaptime = Math.floor(gaptime / 60 / 24) + "天前");
      } else {
        let data = new Date(val * 1000);
        let oldy = data.getFullYear();
        let oldM = data.getMonth() + 1;
        let oldday = data.getDate();
        return oldy + "年" + oldM + "月" + oldday + "日";
      }
    },
  },
  mounted() {
    let Pwidth = document.documentElement.clientWidth;
    let Pheight = document.documentElement.clientHeight;
    this.Pwidth = Pwidth;
    this.Pheight = Pheight;
    //近期一周的数据加入bzlist
    //获取当前时间戳
    let sjc = new Date().getTime();
    let yzqsjc = (sjc - 604800000) / 1000;
    console.log(yzqsjc);
    for (let i = 0; i < this.ygzlist.length; i++) {
      if (this.ygzlist[i].zjdt > yzqsjc) {
        this.bzlist.push(this.ygzlist[i].img);
      }
    }
    console.log(this.bzlist);
  },
};
</script>
