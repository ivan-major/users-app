<template>
    <div class="error">
        <h1 class="error__title">404</h1>
        <p class="error__text">Page not found</p>
    </div>
</template>

<style lang="scss" scoped>
.error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
    height: 100dvh;
    width: 100%;

    &__title {
        font-size: 100px;
        font-weight: 700;
        color: $primary-500;

        @media (min-width: $tablet-breakpoint) {
            font-size: 200px;
        }

        @media (min-width: $desktop-breakpoint) {
            font-size: 300px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            font-size: 400px;
        }
    }

    &__text {
        font-size: 24px;
        font-weight: 400;
        color: $primary-500;

        @media (min-width: $tablet-breakpoint) {
            font-size: 36px;
        }

        @media (min-width: $desktop-breakpoint) {
            font-size: 48px;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            font-size: 60px;
        }
    }
}
</style>