<template>
  <div>
    <h1>{{ users }}</h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { apiService } from '@/shared/services/api.js'
import { useRootStore } from '@/entities/root/model/rootStore.js'

const rootStore = useRootStore()
const users = ref([])


onMounted(async () => {
  rootStore.TOGGLE_LOADING_STATUS()

  const response = await apiService.getUsers()

  rootStore.TOGGLE_LOADING_STATUS()
})
</script>

<!-- <style lang="scss" scoped>

</style> -->
