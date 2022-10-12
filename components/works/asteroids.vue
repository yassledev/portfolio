<template>
    <span>
        <WorkPageVue 
        img="/asteroids.gif"
        :title="$t('asteroids.name')" 
        :description="$t('asteroids.description')" 
        stack="C, SDL, CMake"
        :tools="['c']"
        github="https://github.com/yassledev/asteroids"/>
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