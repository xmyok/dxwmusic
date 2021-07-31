<template>
    <div class="content">
        <div class="top">
          <van-tabs v-model="active">
            <van-tab title="创建歌单">
                <div class="cjgd">
                    <div class="cjgd-top">
                        <span>创建歌单</span>
                        <div>
                            <van-icon name="plus" />
                            <van-icon name="ellipsis" />
                        </div>
                    </div>
                    <div class="cjgd-center">
                        <i  class="daoru iconfont icon-daoru"></i>
                        <span>一键导入外部音乐</span>
                    </div>
                </div>
                <div class="cjgd scgd">
                    <div class="cjgd-top  scgd-top">
                        <span>收藏歌单</span>
                        <div>
                            <van-icon name="ellipsis" />
                        </div>
                    </div>
                    <div class="cjgd-center scgd-center">
                        <p>暂无收藏的歌单</p>
                    </div>
                </div>
            </van-tab>
            <van-tab title="收藏歌单">
                <div>
                   <div class="cjgd scgd">
                        <div class="cjgd-top  scgd-top">
                            <span>收藏歌单</span>
                            <div>
                                <van-icon name="ellipsis" />
                            </div>
                        </div>
                        <div class="cjgd-center scgd-center">
                            <p>暂无收藏的歌单</p>
                        </div>
                    </div>
                </div>
            </van-tab>
          </van-tabs>
        </div>
    </div>
</template>
<style lang='scss' scoped>
    .content{
        padding:10px;
    }
    .cjgd{
        margin-top: 20px;
        background-color: #fff;
        padding: 10px;
        .cjgd-top{
            span{
                font-size: 14px;
                color:#c5c5c5
            }
            display: flex;
            justify-content: space-between;
            div{
                i{
                    padding: 0 5px;
                }
            }
        }
        .scgd-center{
            p{
                width: 100%;
                text-align: center;
                margin: 5px 0;
                font-size: 12px;
                color: #635e5e;
            }
        }
        .cjgd-center{
            display: flex;
            align-items: center;
            padding:10px 0;
            .daoru{
            padding: 0 10px;
            font-size: 30px;
            }
            span{
                font-size: 14px;
            }
        }
    }
</style>
<script>
export default {
    data(){
        return{
             active: 0
        }
    }
}
</script>