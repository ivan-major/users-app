<template>
    <div class="app-image">
        <template v-if="lazy">
            <div class="app-image__inner">
                <picture>
                    <source
                        :srcset="GET_IMAGE_URL(urls?.mobile_webp || urls?.original)"
                        media="(max-width: 1279px)"
                    >
                    <source
                        :srcset="GET_IMAGE_URL(urls?.desktop_webp || urls?.original)"
                        media="(min-width: 1280px)"
                    >
                    <img
                        :src="GET_IMAGE_URL(urls?.original)"
                        :alt="alt || title"
                        :title="title || alt"
                        :style="fitStyle"
                        :loading="loading"
                        class="app-image__img"
                    >
                </picture>
            </div>
        </template>
        <template v-else>
            <picture v-if="urls?.original">
                <source
                    :srcset="GET_IMAGE_URL(urls?.mobile_webp || urls?.original)"
                    media="(max-width: 1279px)"
                >
                <source
                    :srcset="GET_IMAGE_URL(urls?.desktop_webp || urls?.original)"
                    media="(min-width: 1280px)"
                >
                <img
                    :src="GET_IMAGE_URL(urls.original)"
                    :alt="alt || title"
                    :title="title || alt"
                    :style="fitStyle"
                >
            </picture>
            <img
                v-else
                alt="image-placeholder"
                title="image-placeholder"
                :style="fitStyle"
                src="@/shared/assets/images/image-placeholder.png"
            >
        </template>
    </div>
</template>

<script setup>
import { useConfig } from '~/shared/composables/useConfig.js'
import { computed } from 'vue'

const { GET_IMAGE_URL } = useConfig()

const props = defineProps({
    urls: {
        type: Object,
        required: false,
        default: () => ({})
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
    lazy: {
        type: Boolean
    },
    fit: {
        type: String,
        default: 'cover',
        validator: (value) => ['cover', 'contain'].includes(value)
    },
    preload: {
        type: Boolean,
        required: false
    }
})

const fitStyle = computed(() => `object-fit: ${ props.fit }`)
const loading = computed(() => props.preload ? 'eager' : 'lazy')

props.preload && useHead({
    link: [
        { rel: 'preload', as: 'image', href: props.urls?.original }
    ]
})
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
    vertical-align: top;
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
