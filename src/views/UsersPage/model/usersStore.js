import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsersStore = defineStore('users-store', () => {
    const usersList = ref([])

    const SET_USERS_LIST = (payload) => usersList.value = payload

    return {
        usersList,

        SET_USERS_LIST,
    }
})