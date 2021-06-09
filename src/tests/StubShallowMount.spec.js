import { shallowMount } from '@vue/test-utils';
import ParentWithAPICall from '../components/ParentWithAPICall.vue';
import AsyncComponent from '../components/AsyncComponent.vue';

describe('ParentWithAPICall', () => {
  it('renders with mount and does initialize API Call', () => {
    const wrapper = shallowMount(ParentWithAPICall);
    console.log(wrapper.html());

    expect(wrapper.findComponent(AsyncComponent).exists()).toBe(true);
  });
});
