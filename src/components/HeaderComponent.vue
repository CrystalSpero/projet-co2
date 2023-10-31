<template>
    <nav class="nav-header">
      <ul class="nav">
        <div class="logo-container">
          <img :src="require('../assets/logo.png')" alt="Logo" class="logo" />
        </div>
        <li :class="{ active: activeItem === 'Home' }" @mouseover="setActiveItem('home')">
            <router-link class="routerLink" to="/"> Home </router-link>
        </li>
        <li :class="{ active: activeItem === 'Flights' }" @mouseover="setActiveItem('flights')">
            <router-link class="routerLink" to="/flight"> Flights </router-link>
        </li>
        <li>
            <div class="dropdown">
              <span>Cloud computing</span>
              <div class="dropdown-content">
                <ul>
                  <li class="{ active: activeItem === 'CPU' }" @mouseover="setActiveItem('CPU')">
                    <router-link to="/CPU"> CPU </router-link>
                  </li>
                  <li class="{ active: activeItem === 'Storage' }" @mouseover="setActiveItem('Storage')">
                    <router-link to="/Storage"> Storage </router-link>
                  </li>
                  <li class="{ active: activeItem === 'Memory' }" @mouseover="setActiveItem('Memory')">
                    <router-link to="/Memory"> Memory </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        <li :class="{ active: activeItem === 'about' }" @mouseover="setActiveItem('About')">
            <router-link class="routerLink" to="/about"> About </router-link>
        </li>
        <li>
            <div class="dropdown">
              <!-- On change le Login en le nom du l'utilisateur s'il est connecté -->
              <span v-if="$store.state.userName">{{ $store.state.userName }}</span>
              <span v-else>Login</span>
              <div class="dropdown-content">
                <login-view/>
              </div>
            </div>
          </li>
      </ul>
    </nav>
</template>
<script>

  import LoginView from '@/views/LoginView.vue';
  export default {
    name: 'HeaderComponent',
    components: {
      LoginView,
    },
    data() {
      return {
        activeItems: [],
        activeItem: null,
      };
    },
    methods: {
      setActiveItem(item) {
        this.activeItem = item;
      },
    },
  };
  </script>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

  body {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  .routerLink {
    text-decoration: none;
    color: inherit;
  }

  .icon {
    max-width: 160px;
    height: auto;
  }

  .nav {
    background-color: #000000d7;
    display: flex;
    align-items: center;
    margin: 0;
    font-family: 'Viga', sans-serif;
    list-style-type: none;
    padding: 0;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
  }

  .nav li {
    padding: 10px 20px;
    cursor: pointer;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
  }

  .nav li.active:hover {
    border-radius: 5px;
    background-color: #000000d7;
    color: white;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #000000d7;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    color: white;
    list-style: none;
  }

  .dropdown:hover .dropdown-content {
    display: block;
    color: white;
    list-style: none;
  }

  .dropdown-content ul {
    list-style: none;
  }

  .dropdown-content ul li {
    text-decoration: none;
    color: white;
    list-style: none;
  }

.logo-container {
  display: flex;
  justify-content: left;
  align-items: left;
}

.logo {
  max-width: 15%; /* Assurez-vous que l'image ne dépasse pas la largeur du container */
  height: auto;
}
</style>
