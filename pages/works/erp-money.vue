<template>
    <span>
        <WorkPageVue 
        img="https://wallpaper.dog/large/274035.jpg"
        :title="$t('erp-money.name')" 
        :description="$t('erp-money.description')" 
        stack="Front-end (Nuxt 2), Back-end (Express)"
        :tools="['bootstrap', 'docker', 'js', 'nodejs', 'nuxt', 'vue', 'heroku', 'mongodb']"
        github="https://github.com/yassledev/erp-money-frontend"/>
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