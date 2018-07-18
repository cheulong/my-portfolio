<template>
  <div class="about">
    <AboutMeHeroSection />
    <WhoamiSection />
    <Passion />
    <SkillSection />

  </div>
</template>

<script>
import AboutMeHeroSection from "@/components/AboutPage/AboutMeHeroSection.vue";
import SkillSection from "@/components/AboutPage/SkillSection.vue";
import WhoamiSection from "@/components/AboutPage/WhoamiSection.vue";
import Passion from "@/components/AboutPage/Passion.vue";
export default {
  name: "about",
  components: {
    AboutMeHeroSection,
    SkillSection,
    WhoamiSection,
    Passion
  },
  created() {
    document.title = "Cheulong | About";
  },
};
</script>

<style lang="scss">
.about{
  padding-left: 10%;
}
</style>
