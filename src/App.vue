<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style scoped></style>

<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    document.querySelector("body").style.backgroundColor = "#f2f2f2";
  },
};
</script>
