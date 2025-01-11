<template>
    <button :class="classes" @click="onClick">
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['on-click'])
const props = defineProps({
    isDisabled: {
        type: Boolean,
        required: false
    },
    color: {
        type: String,
        required: true,
        validator: (value) => ['wait-5', 'primary'].includes(value)
    },
})

const classes = computed(() => [
    'button',
    `button--${ props.color }`,
    { 'button--disabled': props.isDisabled }
])

const onClick = () => emit('on-click')
</script>

<style scoped lang="scss">
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    flex-shrink: 0;
    width: max-content;
    font-family: $global-font-family;
    font-weight: 400;
    cursor: pointer;
    border: 0;
    border-radius: 100px;
    transition: .3s;
    height: 28px;
    padding-inline: 8px;
    font-size: 14px;
    line-height: 140%;

    :deep(svg),
    :deep(img) {
        width: 20px;
        height: 20px;
    }

    @media (min-width: $tablet-breakpoint) {
        height: 32px;
        padding-inline: 10px;
        font-size: 14px;
        line-height: 140%;

        :deep(svg),
        :deep(img) {
            width: 20px;
            height: 20px;
        }
    }

    @media (min-width: $desktop-breakpoint) {
        height: 40px;
        padding-inline: 16px;
        font-size: 16px;
        line-height: 140%;

        :deep(svg),
        :deep(img) {
            width: 24px;
            height: 24px;
        }
    }

    @media (min-width: $lg-desktop-breakpoint) {
        height: 48px;
        padding-inline: 14px;
        font-size: 16px;
        line-height: 140%;

        :deep(svg) {
            width: 24px;
            height: 24px;
        }
    }

    &--wait-5 {
        color: $black-400;
        background: rgba($wait-w, .05);

        @media (any-hover: hover) {
            &:hover {
                color: $black-100;
                background: $black-700;
            }
        }

        :deep(svg) {
            stroke: $black-500;
        }
    }

    &--primary {
        color: $wait-w;
        background: $primary-500;

        @media (any-hover: hover) {
            &:hover {
                background: $primary-600;

                :deep(svg) {
                    stroke: $wait-w;
                }
            }
        }

        :deep(svg) {
            stroke: $primary-300;
        }
    }

    &--disabled {
        color: $black-500;
        pointer-events: none;
        background: transparent;
        border: 1px solid $black-700;

        :deep(svg) {
            stroke: $black-500;
        }
    }

    :deep(svg) {
        transition: .3s;
    }

    :deep(img) {
        object-fit: contain;
    }
}
</style>
