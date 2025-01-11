<template>
    <div class="users-page">
        <AppContainer>
            <div class="users-page__inner">
                <AppHeading>The Best Users</AppHeading>
                <div class="users-page__search">
                    <SearchInput />
                </div>
                <AppList :data="usersList">
                    <template #default="{ data }">
                        <UserFrame :data="data" />
                    </template>
                </AppList>
            </div>
        </AppContainer>
    </div>
</template>

<script setup>
import AppContainer from '@/shared/ui/Containers/AppContainer.vue'
import AppHeading from '@/shared/ui/Heading/AppHeading.vue'
import AppList from '@/shared/ui/List/AppList.vue'
import UserFrame from './ui/UserFrame.vue'
import SearchInput from './ui/SearchInput.vue'

import { onMounted, ref } from 'vue'
import { apiService } from '@/shared/services/api.js'
import { useRootStore } from '@/entities/root/model/rootStore.js'
import { useUsersStore } from '@/views/UsersPage/model/usersStore.js'
import { storeToRefs } from 'pinia'

const rootStore = useRootStore()
const usersStore = useUsersStore()
const { usersList } = storeToRefs(usersStore)

onMounted(async () => {
    rootStore.TOGGLE_LOADING_STATUS()

    const response = await apiService.getUsers()
    usersStore.SET_USERS_LIST(response)

    rootStore.TOGGLE_LOADING_STATUS()
})
</script>

<style lang="scss" scoped>
.users-page {
    &__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        @media (min-width: $desktop-breakpoint) {
            gap: 30px;
        }

        @media (min-width: $desktop-breakpoint) {
            gap: 40px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            gap: 48px;
        }
    }

    &__search {
        width: 100%;

        @media (min-width: $desktop-breakpoint) {
            width: 50%;
        }
    }
}
</style>
