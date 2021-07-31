<template>
    <div>
         <van-tabbar route v-model="active">
            <van-tabbar-item to='/' name="home" icon="home-o">发现</van-tabbar-item>
            <van-tabbar-item to='/bk' name="search" icon="search">博客</van-tabbar-item>
            <van-tabbar-item to='/me' name="friends" icon="friends-o">我的</van-tabbar-item>
            <van-tabbar-item to='/ktv' name="setting" icon="setting-o">K歌</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
  data(){
    return{
        active: 'home',
      
    }
  }
}
</script>