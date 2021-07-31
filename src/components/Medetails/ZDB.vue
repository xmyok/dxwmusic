<template>
    <div class="content">
        <van-tabs background='#f2f2f2'  class="zdbys" v-model="active">
            <van-tab title="主页">
                <ZY></ZY>
            </van-tab>
            <van-tab title="动态">
                <DT></DT>
            </van-tab>
            <van-tab title="播客">
                <BK></BK>
            </van-tab> 
        </van-tabs>
    </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import ZY from '../Medetails/zdb/zy.vue'
import DT from  '../Medetails/zdb/dt.vue'
import BK from '../Medetails/zdb/bk.vue'
export default {
    components:{
        ZY,DT,BK
    },
    data() {
        return{
            active:0,
        }
    },
}
</script>