import Emitter from '../components/Emitter.vue';
import { mount } from '@vue/test-utils';

describe('Emitter', () => {
  it('emits an event with two arguments', () => {
    const wrapper = mount(Emitter);

    wrapper.vm.emitEvent();

    expect(wrapper.emitted().myEvent[0].length).toBe(2);
  });

  it('first emit event is name', () => {
    const wrapper = mount(Emitter);

    wrapper.vm.emitEvent();

    expect(wrapper.emitted().myEvent[0][0]).toEqual('name');
  });

  it('second emit event is password', () => {
    const wrapper = mount(Emitter);

    wrapper.vm.emitEvent();

    expect(wrapper.emitted().myEvent[0][1]).toEqual('password');
  });
});
