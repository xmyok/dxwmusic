<template>
  <div :style="{ height: Pheight + 'px' }" class="wdxx-content">
    <div class="wdxx-top">
      <div class="wdtop-left">
        <van-icon @click="$router.push('/me')" size="25" name="arrow-left" />
        <span>消息</span>
      </div>
      <div class="wdtop-right">
        <span>标为已读</span>
        <van-icon size="25" name="search" />
      </div>
    </div>
    <div class="wdxx-center">
      <ul>
        <li @click="$router.push('/fsqk')">
          <i class="iconfont icon-fensi"></i>
          <span>粉丝</span>
        </li>
        <li>
          <i @click="$router.push('/pl')" class="iconfont icon-pinglun"></i>
          <span>评论</span>
        </li>
        <li>
          <i @click="$router.push('/at')" class="iconfont icon-aite"></i>
          <span>@我</span>
        </li>
        <li>
          <i @click="$router.push('/tz')" class="iconfont icon-tongzhi"></i>
          <span>通知</span>
        </li>
      </ul>
    </div>
    <xxlist :dhxxlistgf="dhxxlistgf"></xxlist>
  </div>
</template>
<style lang="scss" scoped>
.wdxx-content {
  background-color: #f2f2f2;
  .wdxx-top {
    padding: 10px;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .wdtop-left {
      display: flex;
      align-items: center;
      span {
        font-size: 20px;
        padding-left: 10px;
      }
    }
    .wdtop-right {
      display: flex;
      align-items: center;
      span {
        padding: 3px 8px;
        border: 1px solid rgb(146, 131, 131);
        border-radius: 45px;
        margin-right: 10px;
      }
    }
  }
  .wdxx-center {
    ul {
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        i {
          margin-top: 20px;
          font-size: 35px;
          color: rgb(196, 121, 121);
        }
        span {
          margin-top: 10px;
          font-size: 13px;
          color: #474545;
        }
      }
    }
  }
}
</style>
<script>
import xxlist from "../../components/Me/wdxx/Xxlist.vue";
export default {
  components: {
    xxlist,
  },
  data() {
    return {
      Pwidth: "",
      Pheight: "",
      dhxxlistgf: [
        {
          lb: "官方消息",
          jtlist: [
            {
              img: "icon-touxiang1",
              dhr: "云贝小助手",
              lasttime: "1627258190",
              lastnr: "大师傅打收到罚单防守打法阿萨德收到",
            },
          ],
        },
        {
          lb: "私信对话",
          jtlist: [
            {
              img: "icon-icon-test2",
              dhr: "曹可可",
              lasttime: "1626998990",
              lastnr: "等级为苹果评价文件夹核桃仁维护人儿童",
            },
            {
              img: "icon-icon-test2",
              dhr: "绳二娃",
              lasttime: "1625875790",
              lastnr: "速度和国家二级噢女我饿VN我饿虐了第六次绿能ddddddd",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    let Pwidth = document.documentElement.clientWidth;
    let Pheight = document.documentElement.clientHeight;
    this.Pwidth = Pwidth;
    this.Pheight = Pheight;
  },
};
</script>
