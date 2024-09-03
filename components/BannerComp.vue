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


// export zoomEyecatch = {
//     alert("element");
// }
// }

// const zoomEyecatch = ref(false)
    // var block = document.getElementsByClassName(this)
    // alert("グレー色で画面が覆われて、クリックした画像が大きく出る予定。もう一度バナーをクリックしたら詳細ページへ移動。それ以外をクリックしたらグレーアウトは消える。余力があれば、前後に行けるようにしたい。また余力があれば関連バナーを小さく表示させたい。");
    // this.style.display = 'block';
    // this.$modal.show("modal-content");
    // this.style.display = 'block';
// }

// export const zoomEyecatch {
//     data() {
//         return false
//     }
// }


</script>

<template>
    <div id="bannerComp" class="scroll">
        <!-- <p>バナーの画像が並びます</p> -->
        <div id="bannerSpace">
            <div v-for="banner in bannerList" :key="banner.id" class="banner">
                <div class="bannerEyecatch">
                    <img v-on:click="zoomEyecatch = true" :src="banner.eyecatch?.url" :alt="banner.title" />
                </div>

                <div class="zoomback" name="modal-content">
                    <NuxtLink :to="`/${banner.category.theme}/${banner.id}`" class="zoomimg">
                        <img :src="banner.eyecatch?.url" :alt="banner.title">
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

#bannerComp {
    background-color: rgb(112, 253, 166);
    position: relative;
}

#bannerSpace {
    margin-top: 20px;
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
    /* display: inherit;
    align-items: inherit;
    justify-content: inherit;
    width: 100%;
    height: 100%; */
}

.bannerEyecatch {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bannerEyecatch img {
    display: block;
    max-width: 100%;
    max-height: 300px;
    object-fit: contain;
    box-shadow: 0 10px 25px 0 rgba(32, 53, 39, 0.3);
}

.bannerEyecatch img:hover {
    opacity: 0.5;
    transition: 0.3s;
}

.bannerEyecatch img:checked {

}

.zoomback {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
}
.zoomimg {
    width:50%;
    background-color: rgb(255, 255, 255);
    padding: 20px;
}

.zoomimg img {
    width:100%;
    background-color: aqua;
}

</style>
