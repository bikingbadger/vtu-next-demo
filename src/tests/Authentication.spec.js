import actions from '../store/actions';

let url = '';
let body = {};
let mockError = false;

jest.mock('axios', () => ({
  post: (_url, _body) => {
    return new Promise((resolve) => {
      if (mockError) throw Error();

      url = _url;
      body = _body;
      resolve(true);
    });
  },
}));

describe('Authenticate', () => {
  it('should authenticate a user', async () => {
    const commit = jest.fn();
    const username = 'hilton';
    const password = '123456';

    await actions.authenticate({ commit }, { username, password });

    expect(url).toBe('/api/authenticate');
    expect(body).toEqual({ username, password });
    expect(commit).toHaveBeenCalledWith('authenticated', true);
  });

  it('should fail to authenticate user', async () => {
    mockError = true;
    await expect(
      actions.authenticate({ commit: jest.fn() }, {}),
    ).rejects.toThrow('API Error occurred.');
  });
});
