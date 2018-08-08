<template>
    <div class="Resume">
        <h1>Resume</h1>
        <div class="letter">
            <iframe src="https://drive.google.com/file/d/1RpCbTVWBT0X_qVudxwWnBt_qEpY5uEUC/preview" width="100%" height="100%"></iframe>
        </div>
    </div>
</template>

<script>
export default {
  name: "ResumeLetter"
};
</script>

<style lang="scss">
.Resume {
  h1 {
    font-size: 6rem;
    line-height: 90%;
    margin: 1.3em 0;
    margin-bottom: 50px;
  }
  .letter {
    width: 640px;
    height: 800px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
}
@media only screen and (max-width: 750px) {
  .Resume {
    h1 {
      font-size: 5rem;
      line-height: 90%;
      margin: 1.3em 0;
      margin-bottom: 50px;
      text-align: center;
    }
    .letter {
      width: 90%;
      height: 700px;
      margin: 0 auto;
      margin-bottom: 50px;
    }
  }
}
@media only screen and (max-width: 500px) {
  .Resume {
    h1 {
      font-size: 4rem;
    }
    .letter {
      width: 90%;
      height: 500px;
      margin: 0 auto;
      margin-bottom: 50px;
    }
  }
}
</style>
