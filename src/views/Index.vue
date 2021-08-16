<template>
  <div class="index-content">
    <div class="top">
      <div>
        <van-icon
          is-link
          @click="showleft"
          size="25"
          :badge="topBadge"
          name="bars"
        />
        <van-popup v-model="show" position="left">
          <div
            :style="{
              width: Pwidth * 0.8 + 'px',
              height: Pheight + 'px',
              color: 'red',
            }"
            class="left-content"
          >
            <CBL @isshowdb="changeshowdb"></CBL>
          </div>
        </van-popup>
        <van-popup round position="bottom" v-model="showdb">
          <div
            :style="{
              width: Pwidth + 'px',
              height: Pheight * 0.2 + 'px',
            }"
            class="left-content"
          >
            <DBL @gbDBL="gbdbl"></DBL>
          </div>
        </van-popup>
      </div>
      <div>
        <van-search
          v-model="searchValue"
          @input="autoSearch"
          background="transparent"
          shape="round"
          placeholder="请输入搜索关键词"
        />
      </div>
      <div>
        <van-icon size="25" name="service" />
      </div>
    </div>
    <div class="center">
      <ul
        v-show="isSearchList"
        class="searchList"
        :style="{ width: Pwidth + 'px', height: Pheight * 0.4 + 'px' }"
      >
        <li v-for="item in allArea" :key="item.id">{{ item.cp }}</li>
      </ul>
      <!-- 轮播图组件 -->
      <van-swipe
        :style="{
          width: Pwidth * 0.9 + 'px',
          margin: 'auto',
          borderRadius: '19px',
        }"
        height="180"
        :autoplay="3000"
      >
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img
            :style="{ width: Pwidth + 'px', height: '100%' }"
            v-lazy="image"
          />
        </van-swipe-item>
      </van-swipe>
      <!-- 各个板块 -->
      <div class="ggbk" :style="{ overflow: 'scroll' }">
        <ul class="bklist" :style="{ width: Pwidth * bkpages + 'px' }">
          <li
            :style="{ width: Pwidth / 5 + 'px' }"
            v-for="item in gnlist"
            :key="item.id"
          >
            <i
              @click="$router.push(`/${item.path}`)"
              class="iconfont"
              :class="[item.tp]"
            ></i>
            <span>{{ item.pname }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <!-- 推荐歌单 -->
      <TJGD :tjgd="tjgd"></TJGD>
      <!-- 随机分类播放 -->
      <SJFLBF></SJFLBF>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.index-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #f2f2f2;
  .top {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    align-items: center;
  }
  .center {
    .searchList {
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      li {
        width: 100%;
        margin: 0 auto;
        border-bottom: 1px solid lightblue;
        text-align: center;
        padding: 10px;
      }
    }
    .ggbk {
      .bklist {
        display: flex;
        margin: 10px 10px;
        li {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          span {
            font-size: 12px;
          }
        }
      }
    }
  }
}
.left-content {
  background-color: #f2f2f2;
}
</style>
<script>
import TJGD from "../components/Index/TJGD.vue";
import SJFLBF from "../components/Index/SJFLBF.vue";
import CBL from "../components/Index/CBL.vue";
import DBL from "../components/Index/DBL.vue";
// import Tabbar from "../components/common/my-tabbar.vue";
//store
import { mapMutations } from "vuex";
export default {
  components: {
    TJGD,
    SJFLBF,
    CBL,
    DBL,
  },
  data() {
    return {
      show: false,
      showdb: false,
      Pwidth: "",
      Pheight: "",
      topBadge: "4",
      //搜索框模糊搜索功能
      searchValue: "",
      allArea: [],
      allNewArea: [
        { id: "1", uname: "lyc", cp: "dxw" },
        { id: "2", uname: "lyc", cp: "dxw2" },
        { id: "3", uname: "lyc", cp: "dxw3" },
      ],
      isSearchList: false,
      //轮播图
      images: [
        require("../../public/imgs/109951166174893715.jpg"),
        require("../../public/imgs/109951166175551938.jpg"),
        require("../../public/imgs/109951166175649404.jpg"),
        require("../../public/imgs/109951166175662877.jpg"),
      ],
      //各个功能板块
      gnlist: [
        { id: "1", tp: "icon-rili", pname: "每日推荐", path: "mrtj" },
        { id: "2", tp: "icon-shouyinji", pname: "私人FM" },
        { id: "3", tp: "icon-gedan", pname: "歌单" },
        { id: "4", tp: "icon-paihangbang", pname: "排行榜", path: "phb" },
        { id: "5", tp: "icon-zhibo", pname: "直播" },
        { id: "6", tp: "icon-zhuanji", pname: "数字专辑" },
        { id: "7", tp: "icon-KTV", pname: "歌房" },
        { id: "8", tp: "icon-youxi", pname: "游戏专区" },
      ],
      bkpages: "",
      //推荐歌单列表
      tjgd: [],
    };
  },
  methods: {
    ...mapMutations(["szkd", "islogin"]),
    showleft() {
      this.show = true;
    },
    //模糊搜索功能
    autoSearch() {
      // 模糊搜索加节流（500ms触发一次）
      var allowPass = true;
      if (this.allArea.length == 0) {
        this.isSearchList = false;
      }
      if (!allowPass || !this.searchValue) {
        this.allArea = [];
        this.isSearchList = false;
        return;
      }
      setTimeout(() => {
        allowPass = false;
        this.allArea = [];
        this.allNewArea.filter((item) => {
          if (item.cp.indexOf(this.searchValue) !== -1) {
            // 此处也可使用js的 search 方法实现indexOf 一样效果
            this.allArea.push(item);
            if (this.allArea.length !== 0) {
              this.isSearchList = true;
            }
          }
        });
      }, 500);
    },
    changeshowdb() {
      this.showdb = true;
      this.islogin("true");
    },
    gbdbl() {
      this.showdb = false;
      this.islogin("false");
    },
  },
  mounted() {
    let Pwidth = document.documentElement.clientWidth;
    let Pheight = document.documentElement.clientHeight;
    this.Pwidth = Pwidth;
    this.Pheight = Pheight;
    let obj = { Pwidth, Pheight };
    this.bkpages = Math.ceil(this.gnlist.length / 5);
    this.szkd(obj);
    console.log(this.$store.state.Pheight);
    //获取推荐歌单
    this.$request("/personalized", {
      limit: "8",
    }).then((result) => {
      this.tjgd = result.data.result;
      // console.log(result.data.result);
    });
  },
};
</script>
