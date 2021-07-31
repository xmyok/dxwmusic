<template>
    <div :style="{width:Pwidth+'px',height:Pheight+'px'}" class="content">
        <div :style="{height:Pheight*0.3+'px'}" class="top">
            <div class="top-icon">
                <van-icon color='white' @click="$router.back()" size='25' name="arrow-left" />
                <van-icon color='white' size='25' name="ellipsis" />
            </div>
            <div class="bottom-msg">
                <div>
                    <div class="rq">
                        <span class="today">{{Today}}</span>
                        <span>/</span>
                        <span >{{Month}}</span>
                    </div>
                    <div class="jrys">
                        <span>查看今日运势></span>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
        <div class="center">
            <div class="bf-head">
                <div class="bf-head-left">
                    <van-icon size='20' name="play-circle-o" />
                    <span>播放全部</span>
                </div>
                <div>
                    <van-icon size='20' name="music-o" />
                </div>
            </div>
            <div class="bf-body">
                <ul>
                    <li @click="$router.push(`../player`)" v-for="(item,index) in Gqlist" :key="index">
                        <div :style="{width:Pwidth*0.7+'px'}" class="list-left">
                            <div >
                                <img :style="{width:Pwidth*0.15+'px'}"  :src="item.img" alt="">
                            </div>
                            <div class="list-left-msg">
                                <span>{{item.gqname}}</span>
                                <span>{{item.singer}}</span>
                            </div>
                        </div>
                        <div class="list-right">
                            <i  class="iconfont icon-bofang1"></i>
                            <i class="iconfont icon-gengduo1"></i>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
    .content{
        .top{
            background-image: url('../../../public/mrtj/bgpic.jpg');
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .top-icon{

                padding: 10px;
                display: flex;
                justify-content: space-between;
            }
            .bottom-msg{
                padding: 10px;
                display: flex;
                justify-content: space-between;
                .rq{
                    span{
                        padding-left: 4px;
                    }
                   font-size: 16px;
                    font-weight:100;
                    color: white;
                    .today{
                        font-size:26px;
                        font-weight: bold;
                    }
                }
                .jrys{
                    font-size: 14px;
                    color: #fff;
                }
            }
        }
        .center{
            padding: 10px;
            .bf-head{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .bf-head-left{
                    display: flex;
                    align-items: center;
                }
            }
            .bf-body{
                
                li{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding:8px 0;
                    .list-left{
                        display: flex;
                        justify-content: start;
                        .list-left-msg{
                            display: flex;
                            flex-direction: column;
                            padding-left: 10px;
                            font-size: 12px;
                            justify-content: center;
                            :last-child{
                                color: rgb(161, 155, 155);
                            }
                        }
                        
                    }
                    .list-right{
                        i{
                            font-size: 20px;
                            color: rgb(170, 164, 164);
                            padding-left: 10px;
                        }
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
            Pwidth:'',
            Pheight:'',
            Today:'',
            Month:'',
            Gqlist:[
                {gqid:'1',gqname:'多想在平庸的生活拥抱你',singer:'隔壁老樊',img:require('../../../public/mrtj/gqlist/duoxiangzaipingyongdeshenghuoyongbaoni.jpg'),dj:'true',yz:'sq'},
                {gqid:'2',gqname:'一万次悲伤',singer:'逃跑计划',img:require('../../../public/mrtj/gqlist/yiwancibeishang.jpg'),dj:'false',yz:'sq'},
                {gqid:'3',gqname:'一滴泪的时间',singer:'赵紫骅',img:require('../../../public/mrtj/gqlist/yidileideshijian.jpg'),dj:'true',yz:'sq'},
                {gqid:'5',gqname:'你是人间四月天',singer:'邵帅',img:require('../../../public/mrtj/gqlist/nishirenjiansiyuetian.jpg'),dj:'true',yz:'sq'},
                {gqid:'5',gqname:'追梦赤子心',singer:'GALA',img:require('../../../public/mrtj/gqlist/zhuimengchizixin.jpg'),dj:'true',yz:'sq'},
                {gqid:'6',gqname:'冬眠',singer:'司南',img:require('../../../public/mrtj/gqlist/dongmian.jpg'),dj:'true',yz:'sq'},
                {gqid:'7',gqname:'七月七',singer:'Jam',img:require('../../../public/mrtj/gqlist/qiyueqi.jpg'),dj:'true',yz:'sq'},
                {gqid:'8',gqname:'我的名字',singer:'焦迈奇',img:require('../../../public/mrtj/gqlist/wodemingzi.jpg'),dj:'true',yz:'sq'},
                {gqid:'9',gqname:'凤凰花开的路口',singer:'林志炫',img:require('../../../public/mrtj/gqlist/fenghuanghuakaidelukou.jpg'),dj:'true',yz:'sq'},
                {gqid:'10',gqname:'春风十里',singer:'鹿先森乐队',img:require('../../../public/mrtj/gqlist/chunfengshili.jpg'),dj:'true',yz:'sq'},
            ],
        }
    },
    mounted(){
        let Pwidth=document.documentElement.clientWidth
        let Pheight=document.documentElement.clientHeight
        this.Pwidth=Pwidth
        this.Pheight=Pheight
        let mydate=new Date()
        this.Today=mydate.getDate()<10? '0'+mydate.getDate():mydate.getDate();
        this.Month=mydate.getMonth()+1<10? '0'+(mydate.getMonth()+1):mydate.getMonth()+1;
    }
}
</script>