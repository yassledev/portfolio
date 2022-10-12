<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const stacks = [
    { name: "Flutter", image: "flutter.svg" },
    { name: "React Native", image: "react-native.svg" },
    { name: "Node JS", image: "nodejs.svg" },
    { name: "Nuxt", image: "nuxt.svg" },
    { name: "Vue", image: "vue.svg" },
    { name: "Nest JS", image: "nestjs.svg" },
    { name: "Express", image: "express.png" },
    { name: "MongoDB", image: "mongodb.svg" },
    { name: "Docker", image: "docker.svg" },
    { name: "Bootstrap", image: "bootstrap.svg" },
    { name: "Heroku", image: "heroku.svg" },
    { name: "C", image: "c.svg" },
    { name: "C#", image: "c_sharp.svg" },
]
function getStack(name: String) {
    return stacks.filter((s) => s.name == name)[0];
}
const { t } = useI18n();
const projets = [
    {
        name: "Cirquizz", description: t('cirquizz.description'), stacks: t('cirquizz.stack'), image: "/cirquizz.png", technos: [
            "Docker", "Node JS", "MongoDB", "React Native"
        ],
        github: "https://github.com/yassledev/cirquizz-react-native"
    },
    {
        name: "King Of Namek", description: t('king-of-namek.description'), stacks: t('king-of-namek.stack'), image: "/kon.png", technos: [
            "C#"
        ],
        github: "https://github.com/yassledev/king-of-tokyo"
    },
    {
        name: "Asteroids", description: t('asteroids.description'), stacks: t('asteroids.stack'), image: "/asteroids.gif", technos: [
            "C"
        ],
        github: "https://github.com/yassledev/asteroids"
    },
    {
        name: "Erp Money", description: t('erp-money.description'), stacks: t('erp-money.stack'), image: "/money.png", technos: [
            "Bootstrap", "Docker", "Node JS", "Nuxt", "Vue", "Heroku", "MongoDB"
        ],
        github: "https://github.com/yassledev/erp-money-frontend"
    },
    // { name: "TTAF", description: t('ttaf.description'), stacks: "", image: "", technos: [] },
    // { name: "Custo Tools", description: t('custo-tools.description'), stacks: "", image: "", technos: [] },
    // { name: "Petit Miracle", description: t('petit-miracle.description'), stacks: "", image: "", technos: [] },
    // { name: "Celebration Story", description: t('celebration-story.description'), stacks: "", image: "", technos: [] },
]
</script>

<template>
    <section class="section is-medium bg-dd">
        <div class="container has-text-centered">
            <h1 class="title is-1 is-spaced" style="font-weight: 900;">{{$t('projet')}}</h1>
            <div class="columns is-multiline">
                <a class="column is-4" v-for="projet in projets" :key="`1-${projet.name}`" :href="projet.github"
                    target="_blank">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img :src="projet.image" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">{{projet.name}}</p>
                                    <p class="subtitle is-6">{{projet.stacks}}</p>
                                </div>
                            </div>
                            <div class="content">
                                {{projet.description}}
                            </div>
                            <div class="content">
                                <div class="is-vcentered columns is-mobile is-multiline is-centered">
                                    <div class="column is-narrow " v-for="(techno, index) in projet.technos"
                                        :key="index">
                                        <span :data-tooltip="getStack(techno).name" class="pb-5"
                                            style="border-bottom: none !important; cursor: inherit;">
                                            <img class="is-inline-block image  grey" :src="`/${getStack(techno).image}`"
                                                width="40">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>


<style lang="scss">
    .card .card-image,
    .card .card-image .image img {
        height: 250px;
    }

    .card {
        height: 100%;
        will-change: transform;

        &:hover {
            transform: scale(1.02);
            cursor: pointer;
        }
    }

    .bg-dd {
        padding: 5rem !important;
        margin: 0;
        background-image: linear-gradient(180deg, rgba(57, 177, 214, 0.075), transparent 1.5rem);
    }
</style>