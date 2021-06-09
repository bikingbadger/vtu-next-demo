export default {
  increment(state) {
    state.count++;
  },
  addPost(state, payload) {
    console.log(payload);
    state.postIds.push(payload.post.id);
    state.posts = { ...state.posts, [payload.post.id]: payload.post };
  },
};
