<template>
    <div class="wx-collapse-item" :class="{
        'is-disabled': disabled
    }">

        <div class="wx-collapse-item__header" :id="`item-header-${name}`">
            <slot name="title">
                {{ title }}
            </slot>
        </div>
        <div class=" wx-collapse-item__content" :id="`item-content-${name}`">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CollapseItemProps } from './types'

defineOptions({
    name: "WxCollapseItem"
})

defineProps<CollapseItemProps>()

</script>

<style scoped></style>