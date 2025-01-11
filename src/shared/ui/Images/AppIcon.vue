<template>
    <component
        v-bind="$attrs"
        :is="defineAsyncComponent(() => import(`@/shared/assets/icons/${ iconName }.svg`))"
    />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
defineProps({
    iconName: {
        type: String,
        required: true
    }
})
</script>