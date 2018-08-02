<template>

  <div class="who">
    <div>
  <h3>Who am I ?</h3>
  <h4>Cheulong Sear</h4>
  <p>I'm a 23 years old cambodian student at CAMT, Chiang Mai university. I love building interfaces and code interactive productions.</p>
  <p>I'm looking for a 8-months internship as front-end developer. I would love to work in Chiang Mai or Bangkok.</p>
  
  </div>
  <div class="photo">
    <img src="./../../assets/profile.png" alt="">
  </div>
  </div>

</template>

<script>
export default {
  name: 'WhoamiSection'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.who{
  display: grid;
  grid-template-columns: 40% 60%;
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

.who{
  width: auto;
  height: 100vh;
}
p{
  line-height: 150%
}
.photo{
  img{
width: 300px;
  height: 400px;
  }
  justify-self: center;
}
 @media only screen and (max-width: 975px){
.who{
  display: flex;
  flex-direction: column;
  height: 160vh;
  .photo{
   width: 300px!important;
  height: 400px;
    margin: 0 auto;
  img{
width: 300px!important;
  height: 400px;

}
  }

}
}
</style>
