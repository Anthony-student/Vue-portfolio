<script setup lang="ts">
import linkImage from "@/assets/image/all-project-link.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import { defineProps } from "vue";

defineProps<{
  image: string;
  width: number;
  hight: number;
  title?: string;
  text?: string;
}>();
</script>
<template>
  <CustomTransition>
    <section class="image-body">
      <img
        :src="image"
        alt="All Projects image 11"
        class="image-body__image img-fluid"
      />
      <router-link to="/project-details" class="all-project-link">
        <article class="all-project-link__text-area">
          <h4 class="link-title heading-2">{{ title }}</h4>
          <p class="textL link-text">
            {{ text }}
          </p>
        </article>
        <nav class="all-project-link__image">
          <img
            :src="linkImage"
            width="{175}"
            height="{100}"
            alt="Go to project detail page"
            class="img-fluid"
          />
        </nav>
      </router-link>
    </section>
  </CustomTransition>
</template>

<style scoped></style>
