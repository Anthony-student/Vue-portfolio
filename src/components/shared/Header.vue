<script setup lang="ts">
import ArrowButton from "@/components/shared/ArrowButton.vue";
import { ref } from "vue";
import DeskTopNavbar from "./DeskTopNavbar.vue";
import MobileNavbar from "./MobileNavbar.vue";

const sidebarToggle = ref(false);

const handleFalse = () => {
  sidebarToggle.value = false;
};

const handleToggle = () => {
  sidebarToggle.value = !sidebarToggle.value;
};
</script>

<template>
  <nav class="navbar-container container position-relative z-3">
    <!-- desktop navbar -->
    <DeskTopNavbar />

    <!-- mobile navbar -->
    <section class="mobile-navbar-container bg-light-white">
      <div
        class="hamburger"
        :class="`${sidebarToggle ? 'is-active' : ''}`"
        @click="handleToggle"
      >
        <div class="hamburger__container">
          <div class="hamburger__inner"></div>
          <div class="hamburger__hidden"></div>
        </div>
      </div>
      <ArrowButton link="/contact" />
    </section>

    <!-- mobile navbar menu -->
    <MobileNavbar :sidebarToggle="sidebarToggle" :handleToggle="handleToggle" :handleFalse="handleFalse"/>
  </nav>
</template>
