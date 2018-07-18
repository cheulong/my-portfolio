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
    name: "WorkOverview"
};
</script>

<style lang="scss">
    .WorkOverview{
        P{
            font-size: 1.2em;
            font-weight: bold;
        }
        height: 70vh;
        p{
            
            letter-spacing: 1px;
            span{
                font-weight: normal;
            }
        }
        .brief{
            display: flex;
            height: 120px;
            background: #030e1c;
            justify-content: space-around;
            align-items: center;
        }
        .presentation{
            width: 50%;
            margin:0 auto;
            margin-top: 70px;
            P{
                
            &::before{
                content: 'Presentation:';
                margin-bottom: 10px;
            }
            }
        }
    }
</style>