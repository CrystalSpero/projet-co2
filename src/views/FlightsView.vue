<template>
    <div class="body">
        <h2>FLIGHTS</h2>

        <!-- From choose -->
        <label for="from">From :   </label>
        <select v-if="filteredFrom.length > 0" v-model="selectedFrom" id="from">
            <option v-for="fromtxt in filteredFrom" v-bind:key="fromtxt.iata_code" :value="fromtxt.iata_code"> {{fromtxt.name + " : " + fromtxt.iata_code}}</option>
        </select><br><br>

        <!-- To choose -->
        <label for="to">To :   </label>
        <select v-if="filteredTo.length > 0" v-model="selectedTo" id="to">
            <option v-for="totxt in filteredTo" v-bind:key="totxt.iata_code" :value="totxt.iata_code"> {{totxt.name + " : " + totxt.iata_code}}</option>
        </select><br><br>

        <!-- Passengers number choose -->
        <label for="passengers">Passengers :   </label>
        <input v-model="passengers" id="passengers" type="number"><br><br>

        <!-- Class choose -->
        <label for="class">Class :   </label>
        <select v-model="classs" id="class">
            <option value="unknown">Unknown</option>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
        </select><br><br>

        <!-- Calculate the emissions of CO2e and generate the chart-->
        <button @click="Go">Calculate Emissions</button>
        <div v-if="emissions">
            <h2>Emissions Data:</h2>
            <p>{{ emissions.co2e.toFixed(4) + " kg of CO2e" }}</p>
        </div>
        <div id="emissionsChart"></div>
    </div>
</template>

<script>
import store from '@/store';
import Highcharts from 'highcharts';

export default {
    name: 'FlightsView',
    beforeRouteEnter (to , from, next) {
        if (store.state.user || store.state.user.name) {
            next();
        } else {
            next('/');
        }
    },
    data() {
        return {
            emissions: null,
            from: null,
            selectedFrom: null,
            to: null,
            selectedTo: null,
            passengers: null,
            classs: null,
            legs: [],
            chartData: [],
        };
    },
    computed: {
    filteredFrom() {
        if (this.from && this.from.response) {
            return this.from.response.filter(item => item && item.iata_code);
        }
        return [];
        },
        filteredTo() {
            if (this.to && this.to.response) {
                return this.to.response.filter(item => item && item.iata_code);
            }
            return [];
        }
    },
    mounted: function() {
        this.GetFrom()
        this.GetTo()
    },
    methods: {
        GetFrom () {
                const theUrl = "https://airlabs.co/api/v9/airports?&api_key=7aa4f005-7d49-4135-ac85-a3a45cd1abdb"
                window.fetch( theUrl, {
                    method: 'GET',           
                })
                .then(this.httpCheckCodeAndParseJson) //if Ok, convert to JSON
                .then(data => this.from = data)   //Then update from
                .catch(err => console.log('Fetch went wrong : ', err))   //If error
        },
        GetTo () {
                const theUrl = "https://airlabs.co/api/v9/airports?&api_key=7aa4f005-7d49-4135-ac85-a3a45cd1abdb"
                window.fetch( theUrl, {
                    method: 'GET',           
                })
                .then(this.httpCheckCodeAndParseJson) //if Ok, convert to JSON
                .then(data => this.to = data)   //Then update to
                .catch(err => console.log('Fetch went wrong : ', err))   //If error
        },
        Go() {
            const apiKey = "77K5DJ9QQSMFGYNN8PK8MAW6NEDY";
            const theUrl = `https://beta3.api.climatiq.io/travel/flights`;

            window.fetch(theUrl, {  
                method: 'POST',
                headers: {
                'Authorization' : 'Bearer ' + apiKey,
                'Accept' : 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                "legs": [
                    {
                    "from": this.selectedFrom,
                    "to": this.selectedTo,
                    "passengers": this.passengers,
                    "class": this.classs,
                    }
                ]
                })
            })
            .then(this.httpCheckCodeAndParseJson)
            .then(data => {
                this.emissions = data;

                const label = `Flight : ${this.selectedFrom} => ${this.selectedTo}, Passengers : ${this.passengers}, Class : ${this.classs}`;

                this.chartData.push({
                    name: label,
                    y: parseFloat(this.emissions.co2e.toFixed(4)), 
                });

                const chartContainer = document.getElementById('emissionsChart');

                Highcharts.chart(chartContainer, {
                chart: {
                    type: 'column',
                },
                title: {
                    text: 'Comparison of flights in terms of CO2 emitted',
                },
                xAxis: {
                    categories: this.chartData.map(item => item.name), 
                },
                series: [
                    {
                    name: 'Emissions',
                    data: this.chartData,
                    },
                ],
                });
            })
            .catch(err => console.log('Fetch went wrong : ', err))
        },
        httpCheckCodeAndParseJson (response) {
            return response.ok ? response.json() : Promise.reject(response.json())
        },
    },
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
    
    .body {
        text-align: center;
        background-color: #000000d7;
        font-family: 'Viga', sans-serif;
        font-weight: bold;
        font-size: 25px;
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

    canvas {
        opacity: 10;
        color: white;
    }

</style>