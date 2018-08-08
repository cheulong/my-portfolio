<template>

  <div class="about1">
  <h1>About Me</h1>
  <p>I love Design UI, Coding,<br> and new Technology.</p>
  </div>

</template>

<script>
export default {
  name: "AboutMeHeroSection"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-size: 6rem;
  line-height: 90%;
  margin: 1.5em 0;
}
.about1 {
  width: auto;
  height: 100vh;
}
p {
  line-height: 50px;
  font-size: 2em;
}
@media only screen and (max-width: 585px) {
  .about1 {
    text-align: center;
  }
  h1 {
    font-size: 4rem !important;
  }
  p {
    font-size: 1.5em;
  }
}
</style>
