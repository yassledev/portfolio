<template>
    <span>
        <WorkPageVue 
            img="/kon.png"
            :title="$t('king-of-namek.name')" 
            :description="$t('king-of-namek.description')" 
            stack=".Net, Threads, Asynchrone, Socket"
            :tools="['c#']"
            github="https://github.com/yassledev/king-of-tokyo"
        />
    </span>
</template>

<script setup lang="ts">
    import WorkPageVue from '@/components/WorkPage.vue';
    import { useI18n } from 'vue-i18n'

    const { t } = useI18n();

    definePageMeta({
        layout: 'works',
    });
</script>

<style lang="scss" scoped>
</style>