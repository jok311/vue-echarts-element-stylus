const state = {
    ShowBottomWineId: "",
    ShowPriceWineId: "",
    loadingShow: false
};

const getters = {
    isShowBottom: state => state.ShowBottomWineId,
    isShowPrice: state => state.ShowPriceWineId,
    loadingShow: state => state.loadingShow
};

const mutations = {
    showBottom(state, wine_id) {
      state.ShowBottomWineId = wine_id;
    },
    showPrice(state, wine_id) {
      state.ShowPriceWineId = wine_id;
    },
    update_loading(state, data) {
      state.loadingShow = data;
    }
};

const actions = {
};

export default {
  state,
  getters,
  mutations,
  actions
};
