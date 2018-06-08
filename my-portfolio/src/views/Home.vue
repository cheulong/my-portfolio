<template>
  <div class="home">
    <Hero />
    <Project />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Project from '@/components/Project.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Project
  }
}
</script>
