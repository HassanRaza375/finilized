export const state = () => ({
  LoadedPosts: [],
  TODOS: [],
  gotdata: false,
  counter: 0,
});
export const mutations = {
  payload(state, load) {
    state[load.Name] = load.Value;
  },
  setposts(state, posts) {
    state.LoadedPosts = posts;
  },
  Increase(state, value) {
    if (value === "plus") {
      state.counter++;
    } else {
      state.counter--;
    }
  },
};
export const actions = {
  setposts(context, posts) {
    context.commit("setposts", posts);
  },
  setCounter(context, value) {
    context.commit("Increase", value);
  },
  payload(context, value) {
    context.commit("payload", value);
  },
};
export const getters = {
  LoadedPosts(state) {
    return state.LoadedPosts;
  },
  LoadedCounter(state) {
    return state.counter;
  },
  LoadtDos(state) {
    return state.TODOS;
  },
};
