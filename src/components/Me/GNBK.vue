<template>
    <div class="content">
        <ul class="GNBK">
            <li v-for="(item) in GnList" :key='item.Gnid'>
                <i class="iconfont" :class="[item.img]"></i>
                <span>{{item.gnmc}}</span>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    .content{
        padding: 10px;
        ul{
            background-color: #fff;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 10px 0;
            li{
                width: 25%;
                display: flex;
                flex-direction: column;
                padding: 10px 0;
                i{
                    font-size: 30px;
                    text-align: center;
                    color: rgb(219, 124, 124);
                }
                span{
                    font-size: 12px;
                    text-align: center;
                }
            }
        }
    }
</style>
<script>
export default {
    data(){
        return{
            GnList:[
                {Gnid:'1',gnmc:'本地/下载',img:'icon-xiazaibendi'},
                {Gnid:'2',gnmc:'云盘',img:'icon-yunpan'},
                {Gnid:'3',gnmc:'已购',img:'icon-yigou'},
                {Gnid:'4',gnmc:'最近播放',img:'icon-bofang'},
                {Gnid:'5',gnmc:'我的好友',img:'icon-wodehaoyou'},
                {Gnid:'6',gnmc:'收藏和赞',img:'icon-shoucang'},
                {Gnid:'7',gnmc:'我的博客',img:'icon-guangbo'},
                {Gnid:'8',gnmc:'音乐应用',img:'icon-gengduo'},
            ]
        }
    }
}
</script>