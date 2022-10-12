<template>
  <nav class="navbar is-black mt-2" role="navigation" aria-label="main navigation" style="position: fixed; width: 100%; background-color: transparent">
    <div class="container">
    
    <div class="navbar-menu">
      <div class="navbar-start"  style="flex-grow: 1; justify-content: center;">
        <RouterLink :to="route.to" v-for="route in routes" class="navbar-item is-family-secondary" style="font-size: 24px;">
          {{route.name}}
        </RouterLink>
      </div>
    </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const routes = [
    { name: "Cirquizz", to: "/works/cirquizz" },
    { name: "King of Namek", to: "/works/king-of-namek" },
    { name: "Asteroids", to: "/works/asteroids" },
    { name: "ERP Money", to: "/works/erp-money" },
    { name: "TTAF", to: "/works/ttaf" },
    { name: "Custo Tools", to: "/works/custo-tools" },
    { name: "Petit Miracle", to: "/works/petit-miracle" },
    { name: "Celebration Story", to: "/works/celebration-story" },
  ]
</script>

<style lang="scss">
  .router-link-active {
    background-color: transparent !important;
    border-bottom: 2px solid white !important;
  }
  a.router-link-active {
    font-size:2 8px !important;
  }
</style>