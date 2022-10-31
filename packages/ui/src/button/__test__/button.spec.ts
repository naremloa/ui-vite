import Button from '../../button';
import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('Button', () => {
  test('Mount', () => {
    const wrapper = shallowMount(Button, {
      slots: { default: 'Button' },
    });

    expect(wrapper.text()).toBe('Button');
  });
});
