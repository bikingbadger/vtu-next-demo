import actions from '../store/actions';

describe('rootActions', () => {
  it('should call increment and commit mutation', () => {
    const commit = jest.fn();
    actions.increment({ commit });

    expect(commit).toHaveBeenCalledWith('increment');
  });
});
