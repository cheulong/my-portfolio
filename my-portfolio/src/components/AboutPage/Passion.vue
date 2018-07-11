<template>

  <div class="passion">
    <div>
  <h3>Passion</h3>
  <h4>Design</h4>
  <p>If services and products are medicine to solve problems, but design is also a major role to attract or users feel comfortable to use that product.</p>
  <h4>Technology</h4>
  <p>I always want to catch up with the lastest technology and be a person who can respond to change. I believe that technology has the power to change the life of the world.</p>
  </div>
  <div></div>
  </div>

</template>

<script>
export default {
  name: 'Passion'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.passion{
  display: grid;
  grid-template-columns: 40% 60%;
   width: auto;
  height: 100vh;
}
h3{
  font-size: 3.0rem;
  line-height: 90%;
  margin: 1.5em 0;
  margin-bottom: 1em;
}
h4{
  font-size: 1.5em;
  padding-bottom: 0;
  margin-bottom: 0;
}


p{
  line-height: 150%
}

</style>
