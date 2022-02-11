export const state = () => ({
  layerUrl: null
})

export const mutations = {
  setlayerUrl(state, layerUrl) {
    state.layerUrl = layerUrl
  }
}

export const getters = {
  getlayerUrl(state) {
    return state.layerUrl
  }
}