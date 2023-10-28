<template>
  <base-layout><br>
    <h1 class="title">CO2 Emission Calculator</h1>
    <h3 class="sub-title">ST2AWD: Web Developement for IT engineer IRV and DT groups</h3>
    <router-view />
  </base-layout>
</template>

<script>
import BaseLayout from '../src/views/BaseLayout.vue'

export default {
  name: 'App',
  components: {
    BaseLayout
  },
  methods: {
      changeBackgroundForRoute(routeName) {
        if (routeName === 'flight') {
          // Change the background for the FlightsView
          document.body.style.backgroundImage = 'url("https://th.bing.com/th/id/OIG.2djx6HAPLqwT5QfapgjT?pid=ImgGn&w=1024&h=1024&rs=1")';
        } else if (routeName === 'CPU') {
          // Change the background for the OtherView
          document.body.style.backgroundImage = 'url("https://th.bing.com/th/id/OIG.de0R7O15APr.iQjSR1t5?pid=ImgGn")';
        } else if (routeName === 'Storage') {
          // Change the background for the "Storage" route
          document.body.style.backgroundImage = 'url("https://th.bing.com/th/id/OIG.tFf7cmfwHjr4wLEIJqXq?pid=ImgGn")';
        } else if (routeName === 'Memory') {
          // Change the background for the "Memory" route
          document.body.style.backgroundImage = 'url("https://th.bing.com/th/id/OIG.DIDOD1Au1CIjlYjX_SNA?pid=ImgGn")';
        } else {
          // Set a default background for other routes
          document.body.style.backgroundImage = 'url("https://th.bing.com/th/id/OIG.H7N7GadMxKSbOcpQuS84?pid=ImgGn")';
        }
      }
    },
    watch: {
      $route(to) {
        this.changeBackgroundForRoute(to.name);
      }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Ajustez la hauteur selon vos besoins */
  background-color: #000000b2;
  font-family: 'Viga', sans-serif;
  font-weight: bold;
  font-size: 50px;
  color: white; /* Couleur du texte en blanc */
}

.sub-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Ajustez la hauteur selon vos besoins */
  background-color: #000000b2;
  font-family: 'Viga', sans-serif;
  font-weight: bold;
  font-size: 25px;
  color: white; /* Couleur du texte en blanc */
}

.subsub {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Ajustez la hauteur selon vos besoins */
  background-color: #000000b2;
  font-family: 'Viga', sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: white; /* Couleur du texte en blanc */
}

/* Style pour centrer l'image */
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px; /* Ajustez la hauteur selon vos besoins */
}

.logo {
  width: 500px;
  height: 500px;
}
</style>