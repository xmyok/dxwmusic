<template>
    <div class="content">
        <div class="top">
            <div class="top-left">
                <van-icon @click='$router.back()' size='25' name="arrow-left" />
                <span>LYCOK</span>
            </div>
            <div class="top-right">
                <van-icon name="ellipsis" />
            </div>
        </div>
        <div class="top-jbxx">
            <JBXX></JBXX>
        </div>
        <div>
            <div class="yybq">
                <span>+添加音乐标签</span>
            </div>
        </div>
        <div class="zdb">
            <ZDB></ZDB>
        </div>
    </div>
</template>
<style lang='scss' scoped>
    .content{
        background-color: #f2f2f2;
        padding: 10px;
        .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .top-left{
                display: flex;
                align-items: center;
                span{
                    padding-left:15px;
                  font-size: 25px;
                }
            }
            .top-right{
                font-size: 25px;
            }

        }
        .yybq{
            width: 30%;
            background:#FFF;
            padding: 1px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            span{
                font-size: 12px;
                text-align: center;
                color: rgb(148, 146, 146);
            }
        }
        .zdb{
            margin-top: 20px;
        }
    }
</style>
<script>
import JBXX from '../components/Medetails/Mejbxx.vue'
import ZDB from '../components/Medetails/ZDB.vue'
export default {
    components:{
        JBXX,ZDB
    },
    data() {
        return{}
    },
}
</script>    