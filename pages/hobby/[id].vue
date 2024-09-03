<script setup lang="ts">
import type {ToDo} from "@/interfaces";
// import Todo from "~/layouts/todo.vue";

const PAGE_TITLE = "ToDo情報";

useHead({
  title: PAGE_TITLE
});

definePageMeta({
    layout: "todo"
});

const route = useRoute();
const todoList =useState<Map<number, ToDo>>("todoList");
const todo = computed(
    (): ToDo => {
        const id = Number(route.params.id);
        return todoList.value.get(id) as ToDo;
    }
);

const level = computed(
    (): string => {
        let level = "--";
        if(todo.value.important === 1) {
            level = "緊急";
        } else if(todo.value.important === 2) {
            level = "ほどほど";
        } else {
            level = "ゆっくり";
        }
        return level;
    }
);

const localNote = computed(
    (): string => {
        let localNote = "--";
        if(todo.value.note != undefined) {
            localNote = todo.value.note;
        }
        return localNote;
    }
);
</script>

<template>
    <section>
        <h2>{{PAGE_TITLE}}</h2>
        <dl>
            <dt>管理番号</dt>
            <dd>{{todo.id}}</dd>
            <dt>題名</dt>
            <dd>{{todo.title}}</dd>
            <dt>重要度</dt>
            <dd>{{level}}</dd>
            <dt>期限</dt>
            <dd>{{todo.deadline}}</dd>
            <dt>内容</dt>
            <dd>{{localNote}}</dd>
        </dl>
    </section>
</template>