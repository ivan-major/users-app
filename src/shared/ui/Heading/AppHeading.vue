<template>
    <h1 class="app-heading">
        <slot />
    </h1>
</template>

<style lang="scss" scoped>
.app-heading {
    display: flex;
    justify-content: center;
    padding: 20px;
    font-size: 28px;
    font-weight: 900;
    line-height: 110%;
    color: $wait-w;
    letter-spacing: 1.4px;

    @media (min-width: $tablet-breakpoint) {
        padding: 24px 30px;
        font-size: 32px;
        letter-spacing: 1.6px;
    }

    @media (min-width: $desktop-breakpoint) {
        padding: 32px 40px;
        font-size: 40px;
        letter-spacing: 2px;
    }
    
    @media (min-width: $lg-desktop-breakpoint) {
        padding: 40px 48px;
        font-size: 48px;
        letter-spacing: 2.4px;
    }
}
</style>