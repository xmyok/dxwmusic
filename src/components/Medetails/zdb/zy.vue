<template>
    <div class="zy-content">
        <div class="top">
            <ul>
                <li>
                    <div>
                        <p>唱片收藏架</p>
                        <p>表达音乐品味</p>
                    </div>
                    <span>布置唱片架></span>
                </li>
                <li>
                    <div>
                        <p>展示动态图片</p>
                        <p>让别人了解你</p>
                    </div>
                    <span>使用相册></span>
                </li>
                <li>
                    <div>
                        <p>大声说出你的愿望</p>    
                    </div>
                    <span>写愿望清单></span>
                </li>
            </ul>
        </div>
        <div class="center">
            <p>基本信息</p>
            <p>村龄:265天(2020年10月注册)</p>
            <p>地区:四川 成都</p>
        </div>
        <div class="bottom">
            <p>音乐品味</p>
            <div>
                <div class="tgph">
                    <van-icon size='35' name="bar-chart-o" />
                    <div>
                        <p class="p1">听歌排行</p>
                        <p class="p2">累计听歌15首</p>
                    </div>
                </div>
                <div class="wxhd">
                    <van-icon size='35' name="like-o" />
                    <div>
                        <p class="p1">我喜欢的音乐</p>
                        <p class="p2">0首,播放0次</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
    .zy-content{
        .top{
            ul{
                display: flex;
                justify-content: space-between;
                li{
                    width: 30%;
                    background-color: #fff;
                    margin: 1%;
                    border-radius: 16px;
                    div{
                        padding: 10px;
                        margin-bottom: 50px;
                        p{
                            font-size: 12px ;
                            margin: 0;
                            color: rgb(141, 131, 131);
                        }
                    }
                    span{
                            font-size: 12px;
                            padding-left: 10px;
                            color: red;
                        }
                }
            }
        }
        .center{
            margin-top: 20px;
            padding: 10px;
            background: #fff;
            border-radius: 16px;
            :first-child{
                margin-top: 0;
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            p{
                color: rgb(151, 132, 132);
            }
        }
        .bottom{
             margin-top: 20px;
            padding: 10px;
            background: #fff;
            border-radius: 16px;
            >p{
                margin-top: 0;
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            div{
                .tgph,.wxhd{
                    display: flex;
                    align-items: center;
                    margin-top: 10px;
                    p{
                        margin: 0;
                        padding-left: 10px;
                    }
                }
                .p1{
                    font-size: 14px;
                    font-weight: bold;
                }
                .p2{
                    font-size: 12px;
                    color: rgb(139, 132, 132);
                }
            }
        }
    }
</style>
<script>
export default {
    data() {
        return{

        }
    },
}
</script>