<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from './components/Button/Botton.vue'
import { ButtonInstance } from './components/Button/types'


const buttonRef = ref<ButtonInstance | null>()

onMounted(() => {
  console.log(buttonRef.value?.ref)
})
</script>

<template>
  <div class="container">
    <Button type="primary" size="large" plain disabled ref="buttonRef">Test Button</Button>
    <Button type="success" size="large" plain>Test Button</Button>
    <Button type="danger" size="large">Test Button</Button>
    <Button type="warning" size="large">Test Button</Button>
    <Button type="info" size="large" plain>Test Button</Button>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
