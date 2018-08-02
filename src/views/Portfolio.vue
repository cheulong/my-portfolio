<template>
  <div class="portfolio">
    <WorkTitle/>
    <WorkOverview/>
    <WorkDesign/>
    <WorkDev/>
    <WorkShowCase/>
  </div>
</template>

<script>
import WorkTitle from './../components/PorfolioPage/WorkTitle';
import WorkDev from './../components/PorfolioPage/WorkDev';
import WorkDesign from './../components/PorfolioPage/WorkDesign';
import WorkOverview from './../components/PorfolioPage/WorkOverview';
import WorkShowCase from './../components/PorfolioPage/WorkShowCase';
import ScrollMagic from "scrollmagic";

export default {
  name: 'portfolio',
  components: {
    WorkTitle,
    WorkDev,
    WorkDesign,
    WorkOverview,
    WorkShowCase
    },
  created() {
    document.title = "Cheulong | Portfolio";
  },
  mounted() {
      const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
      triggerElement: ".WorkOverview",
      triggerHook: 0.6,
      reverse: false
    })
      .setClassToggle('.WorkOverview','fade-in')
      .addTo(controller);

       const scene1 = new ScrollMagic.Scene({
      triggerElement: ".WorkDesign",
      triggerHook: 0.9,
      reverse: false
    })
      .setClassToggle('.WorkDesign','fade-in')
      .addTo(controller);

       const scene2 = new ScrollMagic.Scene({
      triggerElement: ".WorkDev",
      triggerHook: 0.9,
      reverse: false
    })
      .setClassToggle('.WorkDev','fade-in')
      .addTo(controller);

      const scene3 = new ScrollMagic.Scene({
      triggerElement: ".image",
      triggerHook: 0.7,
      reverse: false
    })
      .setClassToggle('.image','fade-in')
      .addTo(controller);
  },
}
</script>

<style lang="scss">
  
</style>