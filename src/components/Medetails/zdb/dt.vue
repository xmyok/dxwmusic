<template>
    <div class="content" :style="{height:Pheight+'px'}">
        <p>暂时还没有动态哦!</p>
    </div>
</template>
<style lang="scss" scoped>
    .content{
        display: flex;
        justify-content: center;
        color: rgb(150, 138, 138);
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