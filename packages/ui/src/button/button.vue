<script setup lang="ts">
import AButton from 'ant-design-vue/es/button';
import 'ant-design-vue/es/button/style';
import type {
  ButtonType,
  ButtonHTMLType,
  ButtonShape,
} from 'ant-design-vue/es/button/buttonTypes';
import type { SizeType as ButtonSize } from 'ant-design-vue/es/config-provider';

const props = withDefaults(
  defineProps<{
    block?: boolean;
    danger?: boolean;
    disabled?: boolean;
    ghost?: boolean;
    href?: string;
    htmlType?: ButtonHTMLType;
    loading?: boolean | { delay?: number };
    shape?: ButtonShape;
    size?: ButtonSize;
    target?: string;
    type?: ButtonType;
  }>(),
  {
    block: false,
    danger: false,
    disabled: false,
    ghost: false,
    htmlType: 'button',
    loading: false,
    shape: 'default',
    size: 'middle',
    type: 'default',
  },
);

const emit = defineEmits<{
  (e: 'click', target: MouseEvent): boolean;
}>();
const onClick = (e: MouseEvent) => {
  emit('click', e);
};
</script>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdButton',
  inheritAttrs: false,
});
</script>
<template>
  <a-button
    v-bind="props"
    @click.stop="onClick">
    <slot></slot>
  </a-button>
</template>
