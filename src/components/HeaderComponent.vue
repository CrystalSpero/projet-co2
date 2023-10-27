<template>
    <nav class="nav-header">
      <ul class="nav">
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
        <login-view/>
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
  body {
  margin:0;
  }

  ul {
  list-style: none;
  }

  .routerLink{
    text-decoration: none;
    color: inherit;
  }
  .icon {
    max-width:160px;
    height:auto;
  }

  .nav {
    background-color: #00B8A9;
    display:flex;
    align-items: center;
    margin: 0;
    font-family: 'Quicksand',sans-serif;
    list-style-type: none;
    padding: 0;
    justify-content: center;
    color: black;
    text-decoration:none;
    

  }
  .nav li {
    padding: 10px 20px;
    cursor: pointer;
    color: black;
    text-decoration:none;
    
    
  }

  .nav li.active:hover {
    border-radius: 5px;
    background-color: #c3eaed;
    color: black;
    text-decoration:none;
    
  }

  .dropdown {
    position: relative;

  }

  .dropdown-content {
    
    display: none;
    position: absolute;
    background-color: #87e2d9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    color: black;
    text-decoration:none;
    
  }

  .dropdown:hover .dropdown-content {
    display: block;
    color: black;
    text-decoration:none;
    
  }
</style>