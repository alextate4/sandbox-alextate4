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

export const getters = {
  resultComputed(state) {
    return state.num1 * state.num2;
  },
};
