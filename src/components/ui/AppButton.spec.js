import { shallowMount } from '@vue/test-utils';
import AppButton from './AppButton.vue';

describe('AppButton.vue', () => {
  it('sets the text value of the button', () => {
    const msg = 'new message';
    const wrapper = shallowMount(AppButton, {
      slots: { default: msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it('is disabled', () => {
    const wrapper = shallowMount(AppButton, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.vm.disabled).toBe(true);
  });
});
