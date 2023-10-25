<template>
    <div class="home">
        <HeaderView id="header"/>
            <slot/>
    </div>
    
</template>

<script>
import HeaderView from '../components/HeaderComponent.vue';

export default {
    name: 'BaseLayout',
    components: {
        HeaderView,
    },
 }
</script>
<style>
</style>