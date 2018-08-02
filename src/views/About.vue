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
import ScrollMagic from "scrollmagic";
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
  mounted() {
    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
      triggerElement: ".who",
      triggerHook: 0.6,
      reverse: false
    })
      .setClassToggle('.who','fade-in')
      .addTo(controller);

      const scene1 = new ScrollMagic.Scene({
      triggerElement: ".skill",
      triggerHook: 0.6,
      reverse: false

    })
      .setClassToggle('.skill','fade-in')
      .addTo(controller);
      const scene2 = new ScrollMagic.Scene({
      triggerElement: ".passion",
      triggerHook: 0.6,
      reverse: false

    })
      .setClassToggle('.passion','fade-in')
      .addTo(controller);

  }

  
};
</script>

<style lang="scss">
.about {
  padding-left: 10%;
}

</style>
