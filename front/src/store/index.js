import Vue from 'vue'
import Vuex from 'vuex'
import { getTest } from '@/api/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    axios_try : ''
  },
  mutations: {
    SET_AXIOS(state, response){
      if(response.res !== ''){
       state.axios_try = response.res;
      }
    }
  },
  actions: {
    async GET_AXIOS(context){
      //console.log('store');
      const response =  await getTest();
      context.commit('SET_AXIOS' , response.data[0]);
    }
  },
  modules: {
  }
})
