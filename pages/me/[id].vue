<script setup lang="ts">
// import type {ToDo} from "@/interfaces";
// import Todo from "~/layouts/todo.vue";

const { data } = await useMicroCMSGetList({
  endpoint: "blogs",
});

</script>

<template>
    <section>
        <h2>Web画面</h2>
    </section>
</template>