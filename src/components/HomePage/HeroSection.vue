<template>
  <div class="hero" >

    <div class="heroContent">
      <h1>Cheulong<br>Sear</h1>
      <h3>Frontend Dev</h3>
      <p>I’m a Software Engineering student at CAMT, CMU</p>
      <p>Looking for a <strong>internship.</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$sub-font: Raleway, sans-serif;

.hero{
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns:100%;
  align-items: center;
  justify-items: center;
}
.heroContent{
  text-align: center;
}
h1{
  text-transform: uppercase;
  font-weight: 700;
  font-size: 5.0rem;
  line-height: 90%;
  margin-bottom: 0;
}
h3{
  font-family: $sub-font;
  font-size: 1.6rem;
}
 @media only screen and (max-width: 680px){
    h1{

  font-size: 4.0rem;

}
h3{
  font-size: 1.4rem;
}
}
@media only screen and (max-width: 500px){
    h1{

  font-size: 3.0rem;

}
p{
  margin: 10px 30px;
  font-size: 0.9rem;
}
  }
</style>
