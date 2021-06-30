import { createStore } from 'vuex';
import { mount } from '@vue/test-utils'
import VuexComponent from '../components/VuexComponent.vue';

const mutations = {
    setName: jest.fn()
}

const actions = {
    setName: jest.fn()
}

const store = createStore({
    state() {
        return {
            username: 'alice',
            firstName: 'Alice',
            lastName: 'Wonder'
        }
    },
    getters: {
        fullName: (state) => state.firstName + ' ' + state.lastName
    },
    actions,
    mutations
})

const factory = (props) => {
    return mount(VuexComponent, {
        global: {
            plugins: [store]
        }
    });
};



describe("VuexComponent", () => {
    it('renders a username using Vuex store', () => {
        const wrapper = factory();

        expect(wrapper.find('.username').text()).toBe('alice')
    })

    it('renders a full name using the getter', () => {
        const wrapper = factory();
        expect(wrapper.find('.fullName').text()).toBe('Alice Wonder')
    })

    // Test that the mutation is called correctly
    it('should call the mutation to change the name', async () => {
        const wrapper = factory();
        wrapper.find('.setName').trigger('click');
        await wrapper.vm.$nextTick();

        console.log(actions);

        expect(mutations.setName).toHaveBeenCalledWith(
            store.state,
            { name: 'Hilton Meyer' })
    })

    // Test that the action is called correctly
    it('should call the action')
})