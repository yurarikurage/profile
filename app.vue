<script setup lang="ts">
</script>

<template>
  <NuxtLayout>
    <div class="container">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
.disnone {
    display: none;
}

body {
  margin: 0;
  padding: 0;
  font-family: cursive, "Yusei Magic", "Kiwi Maru", "M PLUS Rounded 1c", sans-serif, system-ui;
  font-weight: 400;
  font-style: normal;
  position: relative;
}

.container {
  /* overflow: auto; */
  scroll-snap-type: y mandatory;
  /* position: relative; */
}

.scroll {
  overflow: auto;
  scroll-snap-align: start;
}

</style>