<template>
  <button class="wx-button" :class="{
    [`wx-button--${type}`]: type,
    [`wx-button--${size}`]: size,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled,
    'is-loading': loading,
  }" :disabled="disabled || loading" :type="nativeType" :autofocus="autofocus" ref="_ref">
    <Icon icon="spinner" spin v-if="loading"></Icon>
    <Icon :icon="icon" v-if="icon"></Icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon from '../Icon/Icon.vue'

import type { ButtonProps } from './types.ts'

defineOptions({
  name: 'WxButton'
})

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref // ref会自动解包
})

</script>

<style scoped></style>
