<template>
  <div class="resume">
    <div class="title">
      <h1>Resume</h1>
    </div>
    <div class="">
      <router-link to="/resume">Get my resume</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumeSection'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.resume {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 50% 50%;
  align-items: center;
  margin-left: 5%;
  opacity: 0;
  transition: 1s all ease;
  transform: translateX(-50px);
  &.fade-in {
    opacity: 1;
    transform: translateX(0px);
  }
}
h1 {
  font-size: 6rem;
  line-height: 90%;
}
h3 {
  font-size: 1.6rem;
}
a {
  font-weight: bold;
  font-size: 0.8em;
  text-transform: uppercase;
  display: block;
  margin-left: 40px;
  width: 180px;
  text-align: center;
  text-decoration: none;
  color: white;
  background: gray;
  padding: 15px 15px;
  border-radius: 50px;
  &:hover {
    background: linear-gradient(90deg, rgb(236, 113, 65), rgb(233, 76, 3));
  }
}
.title {
  transform: translateY(-50px);
}
@media only screen and (max-width: 815px) {
  .resume {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
  }
  a {
    margin-left: 0;
  }
}
@media only screen and (max-width: 615px) {
  .resume {
    margin-top: 100px;
  }
  h1 {
    font-size: 4rem !important;
  }
  h3 {
    font-size: 2.5rem !important;
  }
}
</style>

