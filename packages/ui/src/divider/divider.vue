<script setup lang="ts">
import ADivider from 'ant-design-vue/es/divider';
import 'ant-design-vue/es/divider/style';

const props = withDefaults(
  defineProps<{
    class?: string;
    dashed?: boolean;
    orientation?: 'left' | 'right' | 'center';
    orientationMargin?: string | number;
    plain?: boolean;
    type?: 'horizontal' | 'vertical';
  }>(),
  {
    dashed: false,
    orientation: 'center',
    plain: true,
    type: 'horizontal',
  },
);
</script>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdDivider',
  inheritAttrs: false,
});
</script>
<template>
  <a-divider v-bind="props">
    <slot></slot>
  </a-divider>
</template>
