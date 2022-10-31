import { AdButton } from '../../button';
import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('Button', () => {
  test('Mount', () => {
    const wrapper = shallowMount(AdButton, {
      slots: { default: 'AdButton' },
    });

    console.log('wrapper', wrapper.text());
    expect(wrapper.text()).toBe('Ad');
  });
});
