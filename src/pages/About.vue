<script setup lang="ts">
import aboutOne from "@/assets/image/bio-image-anthony.png";
import AboutUsBody from "@/components/pages/about/AboutUsBody.vue";
import LinkBackHome from "@/components/shared/LinkBackHome.vue";
import AfterEffect from '@/components/shared/AfterEffect.vue';
</script>
<template>
  <main class="container">
    <LinkBackHome />
    <AboutUsBody :image="aboutOne" />
  </main>
  <AfterEffect />
</template>

<style scoped></style>
