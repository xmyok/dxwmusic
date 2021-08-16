<template>
  <div id="app">
    <router-view />
    <tabbar></tabbar>
  </div>
</template>
<style scoped></style>

<script>
import tabbar from "./components/common/my-tabbar.vue";
export default {
  components: {
    tabbar,
  },
  data() {
    return {};
  },
  beforeCreate() {
    document.querySelector("body").style.backgroundColor = "#f2f2f2";
  },
};
</script>
