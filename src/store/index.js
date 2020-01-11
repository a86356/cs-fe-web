import Vue from 'vue';
import Vuex from 'vuex';
import {setCacheData,getCacheData} from "../utils/cache";
import config from "../config/config";
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    islogin:false,
    username:''
  },
  getters:{
    getUsername(state){
      // 需要触发一次读的操作
      let username = state.username;
      let v=  getCacheData('username')

      if(v){
        return v;
      }
      if(state.username!=''){
        return  username
      }
      return  ''
    },
    islogin(state){


      let islogin =   state.islogin
      let v = getCacheData('islogin')
      if(v=='true'){
        return  true;
      }
      if(state.islogin==true){
        return  true;
      }

      return islogin


    }
  },
  mutations:{
    login(state,payload){

      setCacheData('islogin',true)
      setCacheData('username',payload.data.username)

      setCacheData(config.TOKEN_KEY,payload.auth_key);
      setCacheData(config.USERINFO,JSON.stringify(payload.data));


      Vue.set(state,'username',payload.data.username)
      Vue.set(state,'islogin',true)

    },
    logout(state){

      setCacheData('islogin',false)
      setCacheData('username','')


      localStorage.removeItem(config.TOKEN_KEY)
      localStorage.removeItem(config.USERINFO)


      Vue.set(state,'islogin',false)
      Vue.set(state,'username','')

    }
  },

});
