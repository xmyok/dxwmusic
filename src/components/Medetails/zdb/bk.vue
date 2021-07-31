<template>
    <div :style="{height:Pheight+'px'}" class="content">
        <div>
            <p class="p1">暂无声音</p>
            <p class="p2">开始录制你的第一条声音吧</p>
            <p><van-button round  hairline  type="danger">去录制</van-button></p>
        </div>
    </div>
</template>
<style lang='scss' scoped>
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            text-align: center;
        }
        button{
            padding: 15px  35px;
        }
        .p1{
            font-size: 18px;
            font-weight: bold;
            color: #333;
        }
        .p2{
            font-size: 14px;
            color: rgb(143, 136, 136);
        }
        
    }
</style>
<script>
export default {
     data(){
        return{
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