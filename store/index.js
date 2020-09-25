export const state = () => ({
  num1: '1',
  num2: '1',
  resultMethod: '1',
});

export const mutations = {
  setNum1(state, payload) {
    state.num1 = payload;
  },
  setNum2(state, payload) {
    state.num2 = payload;
  },
};

export const actions = {
  setNum1({ commit, state }, payload) {
    commit('setNum1', payload);
  },
  setNum2({ commit, state }, payload) {
    commit('setNum2', payload);
  },
};

export const getters = {
  resultComputed(state) {
    return state.num1 * state.num2;
  },
};
