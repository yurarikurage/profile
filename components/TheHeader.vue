<script setup lang="ts">
</script>

<template>
    <header>
        <h1><a href="#"><img class="logo" src="../assets/images/25327386.png" alt="logo "></a></h1>
        <ul id="nav">
            <li><a href="#webComp">Webサイト</a></li>
            <li><a href="#bannerComp">バナー</a></li>
            <li><a href="#hobbyComp">その他</a></li>
            <li><a href="#meComp">自分について</a></li>
        </ul>
    </header>
</template>

<style>

header {
    width: 100%;
    position: fixed;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    /* position: sticky; */
    margin-left: 20px;
    height: 100px;
}

#nav {
    margin-right: 20px;
}

#nav li {
    width: 150px;
    float: left;
    list-style: none;
    text-align: center;
}

#nav li a {
    font-size: 1.5em;
    text-decoration: none;

}

#nav li a:hover {
    /* background: rgb(rgb(255, 255, 255), 0.5); */
    opacity: 0.5;
    transition: 0.3s;

}

</style>
