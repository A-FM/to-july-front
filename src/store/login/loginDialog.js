const state = {
    openLoginDialog: false
}
const getters = {
    isOpenLoginDialog: (state) => {
        return state.openLoginDialog
    }
}
const mutations = {
    setOpenLoginDialog(state, openLoginDialog) {
        state.openLoginDialog = openLoginDialog
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations
}
