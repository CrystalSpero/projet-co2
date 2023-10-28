<template>
    <div class="about-us">
      <h1>ABOUT US</h1>
      <p>
        Notre application vise à mesurer l'impact des activités sur l'environnement en termes d'émissions de gaz à effet de serre. Nous utilisons l'API Climatiq pour calculer le taux de CO2 émis pour une activité donnée par l'utilisateur.
      </p>
      <p>
        Les utilisateurs peuvent se connecter via Microsoft OAuth et Google OAuth, et une fois connectés, ils peuvent choisir de calculer leurs émissions de CO2 pour différentes activités, y compris les activités de cloud computing, les vols et les activités personnalisées.
      </p>
      <p>
        Nous fournissons également des comparaisons graphiques des émissions de CO2 pour aider les utilisateurs à comprendre leur impact sur l'environnement.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
  };
  </script>
  
  <style scoped>
  .about-us {
    padding: 20px;
  }
  
  .about-us h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .about-us p {
    font-size: 1.2em;
    line-height: 1.6;
  }
  </style>