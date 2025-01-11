<template>
    <div class="app-list">
        <div
            v-for="(item, index) in data"
            :key="index"
            class="app-list__item"
        >
            <slot :data="item" name="default" />
        </div>
    </div>
</template>

<script setup>

defineProps({
    data: {
        type: Array,
        required: true
    }
})
</script>

<style scoped lang="scss">
.app-list {
    width: 100%;
    @media (min-width: $tablet-breakpoint) {
        display: flex;
        flex-wrap: wrap;
        gap: 36px 18px;
    }

    @media (min-width: $desktop-breakpoint) {
        gap: 0;
    }

    &__item {
        @media (min-width: $tablet-breakpoint) {
            width: calc(50% - 9px);
        }

        @media (min-width: $desktop-breakpoint) {
            width: 33.3%;
        }

        @media (min-width: $lg-desktop-breakpoint) {
            width: 25%;
        }

        + .app-list__item {
            margin-top: 40px;

            @media (min-width: $tablet-breakpoint) {
                margin: 0;
            }
        }
    }
}
</style>