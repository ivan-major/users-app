import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user-store', () => {
    const userData = ref([])

    const SET_USER_DATA = (payload) => userData.value = payload

    return {
        userData,

        SET_USER_DATA,
    }
})