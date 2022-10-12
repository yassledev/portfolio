<script setup lang="ts">
  import FooterVue from '@/components/Footer.vue';
  import HeaderSectionVue from '@/components/HeaderSection.vue';
  import ProjectSectionVue from '@/components/ProjectSection.vue';
  // import { useRouter } from 'vue-router';
  // const router = useRouter();
  // router.push('/works/cirquizz')
</script>

<template>
  <main>
    <div>
      <HeaderSectionVue />
      <ProjectSectionVue />
    </div>
    <FooterVue />
  </main>
</template>

