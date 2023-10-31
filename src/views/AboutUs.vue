<template>
    <div class="body">
      <h2>ABOUT US</h2>
      <p>Our application aims to measure the impact of activities on the environment in terms of greenhouse gas emissions. We use the Climatiq API to calculate the rate of CO2 emitted for an activity given by the user.</p>
      <p>Users can log in via Microsoft OAuth and Google OAuth, and once logged in, they can choose to calculate their CO2 emissions for different activities, including cloud computing activities, flights, and custom activities.</p>
      <p>We also provide graphical comparisons of CO2 emissions to help users understand their impact on the environment when traveling by plane.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
  };
  </script>
  
<style>
  .body {
    text-align: center;
    background-color: #000000d7;
    font-family: 'Viga', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: white; /* Couleur du texte en blanc */
    margin-bottom: 50px; /* Ajoutez cette ligne */
}

label {
    font-family: 'Viga', sans-serif;
    font-size: 20px;
    text-align: center;
}

select, input {
    border: 3px solid white;
    border-radius: 5px;
    color: black;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
}

button {
    font-size: 20px;
}

</style>