<template>
    <div class="user-page">
        <AppContainer>
            <div class="user-page__inner">
                <AppHeading>
                    {{ userData?.name }}
                </AppHeading>
                <div class="user-page__container">
                    <div class="user-page__img">
                        <AppImage />
                    </div>
                    <div class="user-page__content">
                        <div class="user-page__contacts">
                            <div v-if="userData?.phone" class="user-page__block">
                                <div class="user-page__label">
                                    <div class="user-page__icon">
                                        <AppIcon icon-name="icon-phone"/>
                                    </div>
                                    Phone
                                </div>
                                <a :href="`tel:${userData?.phone}`" target="_blank">
                                    <AppButton color="primary" class="user-page__button">
                                        {{ userData?.phone }}
                                    </AppButton>
                                </a>
                            </div>
                            <div v-if="userData?.email" class="user-page__block">
                                <div class="user-page__label">
                                    <div class="user-page__icon">
                                        <AppIcon icon-name="icon-email"/>
                                    </div>
                                    Email
                                </div>
                                <a :href="`mailto:${userData?.email}`" target="_blank">
                                    <AppButton color="primary" class="user-page__button">
                                        {{ userData?.email }}
                                    </AppButton>
                                </a>
                            </div>
                        </div>
                        <div class="user-page__contacts">
                            <div v-if="userData?.username" class="user-page__block">
                                <div class="user-page__label">
                                    <div class="user-page__icon">
                                        <AppIcon icon-name="icon-user"/>
                                    </div>
                                    User Name
                                </div>
                                <div class="user-page__value">
                                    {{ userData?.username }}
                                </div>
                            </div>
                            <div v-if="userData?.website" class="user-page__block">
                                <div class="user-page__label">
                                    <div class="user-page__icon">
                                        <AppIcon icon-name="icon-web"/>
                                    </div>
                                    Website
                                </div>
                                <a :href="userData?.website" target="_blank">
                                    <AppButton color="primary" class="user-page__button">
                                        {{ userData?.website }}
                                    </AppButton>
                                </a>
                            </div>
                        </div>
                        <div v-if="userData?.company?.name" class="user-page__block user-page__block--contacts">
                            <div class="user-page__label">
                                Company
                            </div>
                            <div class="user-page__block-info user-page__block-info--company">
                                <div class="user-page__value">
                                    {{ userData?.company?.name }}
                                </div>
                                <div class="user-page__block-text">
                                    {{ userData?.company?.catchPhrase }}
                                </div>
                                <div class="user-page__block-text">
                                    {{ userData?.company?.bs }}
                                </div>
                            </div>
                        </div>
                        <div v-if="userData?.address?.city" class="user-page__block user-page__block--contacts">
                            <div class="user-page__label">
                                <div class="user-page__icon">
                                    <AppIcon icon-name="icon-route"/>
                                </div>
                                Address
                            </div>
                            <div class="user-page__block-info">
                                <div class="user-page__value">
                                    {{ address }}
                                </div>
                                <a :href="`https://www.google.com/maps?q=${userData?.address?.geo?.lat},${userData?.address?.geo?.lng}`" target="_blank">
                                    <AppButton color="primary" class="user-page__button">
                                        Location
                                    </AppButton>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppContainer>
    </div>
</template>

<script setup>
import AppContainer from '@/shared/ui/Containers/AppContainer.vue'
import AppHeading from '@/shared/ui/Heading/AppHeading.vue'
import AppImage from '@/shared/ui/Images/AppImage.vue'
import AppButton from '@/shared/ui/Buttons/AppButton.vue'
import AppIcon from '@/shared/ui/Images/AppIcon.vue'

