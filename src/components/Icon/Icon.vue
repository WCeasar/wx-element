<template>
    <i v-bind="$attrs" class="wx-icon" :class="{ [`wx-icon--${type}`]: type }" :style="customStypes">
        <font-awesome-icon v-bind="filterProps">
        </font-awesome-icon>
    </i>
</template>

<script setup lang="ts">
import { omit } from 'lodash-es';
import { computed, } from 'vue';


import { IconProps } from './types'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineOptions({
    name: "WxIcon",
    inheritAttrs: false // 在使用静止透传属性时,需要将$attrs放在根节点
})

const props = defineProps<IconProps>()

const filterProps = computed(() => omit(props, ['type', 'color']))


const customStypes = computed(() => {
    return props.color ? { color: props.color } : {}
})

</script>

<style scoped></style>