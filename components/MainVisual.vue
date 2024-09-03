<script setup lang="ts">
</script>

<template>
    <div id="mainVisual" class="scroll">
        <div class="mainText">
            <h1>YURARI KURAGE</h1>
            <!-- <p>ここはメイン画像が表示されます</p> -->
        </div>
    </div>
</template>

<style>
#mainVisual {
    height: 100vh;
    text-align:  center;
    background-color: rgb(58, 104, 165);
    background-image: url(../assets/images/24387010_s.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: soft-light;
    animation: jfchange 20s ease infinite;
}

.mainText {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-shadow: 2px 2px 5px #333;
    font-size: 30px;
}

@keyframes jfchange{
  0% {filter:hue-rotate(0deg);}
  25% {filter:hue-rotate(90deg);}
  50% {filter:hue-rotate(180deg);}
  75% {filter:hue-rotate(270deg);}
  100% {filter:hue-rotate(360deg);}
}
</style>
