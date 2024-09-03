<script setup lang="ts">
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Category = {
    name?: string;
};

export type Web = {
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

const webList = data.value?.contents.filter( (contents) => contents.category.theme == "web")

// console.log("★")
// console.dir(webList)

// console.log(data.value?.contents[0].category.theme)



</script>

<template>
    <div id="webComp" class="scroll">
        <!-- <p>Webの画像が並びます</p> -->
        <div id="webSpace">
            <div v-for="web in webList" :key="web.id" class="web">
                <NuxtLink :to="`/${web.category.theme}/${web.id}`">
                    <img :src="web.eyecatch?.url" :alt="web.title" class="webEyecatch"/>
                    <div class="webText">
                        <div class="webTitle">
                            {{ web.title }}
                        </div>
                        <!-- <div class="webCategory">
                            {{ web.category?.name }} ※実際は削除される部分
                        </div> -->
                        <a v-if="web.url != undefined" :href="web.url" class="webUrl">
                            <img src="../assets/images/171534.png" :alt="web.titleのホームページ">
                        </a>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style>

#webComp {
    /* height: 100vh; */
    /* overflow: auto; */
    background-color: rgb(223, 237, 255);
    /* scroll-snap-align: start; */
}

#webSpace {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(2, auto);
}

.web {
    width: 500px;
    height: 450px;
    margin: 0 0 20px 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    background: linear-gradient( 0deg, rgb(52, 144, 255) 0%, rgb(228, 240, 255) 100%);
    background-size: 100% 200%;
}

.web:hover {
    transition:all 0.5s ease-in-out;
    background-position: bottom left;
}

.web a {
    text-decoration: none;
    z-index: 1;
}

.webEyecatch {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.webText {
    height: 100px;
    margin-top: 20px;
    padding-top: 20px;

    display: flex;
    flex-direction: column;
    position: relative;
    border-top: 5px dashed rgb(130, 184, 255);
    color: rgb(27, 74, 131);
}

.webTitle {
    font-size: 1.5em;
    font-weight: bold;
}

.webUrl {
    width: 50px;
    height: 50px;
    padding: 5px;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url(../assets/images/171534.png);
    background-color: rgb(231, 242, 255);
    border-radius: 50%;
    z-index: 5;
}

.webUrl:hover {
    background-color: rgb(27, 74, 131);
}

.webUrl img {
    width: 50px;
    height: 50px;
}

</style>
