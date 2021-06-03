import { mount } from '@vue/test-utils';
import MockGlobal from '../components/MockGlobal.vue';

describe('MockGlobal', () => {
  it('should use global mock and render', () => {
    const wrapper = mount(MockGlobal);

    console.log(wrapper.html());
  });
});
