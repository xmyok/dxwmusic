<template>
    <div class="content">
        <div class="top">
            <div class="left-top">
                <van-icon size='35' name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
                <span>{{uname}}></span>
            </div>
            <div>
                <van-icon size='30' color='black' name="scan" />
            </div>
        </div>
        <div class="center">
            <div class="hy">
                <div class="hy-top">
                    <div>
                        <span class="sp1">开通黑胶VIP</span>
                        <span class="sp2">立享超17项专属特权</span>
                    </div>
                    <span class="sp3">会员中心</span>
                </div>
                <div class="hy-bottom">
                    <span>受邀专项,黑胶首月仅0.88元!</span>
                    <img src="" alt="">
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="b1">
                <van-cell to="wdxx" icon="envelop-o" title="我的消息" is-link />
                <van-cell icon="medal-o" title="云贝中心" is-link  />
                <van-cell icon="award-o" title="创作者中心" is-link />
            </div>
             <div class="b1">
                <van-cell class="b-title" value="音乐服务"  />
                <van-cell icon="idcard" title="云村有票" is-link  />
                <van-cell icon="cart-o" title="商城" is-link />
                <van-cell icon="desktop-o" title="游戏专区" is-link />
                <van-cell icon="phone-o" title="口袋彩铃" is-link />
            </div>
             <div class="b1">
                <van-cell center class="b2-title" value="退出登录/关闭"  />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .content{
        .top{
            margin: 0 10px;
            padding-top: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left-top{
                display: flex;
                align-items: center;
                span{
                    color:black;
                    padding-left: 10px;
                }
            }
        }
        .center{
            width: 90%;
            margin: 10px auto;
            background-image:linear-gradient(to right, #6e6565, #9c9da059);;
            border-radius: 18px;
            padding: 20px;
            color: white;
            box-sizing: border-box;
            .hy .hy-top{
                width: 100%;
                display: flex;
                font-weight: 100;
                padding-bottom: 10px;
                border-bottom: 1px solid white;
                justify-content: space-between;
                align-items: flex-start;
                div{
                    display: flex;
                    flex-direction:column;
                    .sp1{
                        font-size: 18px;
                        padding: 2px 0;
                    }
                    .sp2{
                        font-size: 12px;
                        font-weight: 100;
                    }
                }
                .sp3{
                    font-size: 13px;
                    border-radius: 10px;
                    padding: 2px 2px;
                    border: 1px solid white;
                }
            }
            .hy .hy-bottom{
                padding-top: 10px;
                span{
                    font-size: 13px;
                    font-weight: 100;
                    color: lightgray;
                }
            }
        }
        .bottom{
            .b1{
                .b-title{
                    font-size: 14px;
                    span{
                        color: rgb(165, 156, 156) ;
                        }
                    }
                .b2-title{
                    font-size: 16px;
                    div{
                        display: flex;
                        justify-content: center;
                    }
                    span{
                        color: red ;
                    }
                    }    
                
                padding: 10px;
                :first-child{
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
                :last-child{
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                }
            }
        }
    }
</style>
<script>
export default {
    data(){
        return{
            uname:'LYCOK'
        }
    }
}
</script>