<template>
    <div class="gf-content">
        <div class="gf-top" >
            <i  class="iconfont icon-yinle_2 ft"></i> 
            <span>官方榜</span>
        </div>
        <ul>
            <li class="phbfl" v-for="(item,index) of gfphlist" :key='index'>
                <div class="fl-left">
                    <span :style="{color:item.color}">{{item.mc}}</span>
                    <img :style="{width:Pwidth*0.2+'px'}" :src="item.blist[0].img" alt="">
                </div>
                <div  class="fl-right">
                    <ul :style="{width:Pwidth*0.5+'px'}">
                        <li v-for="(p,i) of item.blist" :key='i'>
                            <div>
                                <span class="fl-sp1">{{i+1}}.{{p.gqmc}}</span>
                                <span class="fl-sp2" v-if="p.singer!==''">-{{p.singer}}</span>
                            </div>
                            <div>
                                <span  class="fl-sp3">-</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang='scss' scoped>
    .gf-top{
        padding-top: 10px;
        display: flex;
        align-items: center;
        i{
            font-size: 20px;
            color: rgb(83, 59, 13);
            padding-right: 5px;
        }
        span{
            font-weight: bold;
            margin-top: -2px;
        }
    }
    .phbfl{
        margin: 10px 0;
        background-color: rgb(235, 224, 224);
        border-radius: 20px;
        display: flex;
        .fl-left{
            display: flex;
            padding: 20px;
            flex-direction: column;
            align-items: center;
            span{
                font-size: 24px;
                font-weight: bold;
                padding-bottom: 10px;
            }
            img{
                border-radius: 17px;
            }
        }
        .fl-right{
            ul{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                li{
                    padding: 3px 0;
                    display: flex;
                    justify-content: space-between;
                    .fl-sp1{
                        font-family:Microsoft JhengHei;
                    }
                    .fl-sp2{
                        color: gray;
                    }
                    .fl-sp3{
                        font-weight: bold;
                        color: gray;
                    }
                }
            }
        }
     }
</style>
<script>
export default {
    data(){
        return{
            gfphlist:[
                {blist:[
                    {gqid:'1',gqmc:'the lakes',singer:'',img:require('../../../../public/mrtj/gqlist/duoxiangzaipingyongdeshenghuoyongbaoni.jpg')},
                    {gqid:'2',gqmc:'火光',singer:'焦迈奇',img:require('../../../../public/mrtj/gqlist/dongmian.jpg')},
                    {gqid:'3',gqmc:'哪里都是你',singer:'队长',img:require('../../../../public/mrtj/gqlist/qiyueqi.jpg')},
                ],mc:'飙升榜',color:'rgb(211, 68, 68)'},
                {blist:[
                    {gqid:'4',gqmc:'变废为宝',singer:'薛之谦',img:require('../../../../public/mrtj/gqlist/qiyueqi.jpg')},
                    {gqid:'5',gqmc:'生活再别处的你',singer:'',img:require('../../../../public/mrtj/gqlist/qiyueqi.jpg')},
                    {gqid:'6',gqmc:'Stay',singer:'The Kid LAROI',img:require('../../../../public/mrtj/gqlist/qiyueqi.jpg')},
                ],mc:'新歌榜',color:'rgb(139, 131, 131)'},
                {blist:[
                    {gqid:'7',gqmc:'哪里都是你',singer:'队长',img:require('../../../../public/mrtj/gqlist/qiyueqi.jpg')},
                    {gqid:'8',gqmc:'晚风',singer:'薛之谦',img:require('../../../../public/mrtj/gqlist/qiyueqi.jpg')},
                    {gqid:'9',gqmc:'变废为宝',singer:'薛之谦',img:require('../../../../public/mrtj/gqlist/qiyueqi.jpg')},
                ],mc:'热歌榜',color:'rgb(143, 10, 10)'},
            ],
            Pwidth:'',
            Pheight:''
        }
    },
            mounted(){
            let Pwidth=document.documentElement.clientWidth
            let Pheight=document.documentElement.clientHeight
            this.Pwidth=Pwidth
            this.Pheight=Pheight
        }
}
</script>