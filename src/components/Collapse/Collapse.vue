<template>
    <div class="wx-collapse">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types';
import { collapseContextKey } from './types'


defineOptions({
    name: "WxCollapse"
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeNames = ref<NameType[]>(props.modelValue)

if (props.accordion && activeNames.value.length > 1) {
    console.warn("accordion mode should only hava one active item")
}

watch(() => props.modelValue, (newValue) => {
    activeNames.value = newValue
})

const handleItemClick = (item: NameType) => {
    if (props.accordion) {
        activeNames.value = activeNames.value[0] === item ? [] : [item]
    } else {
        const index = activeNames.value.indexOf(item)
        if (index > -1) {
            // 存在, 删除数组对应的一项
            activeNames.value.splice(index, 1)
        } else {
            // 不存在, 插入对应的name
            activeNames.value.push(item)
        }
    }
    console.log(activeNames.value);

    emits("update:modelValue", activeNames.value)
    emits("change", activeNames.value)
}

// 用provide传递到子组件
provide(collapseContextKey, {
    activeName: activeNames,
    handleItemClick
})
</script>

<style scoped></style>