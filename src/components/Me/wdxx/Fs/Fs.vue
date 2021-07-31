<template>
  <div :style="{ height: Pheight + 'px' }" class="fs-content">
    <van-empty description="空空如也" />
  </div>
</template>
<style lang="scss" scoped>
.fs-content {
  background-color: #f2f2f2;
}
</style>
<script>
export default {
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
  },
};
</script>
