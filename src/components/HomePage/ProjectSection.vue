<template>
  <div class="project">
    <div class="left">

    </div>
    <div class="content3">
      <div class="title">
        <h1>Projects</h1>
      </div>
      <!-- <div id="main">
        <div style="background-color:coral;" >A</div>
        <div style="background-color:lightblue;" >B</div>
        <div style="background-color:khaki;" >C</div>
        <div style="background-color:pink;" >D</div>
        <div style="background-color:lightgrey;">E</div>
        <div style="background-color:lightgreen;" >F</div>
      </div> -->
      <div class="detail">
        <div class="left">
        <h3>Ate Bugs.</h3>
        <router-link to="/portfolio">Show Detail</router-link>
        </div>
        <div class="right">
          <img src="./../../assets/atebug_photo.png" alt="atebug_photo"/>
        </div>
      </div>
    </div>

    <!-- <div class="content">
      <h2>Omino</h2>
      <p>Role: <span>UI design/Coding</span></p>
      <p>Year: <span>2018</span></p>
      <a href="#">Show More</a>
    </div> -->


  </div>
</template>

<script>
export default {
  name: "ProjectSection",
  // mounted() {
    // console.log('df')
  //   var slider = document.querySelector("#main");
  //   var isDown = false;
  //   var startX;
  //   var scrollLeft;
  //   slider.addEventListener("mousedown", e => {
  //     isDown = true;

  //     var x = slider.querySelectorAll("div");
  //     for (var i = 0; i < x.length; i++) {
  //       x[i].style.cursor = "-webkit-grabbing";
  //       x[i].style.minWidth = "60vw";
  //       x[i].style.height = "50vh";
  //       x[i].style.margin = "5vh 5vw";
  //     }

  //     startX = e.pageX - slider.offsetLeft;
  //     scrollLeft = slider.scrollLeft;

  //     console.log("mousedown");
  //   });
  //   slider.addEventListener("mouseleave", () => {
  //     isDown = false;
  //     slider.classList.remove("active");
  //   }),
  //     slider.addEventListener("mouseup", () => {
  //       isDown = false;

  //       slider.classList.remove("active");
  //       var f = Math.ceil(slider.scrollLeft / 957);
  //       if ((slider.scrollLeft / 957) % 1 == 0) {
  //         f = f + 1;
  //       }
  //       if (f * 957 - slider.scrollLeft % 957 < f * 957 - 957 / 2) {
  //         var pos = (f * 957) % slider.scrollLeft;

  //         var it = setInterval(frame, 0);
  //         function frame() {
  //           if (pos <= 0) {
  //             clearInterval(it);
  //           } else {
  //             if (f == 5) {
  //               slider.scrollLeft = (f - 1) * 957;
  //             }
  //             slider.scrollLeft = slider.scrollLeft + 3;
  //             pos -= 3;
  //           }
  //         }
  //       } else {
  //         var it = setInterval(frame, 0);
  //         function frame() {
  //           if (slider.scrollLeft <= (f - 1) * 957) {
  //             clearInterval(it);
  //           } else {
  //             slider.scrollLeft = slider.scrollLeft - 3;
  //           }
  //         }
  //       }
  //       var x = slider.querySelectorAll("div");
  //       for (var i = 0; i < x.length; i++) {
  //         x[i].style.cursor = "-webkit-grab";
  //         x[i].style.minWidth = "70vw";
  //         x[i].style.height = "60vh";
  //         x[i].style.margin = "0";
  //       }
  //     }),
  //     slider.addEventListener("mousemove", e => {
  //       if (!isDown) return;
  //       e.preventDefault();
  //       var x = e.pageX - slider.offsetLeft;
  //       var walk = (x - startX) * 3;
  //       slider.scrollLeft = scrollLeft - walk;
  //     });
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed");
.project {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 10% 90%;
h1 {
  font-size: 6rem;
  line-height: 90%;
  margin-bottom: 0;
}
h2 {
  font-size: 4rem;
}
p {
  span {
    font-family: "Fira Sans Extra Condensed", sans-serif;
    font-weight: bold;
    font-size: 1.2em;
  }
}
}


a {
  display: block;
  margin-top: 30px;
  text-align: center;
  text-decoration: none;
  color: white;
  background: gray;
  font-weight: bold;
  font-size: 0.8em;
  text-transform: uppercase;
  margin-left: 40px;
  width: 180px;
  padding: 15px 15px;
  border-radius: 50px;
  &:hover{
    background: linear-gradient(90deg, rgb(236, 113, 65), rgb(233, 76, 3));
  }
}

.title {
  position: relative;
}

#main {
  cursor: grab;
  position: absolute;
  top: 25%;
  left: 0;
  padding-left: 10%;
  width: 100vw;
  height: 60vh;
  border: 1px solid #c3c3c3;
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: nowrap; /* Safari 6.1+ */
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
}

#main div {
  min-width: 70vw;
  height: 60vh;
  transition: min-width 0.5s, height 0.5s, margin 0.5s;
}
.content3 {
  height: 100vh;
  display: grid;
  grid-template-rows: 30% 70%;
}
.detail{
  display: grid;
  grid-template-columns: 30% 70%;
  .left {
    h3 {
      font-size: 2.5em;
      margin: 80px 50px;
    }
  }
  .right{
    img{
    width: 400px;
    height: auto;
    }
    border:none;
    justify-self: center;
  }
}
@media only screen and (max-width: 915px){
   .project {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .detail{
  display: flex;
  flex-direction: row;
  .left {
    h3 {
      font-size: 2.5em;
      margin: 80px 50px;
    }
  }
  .right{
    img{
    width: 300px;
    height: auto;
    }
    border:none;
    justify-self: center;
  }
}
h1 {
  text-align: center;
  font-size: 5rem;
  line-height: 90%;
  margin-bottom: 0;
}
h2 {
  font-size: 4rem;
}
p {
  span {
    font-family: "Fira Sans Extra Condensed", sans-serif;
    font-weight: bold;
    font-size: 1.2em;
  }
}
}
  }
  @media only screen and (max-width: 615px){
  .detail{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .left{
      margin: 50px auto;
    h3{
      margin: 0 50px!important;
    }
    }
    
  }

    h1 {

  font-size: 4rem!important;
}
h3{
  font-size: 2.5rem!important;
}
    }
</style>
