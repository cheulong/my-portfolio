<template>
    <div class="WorkDev">
       <span>2. Development</span>
       <div class="content1">
           <p>Regarding coding, I did not use any library only Html, Css and a little bit javascript for this project. It is my very first web code. I plan to set up to use wordpress as CMS for back-end of this website in the future. Anyway, I didn't make this website responsible yet, sorry mobile user.</p>
       </div>
    </div>
</template>

<script>
export default {
  name: "WorkDev"
};
</script>

<style lang="scss">
.WorkDev {
  height: 50vh;
  span {
    font-size: 2em;
    padding: 25px 0;
    padding-left: 100px;
    padding-right: 50px;
    background: #030e1c;
  }
  .content1 {
    width: 50%;
    margin: 100px auto;
    line-height: 1.5em;
  }
}
@media only screen and (max-width: 1125px){
  .WorkDev {
  height: 70vh;
    }
  }
@media only screen and (max-width: 645px){
  .WorkDev {
  height: 100vh;
    }
  }
@media only screen and (max-width: 475px){
  .WorkDev {
      height: 110vh;
  span{
    font-size: 1.6em;
    padding-left: 50px;
  }
    }
  }
</style>