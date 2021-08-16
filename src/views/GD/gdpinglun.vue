<template>
  <div class="gdpl-content">
    <div class="gdpl-top">
      <div class="gd-top-left">
        <van-icon size="25px" name="arrow-left" />
        <span>评论({{ pllist.length }})</span>
      </div>
      <div class="gd-top-right">
        <i class="iconfont icon-fenxiang1"></i>
      </div>
    </div>
    <div class="gdpl-center">
      <div class="gdpl-center-top">
        <span>评论区</span>
        <ul>
          <li @click="changetj">
            <span>推荐</span>
          </li>
          <li @click="changezr">
            <span>最热</span>
          </li>
          <li @ click="changezx">
            <span>最新</span>
          </li>
        </ul>
      </div>
      <div
        v-for="(item, index) of lblx"
        :key="index"
        class="gdpl-center-bottom"
        v-show="changenr == item"
      >
        <ul>
          <li v-for="(p, i) of pllist" :key="i">
            <div></div>
            <div>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div></div>
  </div>
</template>
<style lang="scss" scoped>
.gdpl-content {
  .gdpl-top {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .gd-top-left {
      display: flex;
      align-items: center;
      span {
        font-size: 20px;
      }
    }
    .gd-top-right {
      i {
        font-size: 20px;
        font-weight: bo;
      }
    }
  }
  .gdpl-center {
    .gdpl-center-top {
      display: flex;
      justify-content: space-between;
      > span {
        font-weight: bold;
      }
      ul {
        display: flex;
        li {
          padding: 0 4px;
          span {
            font-size: 14px;
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
      pllist: [],
      changenr: "tj",
      lblx: ["tj", "zr", "zx"],
    };
  },
  methods: {
    //3 种歌单排序方式切换
    changetj() {
      let id = this.$route.query.id;
      this.changenr = "tj";
      this.$request("/comment/new", {
        type: 2,
        id: id,
        sortType: 1,
      }).then((result) => {
        if (result.data.code == 200) {
          this.pllist = result.data.data.comments;
        }
      });
    },
    changezr() {
      let id = this.$route.query.id;
      this.changenr = "zr";
      this.$request("/comment/new", {
        type: 2,
        id: id,
        sortType: 2,
      }).then((result) => {
        if (result.data.code == 200) {
          this.pllist = result.data.data.comments;
          console.log(this.pllist);
        }
      });
    },
    changezx() {
      let id = this.$route.query.id;
      this.changenr = "zx";
      this.$request("/comment/new", {
        type: 2,
        id: id,
        sortType: 3,
      }).then((result) => {
        if (result.data.code == 200) {
          this.pllist = result.data.data.comments;
        }
      });
    },
  },
  mounted() {
    let id = this.$route.query.id;
    this.$request("/comment/new", {
      type: 2,
      id: id,
      sortType: 1,
    }).then((result) => {
      if (result.data.code == 200) {
        this.pllist = result.data.data.comments;
      }
    });
  },
};
</script>
