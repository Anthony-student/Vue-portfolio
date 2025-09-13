-
<script setup lang="ts">
import titleCardShape from "@/assets/image/title-card-shape.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
</script>

<template>
  <CustomTransition>
    <article class="card-style title-card">
      <h4 class="title-card__title-sub-text">Title</h4>

      <section class="title-card__title-text">
        <p>Software</p>
        <p class="title-card__title-text-two">Developer</p>
      </section>
      
      <img
        :src="titleCardShape"
        alt="Title Card Shape"
        class="title-card__shapes-image light-mood-image-shape"
      />
    </article>    
  </CustomTransition>
</template>

<style scoped>
h4 {
  font-size: 20px;
}

p {
  font-size: 28px;
  font-weight: 600;
}
</style>
