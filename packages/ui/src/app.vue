<script setup lang="ts">
import { AdButton } from './button';
import { AdDivider } from './divider';
const login = (e: MouseEvent) => {
  console.log('e', e);
};
</script>
<template>
  <AdButton
    :type="'primary'"
    :size="'middle'"
    @click="login">
    按鈕
  </AdButton>
  <AdDivider>haha</AdDivider>
</template>
