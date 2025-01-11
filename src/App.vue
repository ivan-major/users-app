<template>
  <router-view/>
  <AppPreloader v-if="isLoading" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { useRootStore } from '@/entities/root/model/rootStore.js'
import { storeToRefs } from 'pinia';

const AppPreloader = defineAsyncComponent(() => import('@/shared/ui/Loaders/AppPreloader.vue'))

const rootStore = useRootStore()
const { isLoading } = storeToRefs(rootStore)
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
</style>
