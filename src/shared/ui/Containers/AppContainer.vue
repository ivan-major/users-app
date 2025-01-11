<template>
    <div class="app-container">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.app-container {
    max-width: 1920px;
    margin: 20px;

    @media (min-width: $tablet-breakpoint) {
        margin: 30px;
    }

    @media (min-width: $desktop-breakpoint) {
        margin: 40px;
    }

    @media (min-width: $lg-desktop-breakpoint) {
        margin: 0 auto;
    }
}
</style>
