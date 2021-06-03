import { mount } from '@vue/test-utils';
import Mock from '../components/Mock.vue';

describe('Mock', () => {
  it('renders successfully', () => {
    const wrapper = mount(Mock, {
        global: {
            mocks: {
                $t: (msg)=> msg
            }
        }
    });
  });
});
