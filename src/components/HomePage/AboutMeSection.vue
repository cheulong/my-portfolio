<template>

  <div class="about">
    <div class="">
<h1>About<br> Me</h1>
    </div>
    <div class="">

      <p>I love<br> Design UI, Coding, and new Technology.</p>
      <router-link to="/about">Show more about me</router-link>
    </div>


  </div>

</template>

<script>
export default {
  name: "AboutMeSection"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 50% 50%;
  background: #061e3c;
  align-items: center;
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
  margin-bottom: 0;
}
p {
  font-size: 1.3rem;
}
a {
  font-weight: bold;
  font-size: 0.8em;
  text-transform: uppercase;
  display: block;
  margin-top: 30px;
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
@media only screen and (max-width: 815px) {
  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-left: 0;
    h1 {
      margin: 50px auto;
    }
    a {
      display: inline;
    }
    p {
      margin: 50px auto;
      font-size: 1.2rem !important;
    }
  }
}
@media only screen and (max-width: 615px) {
  h1 {
    font-size: 4rem !important;
  }
}
</style>
