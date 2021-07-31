<template>
    <div :style="{width:Pwidth+'px',height:Pheight+'px'}" class="Player-content">
        <div class="player-top">
            <div class="top-left">
                <van-icon size='30' color='#fff' name="arrow-down" />
            </div>
            <div  class="top-center">
                <span>{{Bfqlist[0].gqname}}</span>
                <span>{{Bfqlist[0].singer}}></span>
            </div>
            <div class="top-right">
                <i class="iconfont icon-fenxiang"></i>
            </div>
        </div>
         <transition name="fade">
        <div @click="xsgc" v-show="gcxs=='buxianshi'"  class="player-center">
            <div>
                <img :class="[needleani]" class="needle" src="../../public/icons/bfq/needle.png" alt="">
            </div>
            <div class="disback">
                <div>
                 <img :class="[discani]" class="disc" src="../../public/icons/bfq/disc.png" alt="">
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            </div>
        </div>
         </transition>
         <transition name="fade">
        <div @click="xskj" v-show="gcxs=='xianshi'" class="player-center-2">
            <div class="gcbf">
                <p>歌名:{{Bfqlist[0].gqname}}</p>
                <p>作词:{{Bfqlist[0].zuoci}}</p>
                <p>作曲:{{Bfqlist[0].zuoqu}}</p>
                <p>演唱:{{Bfqlist[0].yanchang}}</p>
                <ul>
                    <li>11111111111</li>
                    <li>11111111111</li>
                    <li>11111111111</li>
                    <li>11111111111</li>
                    <li>11111111111</li>
                    <li>11111111111</li>
                    <li>11111111111</li>
                </ul>
            </div>
        </div>
        </transition>
        <div class="playler-controls">
            <div class="control-top">
                <i class="iconfont icon-shoucang1"></i>
                <i class="iconfont icon-icon--"></i>
                <i class="iconfont icon-yichang"></i>
                <i class="iconfont icon-jianyi"></i>
                <i class="iconfont icon-gengduo2"></i>
            </div>
            <div class="control-center">
               <span>{{currentTime | sfm}}</span>
               <van-slider @change="jindu"  v-model="value" active-color="rgb(204, 179, 179)">
                <template #button>
                    <div class="custom-button"></div>
                </template>
                </van-slider>
               <span>{{duration | sfm}}</span>
            </div>
            <div class="control-bottom">
                <i class="iconfont icon-xunhuan"></i>
                <i class="iconfont icon-icon-1"></i>
                <i @click="play" v-if='isbf' class="iconfont icon-bofang2 bf"></i>
                <i @click="pause" v-else class="iconfont icon-zanting zt"></i>
                <i class="iconfont icon-icon-"></i>
                <i class="iconfont icon-liebiao"></i>
            </div>
             <div>
                <audio v-show="false" id='audio' controls src="../../public/music/dxzpfdshybn.mp3"></audio>
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
    @keyframes turn{
      0%{-webkit-transform:rotate(0deg);}
      25%{-webkit-transform:rotate(90deg);}
      50%{-webkit-transform:rotate(180deg);}
      75%{-webkit-transform:rotate(270deg);}
      100%{-webkit-transform:rotate(360deg);}
    }
    .Player-content{
        background-color: #4e4445;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .player-top{
            padding: 20px 12px;
            padding-bottom: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .top-center{
                display: flex;
                flex-direction: column;
                align-items: center;
                :first-child{
                    font-size: 18px;
                    color: #fff;
                    font-family:"Roman"
                }
                :last-child{
                    font-size: 14px;
                    color: rgb(201, 196, 196);
                }
            }
            .top-right{
                i{
                    font-size: 25px;
                    color:#fff;
                }
            }
        }
        .player-center{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            :first-child{
                z-index: 1000;
            }
            :last-child{
                z-index: 999;
            }
            .disback{
                background: url('../../public/mrtj/gqlist/duoxiangzaipingyongdeshenghuoyongbaoni.jpg') no-repeat center  ;
            }
            div{
                text-align: center;
                .needle{
                    width: 50%;
                    margin-left: 45%;
                    transition: all 1s;
                    transform-origin: 0px 0px;
                }
                .needle-animal-l{
                    transform: rotate(25deg);
                }
                .needle-animal-r{
                    transform: rotate(0deg)
                }
                .disc{
                    margin-top: -20px;
                    width: 80%;
                    
                }
                .disc-animal{
                    animation: turn 2s linear infinite;
                }
            }
        }
        .playler-controls{
            display: flex;
            flex-direction: column;
            .control-top{
                padding: 15px 20px;
                display: flex;
                padding-bottom: 5px;
                justify-content: space-around;
                i{
                    font-size: 30px;
                    color: rgb(204, 179, 179);
                }
            }
            .control-center{
               padding:0px 25px;
               display: flex;
               align-items: center;
               span{
                   margin: 0 8px;
                   color: #fff;
                   font-size: 8px;
               }
            }
            .control-bottom{
                padding: 5px 20px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                 i{
                    font-size: 30px;
                    color: rgb(204, 179, 179);
                }
                .bf,.zt{
                    font-size: 45px;
                }
            }
        }
        .player-center-2{
            padding: 20px 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .gcbf{
                p{
                    text-align: center;
                }
                ul{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                color: white;
            }
        }
         .custom-button {
            width: 8px;
            height: 8px;
            background-color: #c0a1a6;
            border-radius: 90%;
  }
        .fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
    }
