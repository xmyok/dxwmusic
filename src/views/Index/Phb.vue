<template>
    <div class="phb-content">
        <div class="phb-top">
            <van-icon size="25" @click='$router.back()' name="arrow-left" />
            <span>排行榜</span>
        </div>
        <div class="phb-tab">
            <van-tabs background="#f2f2f2">
                <van-tab  v-for="(item,index) in tablist" :key='index' :title="item.mc">
                     <div v-show='index==0'>
                         <gf></gf>
                    </div> 
                    <div v-show='index==1'>
                        <jx></jx>
                    </div> 
                    <div v-show='index==2'>
                        <qf></qf>
                    </div>
                    <div v-show='index==3'>
                        <qq></qq>
                    </div> 
                    <div v-show='index==4'>
                        <mv></mv>
                    </div>
                    <div v-show='index==5'>
                        <ts></ts>
                    </div> 
                </van-tab>
            </van-tabs> 
        </div>
    </div>
</template>
<style lang='scss' scoped>
    .phb-content{
        background-color: #f2f2f2;
        padding: 20px;
        .phb-top{
            display: flex;
            align-items: center;
            span{
                font-size: 18px;
                font-weight: bold;
            }
        }
        .phb-tab{
            margin-top: 20px;
        }
    }
</style>
<script>
import gf from '../../components/Index/Phb/Gf.vue'
import jx from '../../components/Index/Phb/Jx.vue'
import qf from '../../components/Index/Phb/Qf.vue'
import qq from '../../components/Index/Phb/Qq.vue'
import mv from '../../components/Index/Phb/Mv.vue'
import ts from '../../components/Index/Phb/Ts.vue'
export default {
  components: { gf,jx,qf,qq,mv,ts },
    data(){
        return{
            tablist:[
                {mc:'官方'},
                {mc:'精选'},
                {mc:'曲风'},
                {mc:'全球'},
                {mc:'mv'},
                {mc:'特色'},
            ],
        }
    }
}
</script>