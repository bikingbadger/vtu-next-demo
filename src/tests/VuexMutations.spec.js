import mutations from '../store/mutations';

describe('rootMutations', () => {
  it('should increment store by 1', () => {
    const state = {
      count: 0,
    };

    mutations.increment(state);

    expect(state.count).toEqual(1);
  });

  it('should update store with payload', () => {
    const state = {
      postIds: [],
      posts: {},
    };

    const post = {
      id: 1,
      title: 'Welcome to testing',
    };

    mutations.addPost(state, { post });

    expect(state).toEqual({
      postIds: [1],
      posts: { 1: post },
    });
  });
});
