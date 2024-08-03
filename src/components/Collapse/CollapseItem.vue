<template>
    <div class="wx-collapse-item" :class="{
        'is-disabled': disabled
    }">

        <div class="wx-collapse-item__header" :class="{
            'is-active': isActive,
            'is-disabled': disabled
        }" :id="`item-header-${name}`" @click="handleClick">
            <slot name="title">
                {{ title }}
            </slot>
            <Icon icon="angle-right" class="header-angle"></Icon>
        </div>
        <Transition name="slide" v-on="transitionEvents">
            <div v-show="isActive" class="wx-collapse-item__wrapper">
                <div class="wx-collapse-item__content" :id="`item-content-${name}`">
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import type { CollapseItemProps } from './types'
import { collapseContextKey } from './types.ts'
import Icon from '../Icon/Icon.vue'

defineOptions({
    name: "WxCollapseItem"
})

const props = defineProps<CollapseItemProps>()

const collapseContext = inject(collapseContextKey)
const isActive = computed(() => collapseContext?.activeName.value.includes(props.name))

const handleClick = () => {
    if (props.disabled) return
    collapseContext?.handleItemClick(props.name)
}

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
    beforeEnter(el: HTMLElement) {
        el.style.height = '0'
        el.style.overflow = 'hidden' // 不加子元素的内容会直接出来,父元素有动画会慢慢显示
    },
    enter(el: HTMLElement) {
        el.style.height = el.scrollHeight + 'px'
    },
    afterEnter(el: HTMLElement) {
        el.style.height = ''
        el.style.overflow = ''
    },
    beforeLeave(el) {
        el.style.height = `${el.scrollHeight}px`
        el.style.overflow = 'hidden'
    },
    leave(el) {
        el.style.height = '0px'
    },
    afterLeave(el) {
        el.style.height = ''
        el.style.overflow = ''
    }
}

</script>

<style scoped></style>