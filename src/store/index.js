import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      postIds: [],
      posts: {},
    };
  },
  actions: rootActions,
  mutations: rootMutations,
});

export default store;
