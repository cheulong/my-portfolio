<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li @click="toggleMenu"><router-link to="/"><span>Home</span></router-link></li>
        <li @click="toggleMenu"><router-link to="/portfolio"><span>Portfolio</span></router-link></li>
        <li @click="toggleMenu"><router-link to="/resume"><span>Resume</span></router-link></li>
        <li @click="toggleMenu"><router-link to="/about"><span>About</span></router-link></li>
      </ul>
    </div>
    <div class="top-nav">
        <div class="burger">
          <a href="#" class="nav" v-on:click="toggleMenu">
              <div class="one"></div>
              <div class="two"></div>
              <div class="three"></div>
          </a>
        </div>

        <div class="logo">
          <router-link to="/"><span>Long.</span></router-link>
        </div>
        <div class="social-media">
          <ul class="social-media-icon">
            <li title="email"><a href="mailto:searcheulong@gmail.com"><icon name="envelope-o" scale="2"></icon></a></li>
            <li title="linked in"><a href="https://www.linkedin.com/in/sear-cheulong-16370b95/" target="_blank"><icon name="linkedin" scale="2"></icon></a></li>
            <li title="twitter"><a href="https://twitter.com/searcheulong" target="_blank"><icon name="twitter" scale="2"></icon></a></li>
            <li title="github"><a href="https://github.com/cheulong" target="_blank"><icon name="github" scale="2"></icon></a></li>
            <li title="codepen"><a href="https://codepen.io/Cheulong/" target="_blank"><icon name="codepen" scale="2"></icon></a></li>
          </ul>
        </div>
    </div>


    <div class="view">
       <transition name="page" mode="out-in">
        <router-view/>
      </transition>
    </div>

  </div>
</template>

<script>
import Vue from "vue";

/* Pick one way between the 2 following ways */
// only import the icons you use to reduce bundle size
import "vue-awesome/icons/flag";
// or import all icons if you don't care about bundle size
import "vue-awesome/icons";
/* Register component with one of 2 methods */
import Icon from "vue-awesome/components/Icon";
// globally (in your main .js file)
Vue.component("icon", Icon);

export default {
  components: {
    Icon
  },
  name: "home",
  data() {
    return {
      isMenu: false
    };
  },
  methods: {
    toggleMenu: function() {
      console.log(this.isMenu);
      var one = document.getElementsByClassName("one");
      var two = document.getElementsByClassName("two");
      var three = document.getElementsByClassName("three");
      var menu = document.getElementById("nav");
      console.log(one);
      if (this.isMenu) {
        menu.style.display = "none";
        one[0].classList.remove("trigger");
        two[0].classList.remove("trigger");
        three[0].classList.remove("trigger");
      } else {
        menu.style.display = "inline";
        one[0].classList.add("trigger");
        two[0].classList.add("trigger");
        three[0].classList.add("trigger");
      }
      this.isMenu = !this.isMenu;
    }
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

//Font
@import url("https://fonts.googleapis.com/css?family=Montserrat");
@import url("https://fonts.googleapis.com/css?family=Raleway");
//Variables
$main-font: Montserrat, sans-serif;
//Mixin
@mixin trigger($rotate, $translateX, $translateY, $width) {
  transform: rotate($rotate + deg) translateX($translateX + px)
    translateY($translateY + px);

  width: $width + px !important;
}

.nav {
  width: 50px;
  display: block;
  margin: 1.3em 0 0 1em;

  div {
    height: 3px;
    margin: 10px 0;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    -ms-border-radius: 25px;
    border-radius: 25px;
    transition: 0.3s;
    background: white;
  }
  &:hover {
    div {
      width: 50px;
    }
  }
}
.one {
  width: 50px;
  &.trigger {
    @include trigger(45, 4, 14, 45);
  }
}
.two {
  width: 30px;
  &.trigger {
    @include trigger(0, 0, 0, 0);
  }
}
.three {
  width: 40px;
  &.trigger {
    @include trigger(-45, 4, -16, 45);
  }
}
#app {
  font-family: $main-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 100%;
  color: white;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  grid-gap: 0;
}

.top-nav {
  grid-column: 1/1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 3000;
}
.view {
  overflow: hidden;
  grid-column: 1/13;
  z-index: 2;
  background: #061e3c !important;
  color: white;
}

#nav {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: none;
  background: #061E3C;
  z-index: 2000;
  ul {
    width: 110vw;
    display: grid;
    grid-template-columns: 100%;
    margin-top: 70px;
    li {
      list-style: none;
      color: white;
    }
  }
  a {
    font-size: 70px;
    padding: 25px;
    font-weight: 700;
    text-align: center;
    transform: translateX(-8%);
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    display: block;
    background: #061e3c;
    &.router-link-exact-active {
      color: orangered;
    }
    &:hover {
      color: rgb(214, 77, 14);
      span {
        text-decoration: underline;
  
      }
    }
  }
}

.logo {
  margin-left: 15%;
  font-size: 1.6rem;
  margin-top: 20px;
  margin-bottom: 0;

  a {
    text-decoration: none;
    color: white;
    cursor: default;
    &:hover,
    &:visited {
      color: white;
    }
  }
}
.social-media {
  width: 300px;
  margin-right: 3%;
}
.social-media-icon {
  display: flex;
  justify-content: space-between;
  list-style: none;
  li {
    a {
      color: #fff;
      &:hover {
        color: #ea4e06;
      }
    }
  }
}
.page-enter-active, .page-leave-active {
    transition: opacity .2s
  }
  .page-enter, .page-leave-active {
    opacity: 0
  }
</style>
