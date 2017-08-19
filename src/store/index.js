import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import action from './action'
import getter from './getter'

 export default new Vuex.Store{
    state,
    getter,
    mutations,
    actions
 }