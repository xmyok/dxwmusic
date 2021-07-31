<template>
    <div class="me-content">
        <div class="top">
            <div>
                <van-icon is-link @click="showleft2" size='25' :badge="topBadge" name="bars" />
                <van-popup v-model="show2" position="left" >
                    <div :style="{width:Pwidth*0.8+'px',height:Pheight+'px',color:'red'}" class="left-content">
                        <CBL></CBL>
                    </div>    
                </van-popup>
            </div>
            <div >
                <van-icon size='25' name="search" />
            </div>
        </div>
        <div class="top-info">
            <div class='top-info-left'>
                <div>
                    <van-icon size='40' name="manager" />
                </div>
                <div class="top-info-yh">
                    <span class="sp1">LYCOK</span>
                    <span class="sp2">
                        <span class="spvip">VIP开通</span>
                        <span class="splv">等级1v</span>
                    </span>
                </div>
            </div>
            <div class="top-info-right">
                <div><van-icon @click="$router.push('/medetails')" name="arrow" /></div>
            </div>
        </div>
        <div class="center">
            <GNBK></GNBK>
            <CJGD></CJGD>
        </div>
        <div>
            <Tabbar></Tabbar>
        </div>
    </div>
</template>
<style lang="scss" scoped>
  .me-content{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        background-color: #f2f2f2;
        .top{
        display:flex;
        justify-content: space-between;
        padding: 10px 10px;
        align-items: center; 
        }
        .top-info{
            padding: 10px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .top-info-left{
                display: flex;
                justify-content: space-between;
                .top-info-yh{
                    padding-left: 10px;
                    display: flex;
                    flex-direction: column;
                    .sp1{
                        font-size: 17px;
                        font-weight: bold;
                    }
                    .sp2{
                        display: flex;
                        align-items: baseline;   
                        .spvip{
                            font-size: 12px;
                            padding: 2px;
                            border: 1px solid #e3e3e3;   
                            border-radius: 20%; 
                        }
                        .splv{
                            font-size: 8px;
                            padding-left: 5px;
                        }
                    }
                }
            }
        }
    .left-content{
        background-color: #f2f2f2;
    }
  }
</style>
<script>
import CBL from '../components/Index/CBL.vue'
import GNBK from '../components/Me/GNBK.vue'
import CJGD from '../components/Me/CJGD.vue'
import Tabbar from '../components/common/my-tabbar.vue'
export default {
    components:{CBL,GNBK,CJGD,Tabbar},
    data() {
        return{
            topBadge:'8',
            show2:false,
            Pwidth:'',
            Pheight:'',
        }
    },
    methods:{
        showleft2(){
            this.show2=true
        },
    },
    mounted(){
        let Pwidth=document.documentElement.clientWidth
        let Pheight=document.documentElement.clientHeight
        this.Pwidth=Pwidth
        this.Pheight=Pheight
    }
}
</script>