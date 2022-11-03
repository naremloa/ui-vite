import { AdButton } from '../';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('Button', () => {
  test('Mount', () => {
    const wrapper = mount(AdButton, {
      slots: { default: 'AdButton' },
    });
    expect(wrapper.get('span').text()).toBe('AdButton');
  });
});
