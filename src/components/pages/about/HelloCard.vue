<script setup lang="ts">
import image from "@/assets/image/shape-11.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import { personalData } from "@/assets/data/personalData";
</script>
<template>
    <CustomTransition>
        <article class="about-card card-hello p-32px">
            <span class="heading-3">{{
                personalData.bio.introduction.one
            }}</span>
            <h2 class="heading-3">{{ personalData.bio.introduction.two }}</h2>
            <span class="heading-3">{{
                personalData.bio.introduction.three
            }}</span>
            <p class="textL">
                {{ personalData.bio.description }}
            </p>
            <img
                :src="image"
                alt="Shape"
                class="card-hello__shape light-mood-image-shape"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
            />
        </article>
    </CustomTransition>
</template>

<style scoped></style>
