<template>
    <div class="WorkDesign">
        <span>1. Design</span>
        <div class="content">
        <div id="design">
            <h2>Typography:</h2>
            <h4>Segoe Script</h4>
            <p class="segoe">The quick brown fox jumps over the lazy dog 1234567890</p>
            <h4>Raleway</h4>
            <div class="raleway">
                <p>The quick brown fox jumps over the lazy dog 1234567890</p>
                <p><i>The quick brown fox jumps over the lazy dog 1234567890</i></p>
            </div>
            <h2>Color</h2>
            <div class="icon">
                <div class="brown">
                    <div class="color"></div>
                    <div><p>#5A250E</p></div>
                </div>
                <div class="black">
                    <div class="color"></div>
                    <div><p>#C6C6C6</p></div>
                </div>
            </div>
        </div>
        <div class="pic">
            <img src="./../../assets/bugbody.png" alt="bugbody">
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "WorkDesign"
};
</script>

<style lang="scss">


@import url('https://fonts.googleapis.com/css?family=Kalam|Raleway');
.WorkDesign {
    .raleway{
        p{
            font-family: 'Raleway', sans-serif;
        }
    }
    .segoe{
            font-family: 'Kalam',cursive;
    }
  span {
    font-size: 2em;
    padding: 25px 0;
    padding-left: 100px;
    padding-right: 50px;
    background: #030e1c;
  }
  .icon {
    display: flex;
  }
  .brown {
    width: 100px;
    .color {
      background: #5a250e;
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }
    p {
      font-size: 0.8em;
    }
  }
  .black {
    width: 100px;
    justify-content: center;
    align-content: center;
    .color {
      background: #c6c6c6;
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }
    p {
      font-size: 0.8em;
    }
  }

.content {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 70%;
  margin: 100px auto;
  .pic {
      justify-self: center;
        align-self: center;
    img {
      width: 400px;
      transform: rotate(5deg);
    }
  }
}
}
 @media only screen and (max-width: 1280px){
  .WorkDesign {
    .content{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      #design{
        margin: 50px auto;
        width:445px;
      }
    }
  }
}
 @media only screen and (max-width: 555px){
    .WorkDesign {
      margin-top: 50px;
    }
   #design{
     width: 90vw!important;
     margin: 50px auto;
   }
   img{
     width: 100%!important;
     height: auto;
   }
}
@media only screen and (max-width: 475px){
  .WorkDesign{
span{
    font-size: 1.6em;
    padding-left: 50px;
  }
  }
}

</style>