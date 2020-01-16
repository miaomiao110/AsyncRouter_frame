import {getRouter_local,setRoute_local} from '../../untils/router.js'

export default {
    namespaced:true,
    state:{
        currentRouter:getRouter_local()
    },
    getters:{

    },
    mutations:{
        refreshCurrentRouter(state,data){
            state.currentRouter = data
        }
    },
    actions:{
        setCurrentRouter({commit,dispatch},PATH){
            //放在本地
            setRoute_local(PATH)
            //放在状态机
            commit('refreshCurrentRouter',PATH)
        },
        // getCurrentRole({commit,dispatch}){
        //     return localStorage.getItem("role")
        // }
    }
}