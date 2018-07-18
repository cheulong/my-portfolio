<template>
  <div class="about">
    <ResumeLetter/>
  </div>
</template>

<script>
import ResumeLetter from './../components/ResumePage/ResumeLetter';
export default {
    name: "Resume",
    components: {
      ResumeLetter
    },
  created() {
    document.title = "Cheulong | Resume";
  }
};
</script>