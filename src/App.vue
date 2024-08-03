<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from './components/Button/Botton.vue'
import { ButtonInstance } from './components/Button/types'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'


const buttonRef = ref<ButtonInstance | null>()

onMounted(() => {
  console.log(buttonRef.value?.ref)
})

const openValue = ref(['a'])
</script>

<template>
  <main>
    <Button plain>Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large" loading>Large</Button>
    <Button size="small" icon="arrow-up">Small</Button><br /><br />

    <Collapse v-model="openValue" accordion>
      <Item name="a" title="Title A">
        <h1>headline title</h1>
        <div> this is content a aaa </div>
      </Item>
      <Item name="b" title="Title B">
        <div> this is bbbbb test </div>
      </Item>
      <Item name="c" title="Disabled Title" disabled>
        <div> this is cccc test </div>
      </Item>
    </Collapse>

    <Icon color="red" icon="fa-user-secret " spin type="primary"> </Icon>
  </main>
</template>

<style scoped></style>