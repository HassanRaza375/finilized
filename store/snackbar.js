export const state = () => ({
  snackbars: [],
});
export const mutations = {
  SetSnackbar(state, payload) {
    state[payload.type] = state.snackbars.concat(payload);
  },
  HidePayload(state, payload) {
    state.snackbars[payload || 0] = state.snackbars[payload || 0].pop();
    debugger;
  },
};
export const actions = {
  CallSnackbar(context, payload) {
    payload.Showing = true;
    context.commit("SetSnackbar", payload);
    setTimeout(() => {
      context.commit("HidePayload");
    }, 3000);
  },
};
