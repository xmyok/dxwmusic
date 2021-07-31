import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //屏幕尺寸
    Pwidth:'',
    Pheight:'',
     //歌单
    Bfqlist:[
      {gqid:'1',singer:'隔壁老樊',gqname:'多想在平庸的生活拥抱你',img:require('../../public/icons/bfq/bgpic/duoxiangzaipingyongdeshenghuoyongbaoni.jpg'),zuoci:'隔壁老樊',zuoqu:'隔壁老樊',yanchang:'隔壁老樊'},
      {gqid:'2',singer:'逃跑计划',gqname:'一万次悲伤',img:require('../../public/icons/bfq/bgpic/yiwancibeishang.jpg'),zuoci:'毛川、李赤',zuoqu:'Giles Tully、李赤',yanchang:'逃跑计划'},
      {gqid:'3',singer:'赵紫骅',gqname:'一滴泪的时间',img:require('../../public/icons/bfq/bgpic/yidileideshijian.jpg'),zuoci:'赵紫骅',zuoqu:'赵紫骅',yanchang:'赵紫骅'},
      {gqid:'4',singer:'邵帅',gqname:'你是人间四月天',img:require('../../public/icons/bfq/bgpic/nishirenjiansiyuetian.jpg'),zuoci:'邵帅',zuoqu:'邵帅',yanchang:'邵帅s'},
      {gqid:'5',singer:'GALA',gqname:'追梦赤子心',img:require('../../public/icons/bfq/bgpic/duoxiangzaipingyongdeshenghuoyongbaoni.jpg'),zuoci:'苏朵',zuoqu:'苏朵',yanchang:'GALA'},
      {gqid:'6',singer:'司南',gqname:'冬眠',img:require('../../public/icons/bfq/bgpic/dongmian.jpg'),zuoci:'桃玖',zuoqu:'CMJ',yanchang:'司南'},
      {gqid:'7',singer:'Jam',gqname:'七月七',img:require('../../public/icons/bfq/bgpic/qiyueqi.jpg'),zuoci:'未知',zuoqu:'未知',yanchang:'Jam'},
      {gqid:'8',singer:'焦迈奇',gqname:'我的名字',img:require('../../public/icons/bfq/bgpic/wodemingzi.jpg'),zuoci:'焦迈奇',zuoqu:'焦迈奇',yanchang:'焦迈奇'},
      {gqid:'10',singer:'林志炫',gqname:'凤凰花开的路口',img:require('../../public/icons/bfq/bgpic/fenghuanghuakaidelukou.jpg'),zuoci:'苏朵',zuoqu:'苏朵',yanchang:'林志炫'},
      {gqid:'11',singer:'鹿先森乐队',gqname:'春风十里',img:require('../../public/icons/bfq/bgpic/chunfengshili.jpg'),zuoci:'倍倍',zuoqu:'倍倍',yanchang:'鹿先森乐队'},
  ],
  },
 
  
  mutations: {
    szkd(state,payload){
      state.Pwidth=payload.Pwidth
      state.Pheight=payload.Pheight
    }
  },
  actions: {
  },
  modules: {
  }
})
