<template>
  <div :style="{ height: Pheight + 'px' }" class="bflb-content">
    <div @click="$emit('qxbflb')" class="bflb-top"></div>
    <div class="bflb-center">
      <Lbswiper></Lbswiper>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bflb-content {
  background: rgba(0, 0, 0, 0);
  .bflb-top {
    height: 40%;
    background-color: transparent;
  }
  .bflb-center {
    height: 60%;
    background-color: transparent;
  }
}
</style>
<script>
import { mapState, mapMutations } from "vuex";
import Lbswiper from "../common/Bflbswiper.vue";
export default {
  components: {
    Lbswiper,
  },
  data() {
    return {
      Pwidth: "",
      Pheight: "",
    };
  },

  mounted() {
    let Pwidth = document.documentElement.clientWidth;
    let Pheight = document.documentElement.clientHeight;
    this.Pwidth = Pwidth;
    this.Pheight = Pheight;
    // console.log(
    //   this.isplayer,
    //   this.isbf,
    //   this.playingurl,
    //   this.playing,
    //   this.playlist
    // );
  },
};
</script>
