<script setup>
    const props = defineProps({
        title: String,
        imageLink: String,
    })

</script>
<template lang="">
    <div  class="is-flex">        
        <div class="card-project">
            <img src="https://place-hold.it/900x500" alt="">
            <div class="center">{{props.title}}</div>
        </div>
    </div>
</template>
