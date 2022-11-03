import { AdDivider } from '..';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('Divider', () => {
  test('Mount', () => {
    const wrapper = mount(AdDivider, {
      slots: { default: 'AdDivider' },
    });
    expect(wrapper.get('span').text()).toBe('AdDivider');
  });
});
