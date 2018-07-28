<template>
  <div class="contact">

    <div class="">
      <h1>Get in<br> Touch</h1>

    </div>
    <div class="">
<a href="mailto:searcheulong@gmail.com">You can find me here</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ContactSection'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact{
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows:50% 50%;
  align-items: center;
  margin-left: 5%;
  }
  h1{
  font-size: 6.0rem;
  line-height: 90%;
  margin-bottom: 0;
  }
  h3{
  font-size: 1.6rem;
  }
  a{
    font-weight: bold;
    font-size: 0.8em;
    text-transform: uppercase;
    display: block;
    margin-top: 30px;
    margin-left: 40px;
    width: 180px;
    text-align: center;
    text-decoration: none;
    color: white;
    background: gray;
    padding: 15px 15px;
    border-radius: 50px;
    &:hover{
    background: linear-gradient(90deg, rgb(236, 113, 65), rgb(233, 76, 3));
  }
  }
  @media only screen and (max-width: 815px){
  .contact{
    display: flex;
    flex-direction: column;
    justify-content:center;
    text-align: center;
    padding-left: 0;
    margin-left: 0;
    h1{
      margin: 50px auto;
    }
    a{
      display: inline;
      margin: 50px auto;
    }
    p{
      margin: 50px auto;
      font-size: 1.2rem!important;
    }
  }
  }
    @media only screen and (max-width: 615px){
    h1 {

  font-size: 4rem!important;
}

    }
</style>
