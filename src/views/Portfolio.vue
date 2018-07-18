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
}
</script>

<style lang="scss">
  
</style>