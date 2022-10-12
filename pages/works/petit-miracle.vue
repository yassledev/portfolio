<template>
    <span>
        <WorkPageVue 
            img="https://wallpaper.dog/large/274035.jpg"
            :title="$t('petit-miracle.name')" 
            description="Cooming soon" 
        /> 
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