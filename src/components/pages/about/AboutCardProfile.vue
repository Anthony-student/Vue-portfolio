<script setup lang="ts">
import imageShape from "@/assets/image/landing-two-profile-shapepng.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";

defineProps<{ image: string }>();
</script>
<template>
    <CustomTransition>
        <div class="about-card card-profile-image">
            <section class="card-profile-image__image-container">
                <img
                    :src="image"
                    alt="Landing bio image"
                    class="profile-image"
                    width="260"
                    height="260"
                />
                <img
                    :src="imageShape"
                    alt="Image Shape"
                    class="profile-shape"
                />
            </section>
        </div>
    </CustomTransition>
</template>

<style scoped>

.card-profile-image__image-container {
    height: 300px;
}

.profile-image,
.profile-shape {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