</style>
<script>
export default {
    data(){
        return{
            Pwidth:'',
            Pheight:'',
            Bfqlist:[
                {gqid:'1',singer:'隔壁老樊',gqname:'多想在平庸的生活拥抱你',img:require('../../public/icons/bfq/bgpic/duoxiangzaipingyongdeshenghuoyongbaoni.jpg'),zuoci:'隔壁老樊',zuoqu:'隔壁老樊',yanchang:'隔壁老樊',gc:[
                    {},
                ]},
                {gqid:'1',gqname:'多想在平庸的生活拥抱你',img:require('../../public/icons/bfq/bgpic/duoxiangzaipingyongdeshenghuoyongbaoni.jpg')}
            ],
            value:0,
            isbf:true,
            currentTime:0,
            duration:0,
            needleani:'',
            discani:'',
            discback:'../../public/mrtj/gqlist/duoxiangzaipingyongdeshenghuoyongbaoni.jpg',
            //显示歌词?
            gcxs:'xianshi'
        }
    },
    filters:{
        sfm: function (value) {
            if (!value) return ''
            let fen='';
            let miao='';
            fen=Math.floor(value/60)>9 ? Math.floor(value/60):'0'+ Math.floor(value/60)
            miao=Math.floor(value%60)>9 ? Math.floor(value%60):'0'+ Math.floor(value%60)
            return fen+ ':' +miao
        }
    },
    methods:{
        play(){
             let audioEle=document.getElementById('audio')
             audioEle.play()
             let part1=this.duration/100*1000
             this.needleani='needle-animal-l'
             this.discani='disc-animal'
             this.isbf=false
             let time1=setInterval(() => {
                 this.currentTime=audioEle.currentTime
                 if(this.currentTime==this.duration || this.isbf==true){
                     clearInterval(time1)
                 }
             }, 1000);
             let time2=setInterval(() => {
                 console.log(this.value)
                console.log(part1)
                this.value+=1 
                if(this.currentTime>=this.duration || this.isbf==true){
                     clearInterval(time2)
                 } 
             }, part1); 
             audioEle.onended = ()=>{
                  this.needleani='needle-animal-r'
                  this.discani=''
                  this.isbf=true
                  this.value=0
              };
        },
        pause(){
            let audioEle=document.getElementById('audio')
            audioEle.pause()
            this.needleani='needle-animal-r'
            this.discani=''
            this.isbf=true
            
        },
        jindu(){
            let audioEle=document.getElementById('audio')
            audioEle.currentTime= this.duration*(this.value/100)
            this.currentTime=audioEle.currentTime
        },
        xsgc(){
            this.gcxs='xianshi'
        },
        xskj(){
            this.gcxs='buxianshi'
         }
    },
    mounted(){
        let Pwidth=document.documentElement.clientWidth
        let Pheight=document.documentElement.clientHeight
        this.Pwidth=Pwidth
        this.Pheight=Pheight
        //获取当前音频总时长
        let audioEle=document.getElementById('audio')
        audioEle.onloadeddata = ()=>{ 
        this.duration=audioEle.duration };
    }
}
</script>