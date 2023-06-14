export const state = () => ({
  LoadedPosts: [],
});
export const mutations = {
  setposts(state, posts) {
    state.LoadedPosts = posts;
  },
};
export const actions = {
  setposts(context, posts) {
    debugger
    context.commit("setposts", posts);
  },
};
export const getters = {
  LoadedPosts(state) {
    return state.LoadedPosts;
  },
};
