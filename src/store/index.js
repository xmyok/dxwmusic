import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //登录状态
    isLogin:'false',
    userInfo:{},
    //屏幕尺寸
    Pwidth:'',
    Pheight:'',
    //是否正在播放歌曲列表
    isplayer:false,
    //歌曲列表是否正在播放中
    isbf:"false",
    //正在播放的歌曲进度
    jdvalue:0,
    //正在播放中的歌曲信息(url)
    playingurl:{},
    //正在播放中的歌曲信息2(没有url)
    playing:{},
     //歌单
    playlist:[],
    //mini播放器下方的歌曲列表底部弹窗是否开启
    bfllbtc:'',
  },
  mutations: {
    szkd(state,payload){
      state.Pwidth=payload.Pwidth
      state.Pheight=payload.Pheight
    },
    islogin(state,payload){
      state.isLogin=payload
    },
    userInfoadd(state,payload){
      state.userInfo=payload
    },
    changeisplayer(state,payload){
      state.isplayer=payload
    },
    changeplayingurl(state,payload){
      state.playingurl=payload
    },
    changeplaying(state,payload){
      state.playing=payload
    },
    changeisbf(state,payload){
      state.isbf=payload
    },
    changejdvalue(state,payload){
      state.jdvalue=payload
    },
    changeplaylist(state,payload){
      state.playlist=payload
    },
    changebfllbtc(state,payload){
      state.bfllbtc=payload
    }
  },
  actions: {
  },
  modules: {
  }
})
