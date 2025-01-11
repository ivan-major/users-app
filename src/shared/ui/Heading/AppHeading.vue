<template>
    <div class="app-heading">
        <div class="app-heading__icon">
            <AppIcon icon-name="icon-catalog-paragraph" />
        </div>
        <h1 class="app-heading__title">
            <slot name="default"/>
        </h1>
    </div>
</template>

<script setup>
import AppIcon from '@/shared/ui/Images/AppIcon.vue'
</script>

<style lang="scss" scoped>
.app-heading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;

    @media (min-width: $desktop-breakpoint) {
        margin-bottom: 40px;
    }

    &__icon {
        width: 40px;
        height: 40px;
        transform: translateX(12.5px);

        @media (min-width: $tablet-breakpoint) {
            width: 48px;
            height: 48px;
            transform: translateX(15px);
        }

        @media (min-width: $desktop-breakpoint) {
            width: 56px;
            height: 56px;
            transform: translateX(20px);
        }

        @media (min-width: $lg-desktop-breakpoint) {
            width: 64px;
            height: 64px;
            transform: translateX(24px);
        }

        :deep(svg) {
            width: 100%;
            height: 100%;
            stroke: $primary-500;
        }
    }

    &__title {
        font-size: 28px;
        font-weight: 900;
        line-height: 110%;
        color: $primary-500;
        text-transform: uppercase;
        transform: translateX(-12.5px);

        @media (min-width: $tablet-breakpoint) {
            font-size: 32px;
            transform: translateX(-15px);
        }

        @media (min-width: $desktop-breakpoint) {
            font-size: 40px;
            transform: translateX(-20px);
        }

        @media (min-width: $lg-desktop-breakpoint) {
            font-size: 48px;
            transform: translateX(-24px);
        }
    }
}
</style>