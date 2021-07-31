<template>
    <div>
        <div class="gfxx" v-for="(item1,index1) of dhxxlistgf" :key="index1">
            <p>{{item1.lb}}</p>
            <ul>
                <li v-for="(item,index) of item1.jtlist" :key="index">
                    <i :class="[item.img]" class="iconfont"></i>
                    <div :class="{shx:item1.jtlist.length>1}" class="gfxx-right">
                        <div class="msg-top">
                            <span class="msgsp1">{{item.dhr}}</span>
                            <span class="msgsp2">{{item.lasttime | dhksj}}</span>
                        </div>
                        <p>
                            <span>
                            {{item.lastnr}}
                            </span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
      .gfxx{
            >p{
                font-size: 14px;
                background-color: rgb(236, 227, 227);
                padding: 5px;
                color: rgb(119, 114, 114);
            }
            li{
                height: 60px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                i{
                    padding: 0 10px;
                    font-size: 45px;
             }
                .shx{
                    border-bottom: 1px solid rgb(199, 185, 185);
                    padding-bottom: 6px;
                    margin-right: 6px;
                }
             .gfxx-right{
                 width: 80%;
                 display: flex;
                 flex-direction: column;
                 justify-content: center;
                 .msg-top{
                     display: flex;
                     justify-content: space-between;
                     padding-right: 10px;
                     .msgsp2{
                         font-size: 12px;
                         color: rgb(172, 155, 155);
                     }
                 }
                 p{
                     margin: 0px;
                     white-space:nowrap;
                     overflow:hidden;
                     text-overflow:ellipsis;
                     span{
                     font-size: 14px;
                     color: rgb(172, 155, 155);
                    }
                 }
             }

            }
        }
</style>
<script>
export default {
    props:['dhxxlistgf'],
    data(){
        return{

        }
    },
    filters:{
        //最后一条对话距离现在的时间差
           dhksj : function (val) {
            let newtime = new Date().getTime()
            let gap = newtime - val * 1000
            let gaptime = gap / 1000 / 60
            if (gaptime >= 1 && gaptime < 60) {
                return gaptime = Math.floor(gaptime) + '分钟前'
            } else if (gaptime >= 60 && gaptime < 1440) {
                return gaptime = Math.floor(gaptime / 60) + '小时前'
            } else if (gaptime >= 1440 && gaptime < 10080) {
                return gaptime = Math.floor(gaptime / 60 / 24) + '天前'
            } else {
                let data = new Date(val * 1000)
                let oldy = data.getFullYear()
                let oldM = data.getMonth() + 1
                let oldday = data.getDate()
                return oldy + '年' + oldM + '月' + oldday + '日'
            }
        }
    }
}
</script>