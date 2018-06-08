<template>
  <div class="home">
    <HeroSection />
    <ProjectSection />
    <AboutMeSection />
    <ContactSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from '@/components/HomePage/HeroSection.vue'
import ProjectSection from '@/components/HomePage/ProjectSection.vue'
import AboutMeSection from '@/components/HomePage/AboutMeSection.vue'
import ContactSection from '@/components/HomePage/ContactSection.vue'

export default {
  name: 'home',
  components: {
    HeroSection,
    ProjectSection,
    AboutMeSection,
    ContactSection
  }
}
</script>
