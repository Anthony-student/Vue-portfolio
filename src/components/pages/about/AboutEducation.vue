<template>
    <CustomTransition>
        <section class="about-education about-card p-32px">
            <p class="heading-4 about-education__title">Education</p>
            <section class="about-education__content">
                <AboutContentItem
                    v-for="education in educations"
                    :key="education.year"
                    :title="education.title"
                    :year="education.year"
                    :university="education.university"
                />
            </section>

            <img
                :src="shapeImage"
                width="{53}"
                height="{53}"
                alt=""
                class="about-education-shape light-mood-image-shape"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
            />
        </section>
    </CustomTransition>
</template>

<script>
import shapeImage from "@/assets/image/shape-12.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
import AboutContentItem from "./AboutContentItem.vue";

export default {
    components: { CustomTransition, AboutContentItem },

    data() {
        return {
            shapeImage,
            educations: [
                {
                    title: "VMBO Dienstverlening en product",
                    year: "2015 - 2019",
                    university: "Focus Beroeps Academie",
                },
                {
                    title: "MBO in Applicatie en mediaontwikkelaar",
                    year: "2019 - 2023",
                    university: "Da vinci college Dordrecht",
                },
                {
                    title: "Bachelor Degree in HBO-ICT",
                    year: "2023 - heden",
                    university: "Hogeschool Utrecht",
                },
            ],
        };
    },
};
</script>

<style scoped></style>
