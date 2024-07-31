<template>
  <button class="wx-button" :class="{
    [`wx-button--${type}`]: type,
    [`wx-button--${size}`]: size,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled,
  }" :disabled="disabled">

    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineOptions } from 'vue'

import type { ButtonProps } from './types.ts'

defineOptions({
  name: 'WxButton'
})

withDefaults(defineProps<ButtonProps>(), {
})

</script>

<style scoped></style>
