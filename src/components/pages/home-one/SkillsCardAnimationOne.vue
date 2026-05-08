<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import {
  PhCodepenLogo,
  PhFigmaLogo,
  PhGithubLogo,
  PhGitlabLogo,
  PhMicrosoftTeamsLogo,
  PhPencil,
  PhStackOverflowLogo,
} from "@phosphor-icons/vue";

const sliderOneData = [
  "UI/UX Design",
  "Components",
  "Maintainability",
  "Web development",
  "App development",
  "Accesible UI",
  "UI/UX Design",
  "Components",
  "Maintainability",
  "Web development",
  "App development",
  "Accesible UI",
  "UI/UX Design",
  "Components",
  "Maintainability",
  "Web development",
  "App development",
  "Accesible UI",
];

const sliderTwo = [
  {
    icon: PhFigmaLogo,
  },
  {
    icon: PhStackOverflowLogo,
  },
  {
    icon: PhGithubLogo,
  },
  {
    icon: PhGitlabLogo,
  },
  {
    icon: PhPencil,
  },
  {
    icon: PhMicrosoftTeamsLogo,
  },
  {
    icon: PhCodepenLogo,
  },
  {
    icon: PhFigmaLogo,
  },
  {
    icon: PhStackOverflowLogo,
  },
  {
    icon: PhGithubLogo,
  },
  {
    icon: PhGitlabLogo,
  },
  {
    icon: PhPencil,
  },
  {
    icon: PhMicrosoftTeamsLogo,
  },
  {
    icon: PhCodepenLogo,
  },
  {
    icon: PhFigmaLogo,
  },
  {
    icon: PhStackOverflowLogo,
  },
  {
    icon: PhGithubLogo,
  },
  {
    icon: PhGitlabLogo,
  },
  {
    icon: PhPencil,
  },
  {
    icon: PhMicrosoftTeamsLogo,
  },
  {
    icon: PhCodepenLogo,
  },
];
</script>

<template>
  <CustomTransition>
    <div class="card-style skills-card">
      <span class="heading-4 skills-card__title">Skills & Tools</span>
      <div class="skills-card__slider-aria">
        <div class="marquee-wrapper text-slider">
          <div class="marquee-inner to-left">
            <ul class="marqee-list d-flex">
              <li class="marquee-item">
                <span
                  v-for="(item, index) in sliderOneData"
                  :key="`skill-slider-one-${index}`"
                  class="skills-card__slider-text"
                >
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="marquee-wrapper-icon-slider">
          <div class="marquee-inner to-right">
            <ul class="marqee-list d-flex">
              <li class="marquee-item">
                <span
                  v-for="({ icon }, index) in sliderTwo"
                  :key="`skill-slider-two-${index}`"
                  class="skills-card__slider-two__box"
                >
                  <component :is="icon" size="32"></component>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </CustomTransition>
</template>

<style scoped></style>
