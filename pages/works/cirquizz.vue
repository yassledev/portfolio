<template>
    <span>
        <WorkPageVue 
        img="https://wallpaper.dog/large/274035.jpg"
        :title="$t('cirquizz.name')" 
        :description="$t('cirquizz.description')"
        stack="Mobile App (React Native)"
        :tools="['docker', 'js', 'nodejs', 'mongodb', 'react-native']"
        github="https://github.com/yassledev/cirquizz-react-native"/>
    </span>
</template>

<script setup lang="ts">
    import WorkPageVue from '@/components/WorkPage.vue';

    definePageMeta({
        layout: 'works',
    });
</script>

<style lang="scss" scoped>
</style>