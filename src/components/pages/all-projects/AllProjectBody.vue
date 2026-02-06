<template>
  <section class="custom-all-project-body">
    <AllProjectImage
      v-for="project in projects"
      :key="project.id"
      :image="project.image"
      :width="project.width"
      :height="project.height"
      :title="project.title"
      :text="project.text"
      :class="projectClasses(project)"
    />
  </section>
</template>

<script>
import image11 from "@/assets/image/all-project-11.png";
import image12 from "@/assets/image/all-project-12.png";
import image13 from "@/assets/image/all-project-13.png";
import image21 from "@/assets/image/all-project-21.png";
import image31 from "@/assets/image/all-project-31.png";
import image32 from "@/assets/image/all-project-32.png";
import AllProjectImage from "./AllProjectImage.vue";

export default {
  components: { AllProjectImage },

  data() {
    return {
      projects: [
        // --- block 1 ---
        { id: 'p13r', image: image13, width: 636, height: 664, wide: false, long: true, side: 'left', title: "something", text: "lorem  ipsum hnfuijreoro vniwer jhjniofrweo vjdfssjdf uijbnofdonofd jvcuioodwbnfjiwsd " },
        { id: 'p11a', image: image11, width: 636, height: 320, wide: false, long: false, side: null, title: "something", text: "lorem ipsum hnfuijreoro vniwer jhjniofrweo vjdfssjdf uijbnofdonofd jvcuioodwbnfjiwsd " },
        { id: 'p12a', image: image12, width: 636, height: 320, wide: false, long: false, side: null, title: "something", text: "lorem ipsum hnfuijreoro vniwer jhjniofrweo vjdfssjdf uijbnofdonofd jvcuioodwbnfjiwsd " },
        { id: 'p21a', image: image21, width: 1296, height: 400, wide: true, long: false, side: null, title: "something", text: "lorem ipsum hnfuijreoro vniwer jhjniofrweo vjdfssjdf uijbnofdonofd jvcuioodwbnfjiwsd " },
        { id: 'p31a', image: image31, width: 636, height: 393, wide: false, long: false, side: null, title: "something", text: "lorem ipsum hnfuijreoro vniwer jhjniofrweo vjdfssjdf uijbnofdonofd jvcuioodwbnfjiwsd " },
        { id: 'p32a', image: image32, width: 636, height: 393, wide: false, long: false, side: null, title: "something", text: "lorem ipsum hnfuijreoro vniwer jhjniofrweo vjdfssjdf uijbnofdonofd jvcuioodwbnfjiwsd " },

        // --- block 2 ---
        { id: 'p13l', image: image13, width: 636, height: 664, wide: false, long: true, side: 'right', title: "something", text: "lorem ipsum hnfuijreoro vniwer jhjniofrweo vjdfssjdf uijbnofdonofd jvcuioodwbnfjiwsd " },
        { id: 'p11b', image: image11, width: 636, height: 320, wide: false, long: false, side: null, title: "something", text: "lorem ipsum hnfuijreoro vniwer jhjniofrweo vjdfssjdf uijbnofdonofd jvcuioodwbnfjiwsd " },
        { id: 'p12b', image: image12, width: 636, height: 320, wide: false, long: false, side: null, title: "something", text: "lorem ipsum hnfuijreoro vniwer jhjniofrweo vjdfssjdf uijbnofdonofd jvcuioodwbnfjiwsd " },
        { id: 'p21b', image: image21, width: 1296, height: 400, wide: true, long: false, side: null, title: "something", text: "lorem ipsum hnfuijreoro vniwer jhjniofrweo vjdfssjdf uijbnofdonofd jvcuioodwbnfjiwsd " },
        { id: 'p31b', image: image31, width: 636, height: 393, wide: false, long: false, side: null, title: "something", text: "lorem ipsum hnfuijreoro vniwer jhjniofrweo vjdfssjdf uijbnofdonofd jvcuioodwbnfjiwsd " },
        { id: 'p32b', image: image32, width: 636, height: 393, wide: false, long: false, side: null, title: "something", text: "lorem ipsum hnfuijreoro vniwer jhjniofrweo vjdfssjdf uijbnofdonofd jvcuioodwbnfjiwsd " },
      ],
    }
  },

  methods: {
    projectClasses(project) {
      const classes = []
      if (project.wide) classes.push('project-wide')
      if (project.long) classes.push('project-long')
      if (project.side === 'left') classes.push('project-left')
      else if (project.side === 'right') classes.push('project-right')

      return classes
    },
  },
}
</script>


<style scoped>
.custom-all-project-body {
    margin-top: 60px;

    display: grid;
    gap: 24px;
    position: relative;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;

    grid-auto-flow: row dense;
}

.project-long {
    grid-row-end: span 2;
}

.project-wide {
    grid-column-end: span 2;
}

.project-right {
  grid-column-start: 2;
}

.project-left {
    grid-column-start: 1;
}

</style>
