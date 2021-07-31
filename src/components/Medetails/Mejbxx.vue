<template>
    <div class="content">
        <div class="tx">
            <i class="iconfont icon-touxiang"></i>
        </div>
        <div :style="{width:Pwidth*0.7+'px'}" class="info-fs">
            <div class="info-fs-details">
                <div>
                    <span>1</span>
                    <span>粉丝</span>
                </div>
                <div>
                    <span>2</span>
                    <span>关注</span>
                </div>
                <div>
                    <span>3</span>
                    <span>等级</span>
                </div>
            </div>
            <div class="info-bottom">
                <span>编辑信息</span>
            </div>
        </div>
        
    </div>
</template>
<style lang='scss' scoped>
    .content{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        .tx{
            i{
                color: rgb(133, 130, 124);
                background-color: white;
                font-size: 80px;
                font-weight: 100;
            }
        }
        .info-fs{
            display: flex;
            flex-direction: column;
            .info-fs-details{
                display: flex;
                div{
                    :first-child{
                        font-size: 14px;
                    }
                    :last-child{
                        font-size: 13px;
                        color: rgb(143, 140, 140);
                    }
                    width: 33%;
                    padding: 20px;
                    border-right: 1px solid rgb(190, 187, 187);
                    padding:0 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
            .info-bottom{
                display: flex;  
                justify-content: center;
                span{
                    margin-top: 20px;
                    width: 80%;
                    padding: 5px;
                    font-size: 16px;
                    text-align: center;
                    border: 1px solid rgb(180, 175, 175);
                    border-radius: 12px;
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
            Pheight:''
        }
    },
    methods:{

    },
    mounted(){
        let Pwidth=document.documentElement.clientWidth
        let Pheight=document.documentElement.clientHeight
        this.Pwidth=Pwidth
        this.Pheight=Pheight
    }
}
</script>