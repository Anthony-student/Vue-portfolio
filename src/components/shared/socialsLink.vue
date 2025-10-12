<script setup lang="ts">
import hoverIconPath from "@/assets/image/hover-icon.png";

defineProps<{
    socialLink: string;
}>();
</script>

<template>
    <a
        :href="socialLink"
        target="_blank"
        class="position-relative icon-container profile-icon"
    >
        <slot></slot>
        <img :src="hoverIconPath" alt="Hover Icon" class="hover-icon" />
    </a>
</template>
