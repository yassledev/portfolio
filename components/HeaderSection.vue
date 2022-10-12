<template>
    <div id="content">
        <section class="section pt-0 is-relative is-medium">
            <img class="is-hidden-touch is-image is-fullwidth" style="position: absolute;top; 0;bottom: 0;left: 0;object-fit: cover;height: 100%;width: 50%;" src="/banner.png">
            <div class="is-relative">
                <nav class="navbar py-4" style="background-color: transparent;">
                    <div class="navbar-brand">
                    <a class="navbar-item is-hidden-touch">
                        
                    </a>

                    <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                    </div>
                    <div class="navbar-menu">
                        <div class="navbar-end">
                        </div>
                    </div>
                </nav>
                <div class="container is-fluid">
                    <div class="pt-5 columns is-multiline is-vcentered">
                    <div class="column is-12 is-5-desktop ml-auto">
                        <div class="mb-5 mt-5">
                            <h2 class="mb-5 is-size-1 is-size-3-mobile has-text-weight-bold">{{$t('whoami.title')}}</h2>
                            <p class="subtitle has-text-grey mb-5" style="line-height:2rem;">
                                {{$t('whoami.description')}}
                                <strong class="has-text-primary">{{$t('whoami.desc-bold')}}</strong>
                            </p>
                            <div class="buttons is-centered-mobile">
                                <a href="mailto:yassledev@outlook.com" class="button is-primary">{{$t('whoami.contact')}}</a>

                            </div>
                        </div>
                        <div class="pt-5 is-vcentered columns is-mobile is-multiline">
                            <div class="column mb-5 has-text-centered" v-for="(stack, index) in stacks" :key="index">
                                <span :data-tooltip="stack.name" class="pb-5" style="border-bottom: none !important; cursor: inherit;">
                                    <img class="is-inline-block image is-fullwidth grey" :src="`/${stack.image}`" :alt="stack.name">
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    const stacks = [
        { name: "Flutter", image: "flutter.svg"},
        { name: "React Native", image: "react-native.svg"},
        { name: "Node JS", image: "nodejs.svg"},
        { name: "Nuxt", image: "nuxt.svg"},
        { name: "Vue", image: "vue.svg"},
        { name: "Nest JS", image: "nestjs.svg"},
        { name: "Express", image: "express.png"},
        { name: "MongoDB", image: "mongodb.svg"},
        { name: "Docker", image: "docker.svg"},
    ]
</script>

<style lang="scss" scoped>
    img.grey {
        filter: grayscale(1);

        &:hover {
            filter: grayscale(0);
        }
    }
</style>