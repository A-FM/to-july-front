const state = {
    themeDark: true
}
const getters = {
    isThemeDark:(state)=>{
        return state.themeDark
    }
}
const mutations = {
    setThemeDark(state,isDark){
        state.themeDark = isDark
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations
}