import { onMounted, computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { apiService } from '@/shared/services/api.js'
import { useRootStore } from '@/entities/root/model/rootStore.js'
import { useUserStore } from '@/views/UserCardPage/model/userStore.js'
import { storeToRefs } from 'pinia'

const rootStore = useRootStore()
const userStore = useUserStore()
const { userData } = storeToRefs(userStore)

const route = useRoute()
const router = useRouter()

const address = computed(() => {
    return `${userData.value?.address?.zipcode}, c. ${userData.value?.address?.city}, str. ${userData.value?.address?.street}, ${userData.value?.address?.suite}`
})

onMounted(async () => {
    rootStore.TOGGLE_LOADING_STATUS()
    try {
        const response = await apiService.getUserId(route.params.id)
        userStore.SET_USER_DATA(response)
    } catch (error) {
        router.push('/error')
    }
    // const response = await apiService.getUserId(route.params.id)
    // userStore.SET_USER_DATA(response)

    rootStore.TOGGLE_LOADING_STATUS()
    console.log(userData.value)
})
</script>

<style lang="scss" scoped>
.user-page {
    &__inner {
        display: flex;
        flex-direction: column;
        gap: 20px;

        @media (min-width: $tablet-breakpoint) {
            gap: 30px;
        }

        @media (min-width: $desktop-breakpoint) {
            gap: 40px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            gap: 48px;
        }
    }

    &__img {
        width: 100%;
        height: 300px;
        border-radius: 10px;

        @media (min-width: $tablet-breakpoint) {
            height: 400px;
        }

        @media (min-width: $desktop-breakpoint) {
            width: 100%;
            height: 600px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            height: 900px;
        }
    }

    &__container {
        display: flex;
        flex-direction: column;
        gap: 40px;

        @media (min-width: $desktop-breakpoint) {
            flex-direction: row;
            gap: 40px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            gap: 48px;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 40px;

        @media (min-width: $desktop-breakpoint) {
            width: 100%;
        }

        // @media (min-width: $desktop-breakpoint) {
        //     gap: 40px;
        // }

        @media (min-width: $lg-desktop-breakpoint) {
            gap: 48px;
        }
    }

    &__contacts {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        border: 1px solid $primary-500;
        border-radius: 10px;

        @media (min-width: $tablet-breakpoint) {
            flex-direction: row;
            gap: 30px;
        }

        @media (min-width: $desktop-breakpoint) {
            gap: 40px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            gap: 48px;
            padding: 48px;
            border-radius: 20px;
        }
    }

    &__block {
        display: flex;
        flex-direction: column;
        gap: 10px;

        @media (min-width: $tablet-breakpoint) {
            width: 100%;
            gap: 20px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            gap: 30px;
        }

        &--contacts {
            padding: 20px;
            border: 1px solid $primary-500;
            border-radius: 10px;

            @media (min-width: $lg-desktop-breakpoint) {
                padding: 48px;
                border-radius: 20px;
            }
        }
    }

    &__block-info {
        display: flex;
        flex-direction: column;
        gap: 10px;

        @media (min-width: $tablet-breakpoint) {
            gap: 20px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            gap: 30px;
        }

        &--company {
            gap: 10px;
        }
    }

    &__label {
        font-size: 18px;
        font-weight: 700;
        color: $black-400;
        display: flex;
        align-items: center;
        gap: 10px;

        @media (min-width: $tablet-breakpoint) {
            font-size: 20px;
        }

        @media (min-width: $desktop-breakpoint) {
            font-size: 24px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            font-size: 32px;
        }
    }

    &__icon {
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        stroke: $black-500;
        fill: $black-500;

        @media (min-width: $desktop-breakpoint) {
            width: 24px;
            height: 24px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            width: 32px;
            height: 32px;
        }
    }

    &__button {
        width: 100%;
        height: 40px;
        font-size: 20px;

        @media (min-width: $tablet-breakpoint) {
            height: 48px;
            font-size: 24px;
        }

        @media (min-width: $desktop-breakpoint) {
            height: 56px;
            font-size: 32px;
        }
    }

    &__value {
        font-size: 28px;
        font-weight: 700;
        line-height: 140%;
        color: $primary-500;

        @media (min-width: $tablet-breakpoint) {
            font-size: 32px;
        }

        @media (min-width: $desktop-breakpoint) {
            font-size: 40px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            font-size: 48px;
        }
    }

    &__block-text {
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
        color: $black-400;

        @media (min-width: $tablet-breakpoint) {
            font-size: 18px;
        }

        @media (min-width: $desktop-breakpoint) {
            font-size: 20px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            font-size: 24px;
        }
    }
}
</style>