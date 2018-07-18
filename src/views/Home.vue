<template>
  <div class="home">
    <full-page :options="options">
      <div class="section">
        <HeroSection />
      </div>
      <div class="section">
        <ProjectSection />
      </div>
      <div class="section">
        <ResumeSection />
      </div>
      <div class="section">
        <AboutMeSection />
      </div>
      <div class="section">
        <ContactSection />
      </div>
  </full-page>

  </div>
</template>

<script>
// @ is an alias to /src
import FullPage from 'vue-fullpage.js'
import HeroSection from '@/components/HomePage/HeroSection.vue'
import ProjectSection from '@/components/HomePage/ProjectSection.vue'
import AboutMeSection from '@/components/HomePage/AboutMeSection.vue'
import ContactSection from '@/components/HomePage/ContactSection.vue'
import ResumeSection from '@/components/HomePage/ResumeSection.vue'
export default {
  name: 'home',
  components: {
    HeroSection,
    ProjectSection,
    AboutMeSection,
    ContactSection,
    ResumeSection,
    FullPage
  },
  data () {
    return {
      options: {
        controlArrows: true,
        scrollBar: false,
        // anchors: ['', 'work', 'cv', 'about', 'contact'],
        navigation: true,
		    navigationPosition: 'left',
        afterLoad: this.afterLoad,
        onLeave: this.onLeave,
      },
    }
  },
  methods: {
        afterLoad() {

          console.log("Emitted 'after load' event.");
        },
        onLeave() {
          console.log("Emitted 'on leave' event.");
        },
      },
  destroyed() {
    $.fn.fullpage.destroy('all');
    console.log('hi')
  }
}
</script>
<style lang="scss">

.section{
  width: 100vw;
  height: 100vh;
}
#fp-nav{
  z-index: 100;
  ul{
    li{
      width: 40px;
      a{
        width: 40px;
        span{
        background: white!important;
        }
        &:hover{
          span{
            background: gray!important;
            width: 30px;
            height: 3px;
            margin: -2px 0 0 -2px;
          }
        }
        &.active{
          span{
            width: 40px;
            height: 3px;
            margin: -2px 0px 0px 0px;
          }
          &:hover{
            span{
              background: gray!important;
              width: 40px;
              height: 3px;
margin: -2px 0px 0px 0px;
            }
          }
        }
        span{
          border-radius: 0!important;
    position: absolute;
    height: 3px;
    width: 30px;
    border: 0;
    background: #333;
    left: 0;
    top: 50%;
    margin: -2px 0 0 -2px;
    -webkit-transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out;
        }
      }
    }
  }
}
</style>
