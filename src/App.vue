<script setup lang="ts">
import Button from './components/Button/Botton.vue'
</script>

<template>
  <div class="container">
    <Button type="primary" size="large" plain disabled>Test Button</Button>
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
