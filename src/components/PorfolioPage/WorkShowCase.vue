<template>
    <div class="WorkShowCase">
        <div class="image">
         <img src="./../../assets/project/1.png" alt="1">
         <img src="./../../assets/project/2.png" alt="2">
         <img src="./../../assets/project/3.png" alt="3">
         <img src="./../../assets/project/5.png" alt="5">
         <img src="./../../assets/project/4.png" alt="4">
       </div>
    </div>
</template>

<script>
export default {
  name: 'WorkShowCase'
}
</script>

<style lang="scss">
.image {
  width: 70%;
  display: flex;
  margin: 10px auto;
  flex-wrap: wrap;
  img {
    margin: 10px;
    width: 47%;
    height: 350px;
    &:nth-last-child(1) {
      width: 90%;
      margin: 0 auto;
      height: auto;
      margin-bottom: 50px;
    }
  }
  transition: 1s all ease-out;
  opacity: 0;
  &.fade-in {
    opacity: 1;
  }
}
@media only screen and (max-width: 970px) {
  img {
    margin: 10px auto !important;
    width: 90% !important;
    height: 100% !important;
    &:nth-last-child(1) {
      width: 90%;
      margin: 0 auto;
      height: auto;
      margin-bottom: 50px;
    }
  }
}
</style>
