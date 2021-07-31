<template>
    <div class="content">
        <div class="top">
            <span class="sp1"><van-icon name="replay" />推荐歌单</span>
            <span class="sp2"><van-icon name="service-o" />播放</span>
        </div>
        <div class="center" style="overflow:scroll">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .content{
        .top{
            margin: 10px 10px;
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            .sp1{
                font-size: 18px;
                font-weight:bold;
            }
            .sp2{
                padding: 2px;
                font-size: 12px;
                border: 1px solid #bfbfbf;
                border-radius: 5px;
            }
        }

    }
</style>
<script>
export default {
    data() {
        return{
            Pwidth:'',
            Pheight:'',
            tjpages:'',
            sjbflist:[
                {tjgdid:'1',title:'百万品论热歌全集|实时更新中',bfl:'14998278',dtjm:'false',imgs:require('../../../public/tjgds/109951163512819440.jpg')},
                {tjgdid:'2',title:'[洗澡时听的歌]|在浴室里听歌吹泡泡',bfl:'2398278',dtjm:'false',imgs:require('../../../public/tjgds/109951164726735349.jpg')},
                {tjgdid:'3',title:'[深度睡眠专用音乐]亲测有效 自我催眠',bfl:'12398278',dtjm:'false',imgs:require('../../../public/tjgds/109951164885844080.jpg')},
                {tjgdid:'4',title:'Vol.8-旅行中的奇遇人生',bfl:'14998278',dtjm:'false',imgs:require('../../../public/tjgds/109951165847031722.jpg')},
                {tjgdid:'5',title:'他只是很短暂的爱了我一下',bfl:'34598278',dtjm:'false',imgs:require('../../../public/tjgds/109951166035692241.jpg')},
                {tjgdid:'6',title:'来来女儿考710分,搞笑拒绝录取?是真的吗?',bfl:'64998278',dtjm:'true',imgs:require('../../../public/tjgds/109951166108937700.jpg')},
                {tjgdid:'7',title:'骚气满满 抱歉 我有点飘了',bfl:'24998278',dtjm:'false',imgs:require('../../../public/tjgds/109951166147367019.jpg')},
                {tjgdid:'8',title:'Summer Rain Sleep Relaxation Sounds',bfl:'74998278',dtjm:'true',imgs:require('../../../public/tjgds/109951166173754416.jpg')}
            ]
        }
    },
    filters: {
        jiawan: function (value) {
        if(value>9999){
           return value=parseInt(value/10000).toFixed(2)+'万'
        }else{
            return value
        }
    }
    },
    mounted(){
          let Pwidth=document.documentElement.clientWidth
          let Pheight=document.documentElement.clientHeight
          let tjpages=Math.ceil(this.tjgdlist/3)
           this.Pwidth=Pwidth
        this.Pheight=Pheight
        this.tjpages=tjpages
    }
}
</script>