import axios from 'axios';

export default {
  async increment({ commit }) {
    commit('increment');
  },
  async authenticate({ commit }, user) {
    try {
      const authenticated = await axios.post('/api/authenticate', user);
      commit('authenticated', authenticated);
    } catch (e) {
      throw Error('API Error occurred.');
    }
  },
};
