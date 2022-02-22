import Vue from 'vue'
import Vuex from 'vuex'
import { getTest, getLap, getCafe } from '@/api/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    axios_try : '',
    lap :{

    },
    products:[

    ]
  },
  mutations: {
    SET_AXIOS(state, response){
      if(response.res !== ''){
       state.axios_try = response.res;
      }
    },
    SET_OPENLAP(state, response){
      state.lap = response;
    },
    SET_CAFE24(state, response){
      state.products = response.products;
      console.log(response);
    }
  },
  actions: {
    async GET_AXIOS(context){
      //console.log('store');
      const response =  await getTest();
      context.commit('SET_AXIOS' , response.data[0]);
    },
    async GET_OPENLAP(context){
      console.log('store');
      const response = await getLap();
      console.log(response);
      context.commit('SET_OPENLAP' , response.data);
    },
    async GET_CAFE(context){
      const response =  await getCafe();
      console.log(response);
      context.commit('SET_CAFE24' , response.data);
    },
  },
  modules: {
  }
})
