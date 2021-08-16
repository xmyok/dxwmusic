<template>
  <div class="content">
    <div class="top">
      <span class="sp1">推荐歌单</span>
    </div>
    <div class="center" style="overflow:scroll">
      <ul :style="{ width: Pwidth * tjpages + 'px' }">
        <li
          :style="{ width: Pwidth / 3 + 'px' }"
          class="tjli"
          v-for="item in tjgd"
          :key="item.id"
          @click="$router.push({ path: '/gddetails', query: { Id: item.id } })"
        >
          <div class="bfl">
            <van-icon name="play-circle-o" />
            <span>{{ item.playCount | jiawan }}</span>
          </div>
          <img
            :style="{ height: Pwidth / 3 - 40 + 'px' }"
            :src="item.picUrl"
            alt=""
          />
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  .top {
    margin: 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    .sp1 {
      font-size: 18px;
      font-weight: bold;
    }
    .sp2 {
      padding: 2px;
      font-size: 12px;
      border: 1px solid #bfbfbf;
      border-radius: 5px;
    }
  }
  .center {
    ul {
      display: flex;
      .tjli {
        position: relative;
        padding: 20px;
        display: flex;
        flex-direction: column;
        div {
          position: absolute;
          top: 22px;
          display: flex;
          justify-content: center;
          color: white;
          font-weight: 100;
        }
        img {
          border-radius: 10px;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
<script>
export default {
  props: ["tjgd"],
  data() {
    return {
      Pwidth: "",
      Pheight: "",
      tjpages: "",
    };
  },
  filters: {
    jiawan: function(value) {
      if (value > 9999) {
        return (value = parseInt(value / 10000).toFixed(2) + "万");
      } else {
        return value;
      }
    },
  },
  mounted() {
    let Pwidth = document.documentElement.clientWidth;
    let Pheight = document.documentElement.clientHeight;
    let tjpages = Math.ceil(this.tjgdlist / 3);
    this.Pwidth = Pwidth;
    this.Pheight = Pheight;
    this.tjpages = tjpages;
  },
};
</script>
