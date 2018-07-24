<template v-title="title">
  <div class="home">

        <HeroSection />

        <ProjectSection class="section" id="project"/>


        <ResumeSection class="section" id="resume"/>


        <AboutMeSection class="section" id="about"/>
    

        <ContactSection class="section" id="contact"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import FullPage from 'vue-fullpage.js'
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
    // FullPage
  },
  data () {
    return {
      // options: {
      //   controlArrows: true,
      //   scrollBar: false,
      //   // anchors: ['', 'work', 'cv', 'about', 'contact'],
      //   navigation: true,
		  //   navigationPosition: 'left',
      //   afterLoad: this.afterLoad,
      //   onLeave: this.onLeave,
      // }
    }
  },
  created() {
    document.title = "Cheulong | Home";
  },
  mounted() {
    var controller = new ScrollMagic.Controller();


    


      // create a scene
new ScrollMagic.Scene({
		// duration: 700,	// the scene should last for a scroll distance of 100px
		// offset: 50		// start this scene after scrolling for 50px
    triggerElement: "#project",
    triggerHook: 0.7,
    reverse: false

  })
	.setClassToggle("#project","fade-in")
  .addIndicators({
    name: "fade scene",
    indent:200
  }) // pins the element for the the scene's duration
	.addTo(controller); 

          // create a scene
new ScrollMagic.Scene({
		// duration: 700,	// the scene should last for a scroll distance of 100px
		// offset: 50		// start this scene after scrolling for 50px
    triggerElement: "#resume",
    triggerHook: 0.7,
    reverse: false

  })
	.setClassToggle("#resume","fade-in")
  .addIndicators({
    name: "fade1 scene",
    indent:200
  }) // pins the element for the the scene's duration
	.addTo(controller); 
          // create a scene
new ScrollMagic.Scene({
		// duration: 700,	// the scene should last for a scroll distance of 100px
		// offset: 50		// start this scene after scrolling for 50px
    triggerElement: "#about",
    triggerHook: 0.7,
    reverse: false
  })
	.setClassToggle("#about","fade-in")
  .addIndicators({
    name: "fade1 scene",
    indent:200
  }) // pins the element for the the scene's duration
	.addTo(controller); 
          // create a scene
new ScrollMagic.Scene({
		// duration: 700,	// the scene should last for a scroll distance of 100px
		// offset: 50		// start this scene after scrolling for 50px
    triggerElement: "#contact",
    triggerHook: 0.7,
    reverse: false
  })
	.setClassToggle("#contact","fade-in")
  .addIndicators({
    name: "fade1 scene",
    indent:200
  }) // pins the element for the the scene's duration
	.addTo(controller); 
  },
  methods: {
        // afterLoad() {

        //   console.log("Emitted 'after load' event.");
        // },
        // onLeave() {
        //   console.log("Emitted 'on leave' event.");
        // },
      },
  // destroyed() {
  //   $.fn.fullpage.destroy('all');
  //   console.log('hi')
  // }
}
</script>
<style lang="scss">

.section{
  opacity: 0;
  transform:translateX(-100px);
  transition: all 1s ease-out;
  &.fade-in{
    opacity:1;
    transform:translateX(0px);
  }
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
