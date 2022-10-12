<template>
    <!-- <section class="hero is-fullheight is-black">
        <img class="bg-img" :src="props.img" alt="">
        <div class="container is-fluid" style="height: 30vh; display: flex; justify-content: center; align-items: center;">
            <div class="column is-4-desktop is-12 ml-auto">
                <div class="mb-5">
                    <h1 class="title is-spaced is-1 is-family-secondary">{{props.title}}</h1>
                    <hr style="opacity: 0.5;"/>
                    <h2 class="subtitle is-spaced">
                        {{props.description}}
                    </h2>
                    <div class="mb-4" v-if="props.stack != ''">
                        <p class="title is-4 is-family-secondary" style="margin-bottom: 2rem">Technos</p>
                        <p class="subtitle is-5">{{props.stack}}</p>
                    </div>
                    <div class="mb-4" v-if="props.tools.length">
                        <p class="title is-4 mb-3 is-family-secondary">{{$t('works.tools')}}</p>
                        <span v-for="(tool, index) in props.tools" :key="index" :data-tooltip="info[tool]"  style="border-bottom: none !important; cursor: inherit;">
                            <img :src="`/${tools[tool]}`" width="50" class="mr-4" />
                        </span>
                    </div>
                    <div v-if="props.github">
                        <p class="title is-4 mb-3 is-family-secondary">Read more on Github</p>

                        <a :href="props.github" target="_blank"> 
                            <img src="/github.svg" alt="" width="50" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
</template>

<script setup lang="ts">
    // import 'vue3-carousel/dist/carousel.css'
    // import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    // const tools = {
    //     "js": "js-icon.svg",
    //     "docker": "docker.svg",
    //     "nodejs": "nodejs.svg",
    //     "mongodb": "mongodb.svg",
    //     "react-native": "react-native.svg",
    //     "bootstrap": "bootstrap.svg",
    //     "heroku": "heroku.svg",
    //     "nuxt": "nuxt.svg",
    //     "vue": "vue.svg",
    //     "express": "express.svg",
    //     "c#": "c_sharp.svg",
    //     "c": "c.svg"
    // }
    // const info = {
    //     "js": "Javascript",
    //     "docker": "Docker",
    //     "nodejs": "NodeJS",
    //     "mongodb": "MongoDB",
    //     "react-native": "React Native",
    //     "c#": "C#",
    //     "c": "C",
    //     "heroku": "Heroku",
    //     "nuxt": "Nuxt",
    //     "vue": "Vue",
    //     "express": "Express",
    //     "bootstrap": "Bootstrap"
    // }
    // const props = defineProps({
    //     img: {
    //         type: String,
    //         required: true
    //     },
    //     title: {
    //         type: String,
    //         required: true
    //     },
    //     description: {
    //         type: String,
    //         required: true
    //     },
    //     stack: {
    //         type: String,
    //         default: ""
    //     },
    //     tools: {
    //         type: Array<String>,
    //         default: []
    //     },
    //     links: {
    //         type: Array,
    //         default: []
    //     },
    //     github: {
    //         type: String,
    //         default: ""
    //     }
    // });

    // function joinDescription(){ return props.description}
</script>

<style lang="scss">
    /* Hide scrollbar for Chrome, Safari and Opera */
    // body::-webkit-scrollbar {
    //     display: none;
    // }

    // /* Hide scrollbar for IE, Edge and Firefox */
    // body {
    //     -ms-overflow-style: none;  /* IE and Edge */
    //     scrollbar-width: none;  /* Firefox */
    // }
    // .bg-img {
    //     pointer-events: none;
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    //     object-fit: cover;
    //     opacity: .6;
    // }
</style>