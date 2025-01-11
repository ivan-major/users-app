<template>
    <div class="user-frame">
        <div class="user-frame__info">
            <div v-if="data?.username" class="user-frame__info-block">
                <div class="user-frame__icon">
                    <AppIcon icon-name="icon-user" />
                </div>
                <div class="user-frame__username">
                    {{ data.username }}
                </div>
            </div>
        </div>
        <div class="user-frame__heading">
            <router-link :to="`/${data.id}`" class="user-frame__title">
                {{ data.name }} 
            </router-link>
        </div>
        <div class="user-frame__content">
            <router-link :to="`/${data.id}`" class="user-frame__image">
                <AppImage class="user-frame__current-image" />
            </router-link>
        </div>
        <div class="user-frame__bottom">
            <a :href="data.website" target="_blank">
                <AppButton color="wait-5">
                    <AppIcon icon-name="icon-web"/>
                    {{ data.website }}
                </AppButton>
            </a>
        </div>
    </div>
</template>

<script setup>
import AppIcon from '@/shared/ui/Images/AppIcon.vue'
import AppImage from '@/shared/ui/Images/AppImage.vue'
import AppButton from '@/shared/ui/Buttons/AppButton.vue'

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})

console.log(props.data)
</script>

<style scoped lang="scss">
.user-frame {
    position: relative;

    @media (min-width: $desktop-breakpoint) {
        padding: 40px;
        background-color: transparent;
        border-radius: 10px;
        transition: .3s;
    }

    @media (min-width: $lg-desktop-breakpoint) {
        padding: 40px 48px;
    }

    @media (any-hover: hover) {
        &:hover {
            background-color: $black-800;

            .user-frame__info {
                height: 24px;
                margin-bottom: 10px;
                visibility: visible;
                opacity: 1;
            }

            .user-frame__title {
                color: $wait-w;
            }

            .user-frame__bottom {
                height: 48px;
                visibility: visible;
                opacity: 1;

                @media (min-width: $lg-desktop-breakpoint) {
                    height: 52px;
                }
            }

            .user-frame__content {
                margin-bottom: 10px;
                opacity: 1;
            }

            .user-frame__image {
                height: calc(272px - 68px);

                @media (min-width: $lg-desktop-breakpoint) {
                    height: calc(272px - 64px);
                }
            }
        }
    }

    &__heading {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 10px;

        @media (min-width: $desktop-breakpoint) {
            margin-bottom: 24px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            margin-bottom: 32px;
        }
    }

    &__info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        @media (min-width: $desktop-breakpoint) {
            height: 0;
            padding-top: 0;
            margin-bottom: 0;
            overflow: hidden;
            visibility: hidden;
            opacity: 0;
            transition: .3s;
        }
    }

    &__info-block {
        display: flex;
        align-items: center;
        gap: 5px;
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
    }

    &__username {
        font-size: 14px;
        line-height: 140%;
        letter-spacing: .7px;

        @media (min-width: $desktop-breakpoint) {
            font-size: 16px;
            letter-spacing: .8px;
        }
    }

    &__title {
        font-size: 18px;
        font-weight: 900;
        line-height: 120%;
        color: $primary-500;

        @media (min-width: $desktop-breakpoint) {
            font-size: 22px;
            transition: .3s;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            font-size: 24px;
        }
    }

    &__content {
        position: relative;
        margin-bottom: 10px;
        transition: .3s;

        @media (min-width: $desktop-breakpoint) {
            margin-bottom: 24px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            margin-bottom: 32px;
        }
    }

    &__image {
        position: relative;
        display: block;
        height: 216px;
        overflow: hidden;
        border-radius: 5px;
        transition: .3s;

        @media (min-width: $desktop-breakpoint) {
            height: 272px;
        }
    }

    &__current-image {
        position: absolute;
        transition: .3s;
    }

    &__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 10px;

        @media (min-width: $desktop-breakpoint) {
            height: 0;
            padding-top: 0;
            overflow: hidden;
            visibility: hidden;
            opacity: 0;
            transition: .3s;
        }
    }

    &__attributes-list {
        display: flex;
        gap: 2px;
    }

    &__additional-images {
        display: flex;
    }

    &__additional-img {
        width: 48px;
        height: 32px;
        margin-left: -10px;
        overflow: hidden;
        border: 2px solid $black-900;
        border-radius: 5px;

        &:first-child {
            margin-left: 0;
        }
    }

    &__tag {
        color: $black-400;
        background: rgba($wait-w, .05);
        border: none;
    }
}
</style>