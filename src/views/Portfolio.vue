<template>
  <div class="portfolio">
    <WorkTitle/>
    <WorkOverview/>
    <WorkDesign/>
    <WorkDev/>
  </div>
</template>

<script>
import WorkTitle from './../components/PorfolioPage/WorkTitle';
import WorkDev from './../components/PorfolioPage/WorkDev';
import WorkDesign from './../components/PorfolioPage/WorkDesign';
import WorkOverview from './../components/PorfolioPage/WorkOverview';

export default {
  name: 'portfolio',
  components: {
    WorkTitle,
    WorkDev,
    WorkDesign,
    WorkOverview
    }
}
</script>

<style lang="scss">
  
</style>