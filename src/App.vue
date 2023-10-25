<template>
  <base-layout>
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