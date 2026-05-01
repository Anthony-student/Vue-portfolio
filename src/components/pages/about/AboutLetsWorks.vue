<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import LinkPrimaryTwo from "../home-two/LinkPrimaryTwo.vue";
</script>
<template>
    <CustomTransition>
        <section class="about-get-in-touch about-card p-32px">
            <h4 class="heading-4 about-get-in-touch__title">
                Let’s Works Together...!
            </h4>
            <LinkPrimaryTwo
                :link="{ name: 'contact' }"
                linkText="Get In Touch"
            />
        </section>
    </CustomTransition>
</template>

<style scoped></style>
