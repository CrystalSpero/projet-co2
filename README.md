# 1. Project title : projet-co2

# 2. Project description : 

    #Our application aims to measure the impact of activities on the environment in terms of greenhouse gas emissions. We use the Climatiq API to calculate the rate
    # of CO2 emitted for an activity given by the user. Users can log in via Microsoft OAuth and Google OAuth, and once logged in, they can choose to calculate their CO2 emissions for
    # different activities, including cloud computing activities, flights, and custom activities. We also provide graphical comparisons of CO2 emissions to help users understand their
    # impact on the environment when traveling by plane.


# 3. Project setup

    ## Be sure to have these installations :
    ### Vuex
    ```
    npm install vuex@next
    ```
    ### Azure msal browser
    ```
    npm install @azure/msal-browser
    ```
    ### Vue3 Google Login
    ```
    npm install vue3-google-login@2.0.20
    ```
    ### Highcharts
    ```
    npm install highcharts
    ```

    ## Compiles and hot-reloads for development
    ```
    npm run serve
    ```


# 4. Usage

    ## HomePage and AboutPage are open without login. To have an access to the application itself, you have to login with Microsoft or Google on the button's dropdown "Login".
    ## You just have to enter the value or choose the the option you want to have the emission you want to know.
    ## In the FlightsPage, you have the access to a graph, when you ask multiple plane travel, you can see the difference between these differents plane travels by a chart.