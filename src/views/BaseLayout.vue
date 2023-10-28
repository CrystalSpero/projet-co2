<template>
    <div class="home">
        <HeaderView id="header"/>
            <slot/>
        <FooterView id="footer"/>
    </div>
    
</template>

<script>
import HeaderView from '../components/HeaderComponent.vue';
import FooterView from '../components/FooterComponent.vue'

export default {
    name: 'BaseLayout',
    components: {
        HeaderView,
        FooterView
    },
 }
</script>
<style>
</style>