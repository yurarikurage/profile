<script setup lang="ts">
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Category = {
    name?: string;
};

export type hobby = {
  title?: string;
  content?: string;
  eyecatch?: MicroCMSImage;
  category: (MicroCMSListContent & Category) | null;
  url?: string;
};

const { data } = await useMicroCMSGetList({
  endpoint: "works",
  queries: { limit: 100 }
});

const hobbyList = data.value?.contents.filter( (contents) => contents.category.theme == "hobby")

console.log("★")
console.dir(hobbyList)

console.log(data.value?.contents[0].category.theme)
console.log(hobbyList[0].tag)


</script>

<template>
    <div id="hobbyComp" class="scroll">
        <div>
            <p>趣味の画像が並びます</p>
            <p>種類順に並び替えられるよ</p>
        </div>
        <div id="hobbySpace">
            <div v-for="hobby in hobbyList" :key="hobby.id" class="hobby">
                <NuxtLink :to="`/${hobby.category.theme}/${hobby.id}`">
                    <img :src="hobby.eyecatch?.url" :alt="hobby.title"/>
                    <div class="hobbyText">
                        <div class="hobbyTitle">
                            {{ hobby.title }}
                        </div>
                        <div class="hobbyTag">
                            <p v-for="tag in hobby.tag" :key="hobby.tag">
                                #{{ tag }}
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style>

#hobbyComp {
    background-color: rgb(220, 167, 255);
    display: flex;
}

#hobbySpace {
    margin-top: 20px;
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(1, auto);
}

.hobby {
    width: 300px;
    height: 600px;
    margin: 0 0 20px 20px;
    padding: 30px;
    background-color: rgb(226, 208, 255);
}

.hobby a {
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
    width: 100%;
    height: 100%;
}

.hobby img {
    display: block;
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.hobbyText {
    /* height: 100px; */
    margin-top: 20px;
    padding-top: 20px;

    display: flex;
    flex-direction: column;
    position: relative;
    border-top: 5px dashed rgb(153, 130, 255);
    color: rgb(89, 27, 131);
}

.hobbyTitle {
    font-size: 1.5em;
    font-weight: bold;
}

.hobbyTag {
    display: flex;
}

.hobbyTag p {
    margin: 0;
    padding-right: 5px;
}

</style>
