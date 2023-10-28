<template>
  <base-layout>
    <h1>CO2 Emission Calculator</h1>
    <router-view/>
  </base-layout>
</template>

<script>
import BaseLayout from '../src/views/BaseLayout.vue'

export default {
  name: 'App',
  components: {
    BaseLayout
  }
}

</script>