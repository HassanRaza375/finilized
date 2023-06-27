export const state = () => ({
  LoadedPosts: [],
  counter: 0,
});
export const mutations = {
  setposts(state, posts) {
    state.LoadedPosts = posts;
  },
  Increase(state, value) {
    debugger
    if (value === "plus") {
      state.counter++;
    } else {
      state.counter--;
    }
  },
};
export const actions = {
  setposts(context, posts) {
    debugger;
    context.commit("setposts", posts);
  },
  setCounter(context, value) {
    context.commit("Increase", value);
    debugger;
  },
};
export const getters = {
  LoadedPosts(state) {
    return state.LoadedPosts;
  },
  LoadedCounter(state) {
    return state.counter;
  },
};
