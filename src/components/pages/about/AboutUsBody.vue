<script setup lang="ts">
import AboutCardProfile from "@/components/pages/about/AboutCardProfile.vue";
import AboutEducation from "@/components/pages/about/AboutEducation.vue";
import AboutLetsWorks from "@/components/pages/about/AboutLetsWorks.vue";
import AboutMyExperience from "@/components/pages/about/AboutMyExperience.vue";
import AboutWhatIDo from "@/components/pages/about/AboutWhatIDo.vue";
import ExperienceInNumber from "@/components/pages/about/ExperienceInNumber.vue";
import HelloCard from "@/components/pages/about/HelloCard.vue";
import ProfileCardAbout from "@/components/pages/about/ProfileCardAbout.vue";
import { defineProps } from "vue";

defineProps<{ image: string }>();
</script>
<template>
    <div class="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
        <div class="about-body">
            <!-- <div class="about-body__1st-row">
            </div> -->
            <HelloCard />
            <AboutCardProfile :image="image" />
            <div class="about-body__2nd-row">
                <AboutMyExperience />
                <AboutWhatIDo />
                <ExperienceInNumber />
            </div>
            <div class="about-body__3rd-row">
                <ProfileCardAbout />
                <AboutEducation />
                <AboutLetsWorks />
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
}

.about-body > *:nth-child(1) {
    grid-column-start: 1;
    grid-column: span 2;
}

.about-body > *:nth-child(2) {
    grid-column-start: 2;
    grid-column: span 1;
}

.about-body > *:nth-child(3) {
    grid-column-start: 1;
    grid-column: span 2;
}

.about-body > *:nth-child(4) {
    grid-column-start: 1;
    grid-column: span 2;
}
</style>
