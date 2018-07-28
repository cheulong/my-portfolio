<template>
    <div class="WorkTitle">
        <img id="bugTitle" src="./../../assets/bug_logo.svg" alt="bug_logo"/>
        <img id="bugHero" src="./../../assets/bughero.png" alt="bughero">
    </div>
</template>

<script>
export default {
    name: "WorkTitle"
};
</script>

<style lang="scss">
    .WorkTitle{
        display: grid;
        grid-template-columns: 50% 50%;
        height:100vh;
        justify-items: center;
        align-items: center;
        img{
            width: 300px;
            height: auto;
        }
        #bugHero{
            width: 100%;
            height:auto;
            opacity:0.5;
        }
        #bugTitle{
            width: 60%;
            height:auto;
        }
    }

</style>