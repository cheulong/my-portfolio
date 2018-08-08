<template>
    <div class="WorkOverview">
        <div class="brief">
            <p>Year: <span>2017</span></p>
            <p>Role: <span>UI Dev</span></p>
            <p>Overview: <span>Ate Bugs is the first Insect Tapas restaurant in Cambodia ever.</span></p>
        </div>
        <div class="presentation">
            <p><br/><span>Ate Bugs is a simple website design from my imagination. It is about a insect restaurant from Siam Reap, Cambodia.</span></p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WorkOverview'
}
</script>

<style lang="scss">
.WorkOverview {
  p {
    font-size: 1.2em;
    font-weight: bold;
  }
  height: 70vh;
  p {
    margin: 0 20px;
    letter-spacing: 1px;
    span {
      font-weight: normal;
    }
  }
  .brief {
    display: flex;
    height: 120px;
    background: #030e1c;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .presentation {
    width: 50%;
    margin: 0 auto;
    margin-top: 70px;
    text-align: center;
    p {
      &::before {
        content: "Presentation:";
        margin-bottom: 10px;
      }
    }
  }
  opacity: 0;
  transition: 1s all ease-out;

  &.fade-in {
    opacity: 1;
  }
}
@media only screen and (max-width: 735px) {
  .WorkOverview {
    height: 100vh;
  }
}
@media only screen and (max-width: 430px) {
  .WorkOverview {
    height: 110vh;
  }
}
</style>
