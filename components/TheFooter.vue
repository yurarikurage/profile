<script setup lang="ts">
</script>

<template>
    <footer>
        <p>© KURAGE YURARI 2024</p>
    </footer>
</template>


<style>
footer {
    width: 100%;
    height: 20vw;
    text-align:  center;
    background-color: rgb(167, 205, 255);
    animation: footerchange 20s ease infinite;
}

footer p {
    font-size: 1.3vw;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@keyframes footerchange{
  0% {filter:hue-rotate(0deg);}
  25% {filter:hue-rotate(90deg);}
  50% {filter:hue-rotate(180deg);}
  75% {filter:hue-rotate(270deg);}
  100% {filter:hue-rotate(360deg);}
}

</style>

