<template>
    <div class="body">
        <h2>FLIGHTS</h2>

        <!-- From choose -->
        <label for="from">From :</label>
        <select v-if="filteredFrom.length > 0" v-model="selectedFrom" id="from">
            <option v-for="fromtxt in filteredFrom" v-bind:key="fromtxt.iata_code" :value="fromtxt.iata_code"> {{fromtxt.name + " : " + fromtxt.iata_code}}</option>
        </select><br><br>

        <!-- To choose -->
        <label for="to">To :</label>
        <select v-if="filteredTo.length > 0" v-model="selectedTo" id="to">
            <option v-for="totxt in filteredTo" v-bind:key="totxt.iata_code" :value="totxt.iata_code"> {{totxt.name + " : " + totxt.iata_code}}</option>
        </select><br><br>

        <!-- Passengers number choose -->
        <label for="passengers">Passengers :</label>
        <input v-model="passengers" id="passengers" type="number"><br><br>

        <!-- Class choose -->
        <label for="class">Class :</label>
        <select v-model="classs" id="class">
            <option value="unknown">Unknown</option>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
        </select><br><br>

        <!-- Calculate the emissions of CO2e -->
        <button @click="Go">Calculate Emissions</button>
        <div v-if="emissions">
            <h2>Emissions Data:</h2>
            <p>{{ emissions.co2e.toFixed(4) + " kg of CO2e" }}</p>
        </div>

        <!-- Chart Container -->
        <div>
            <canvas ref="myChart" style="margin: 300px"></canvas>
        </div>

    </div>
</template>

<script>
import store from '@/store';
import Chart from 'chart.js/auto';

export default {
    name: 'FlightsView',
    beforeRouteEnter (to , from, next) {
        if (store.state.user && store.state.user.name) {
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
            myChart: null, 

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
                body: JSON.stringify ({
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
            .then(this.httpCheckCodeAndParseJson) //if Ok, cyonvert to JSON
            .then(data => {
                this.emissions = data;
                this.generateChartData(); // Use an arrow function to access this.generateChartData
                })
            .catch(err => console.log('Fetch went wrong : ', err))   //If error
        },
        generateChartData() {
            // Extract data for the chart
            const label = `${this.selectedFrom} - ${this.selectedTo}, Passengers: ${this.passengers}, Class: ${this.classs}`;
            const value = this.emissions ? this.emissions.co2e : 0;

            // Create or update the chart
            if (this.myChart) {
                this.myChart.data.labels = [label];
                this.myChart.data.datasets[0].data = [value];
                this.myChart.update();
            } else {
                this.createChart(label, value);
            }
        },

        createChart(label, value) {
            // Create a new chart using Chart.js
            const ctx = this.$refs.myChart;
            this.myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [label],
                    datasets: [{
                        label: 'CO2e Emissions',
                        data: [value],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    }],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        },
        httpCheckCodeAndParseJson (response) {
            return response.ok ? response.json() : Promise.reject(response.json())
        },
    },
};
</script>

<style scoped>
    div{
        margin:0;
    }
    .body{
        text-align: center;
    }
    .input{
    width: 300px;
    height: 20px;
    text-align: center;
    font-family: 'Quicksand',sans-serif;
    border-radius: 15px;
    border: 3px solid #D4C6C6;
    background: #FFF;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
    top: 50%;
    left: 50%;
    margin-bottom: 10px;
    padding: 10px;
  }
  .label{
    font-family: 'Quicksand',sans-serif;
    color:rgb(19, 19, 95);
    font-size: 20px;
    margin-bottom: 50px;
  }
</style>