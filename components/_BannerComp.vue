<script setup lang="ts">
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Category = {
    name?: string;
};

export type Banner = {
  title?: string;
  content?: string;
  eyecatch?: MicroCMSImage;
  category: (MicroCMSListContent & Category) | null;
//   url?: string;
};

const { data } = await useMicroCMSGetList({
  endpoint: "works",
  queries: { limit: 100 }
});

const bannerList = data.value?.contents.filter( (contents) => contents.category.theme == "banner")

// console.log("★")
// console.dir(bannerList)

// console.log(data.value?.contents[0].category.theme)


</script>

<template>
    <div id="bannerComp">
        <p>バナーの画像が並びます</p>
        <div id="bannerSpace">
            <div v-for="banner in bannerList" :key="banner.id" class="banner">
                <NuxtLink :to="`/${banner.category.theme}/${banner.id}`">
                    <img :src="banner.eyecatch?.url" :alt="banner.title" class="bannerEyecatch"/>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style>

#bannerComp {
    height: 100vh;
    overflow: auto;
    background-color: rgb(112, 253, 166);
    scroll-snap-align: start;

}

#bannerSpace {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(3, auto);
}

.banner {
    width: 300px;
    height: 300px;
    margin: 0 0 20px 20px;
    padding: 30px;
    background-color: rgb(215, 255, 229);
}

.banner a {
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
    width: 100%;
    height: 100%;
}

.bannerEyecatch {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: contain;
    box-shadow: 0 10px 25px 0 rgba(32, 53, 39, 0.3);
}
.bannerEyecatch:hover {
    opacity:0.5;
	transition:0.3s;
}

</style>
