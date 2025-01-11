<template>
    <div class="app-image">
        <img
            v-if="url"
            alt="image-user"
            title="image-user"
            :src="url"
            loading="lazy"
        >
        <img
            v-else
            alt="image-user"
            title="image-user"
            src="@/shared/assets/images/image-user.png"
            loading="lazy"
        >
    </div>
</template>

<script setup>
defineProps({
    url: {
        type: String,
        required: false,
    },
    alt: {
        type: String,
        required: false,
        default: ''
    },
    title: {
        type: String,
        required: false,
        default: ''
    },
})
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
}

.app-image {
    width: 100%;
    height: 100%;

    &__inner {
        position: relative;
        width: 100%;
        height: 100%;
    }

    &__img {
        opacity: 1;
        transition: .3s;
    }
}

@keyframes lazy {
    0% {
        left: 0;
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    30% {
        left: 100%;
        opacity: 1;
    }

    100% {
        left: 100%;
        opacity: 0;
    }
}
</style>
