<script setup lang="ts">
console.log('start');
</script>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdButton',
});
</script>
<template>
  <button
    bg="red"
    rounded
    m-2>
    <slot></slot>
  </button>
</template>
