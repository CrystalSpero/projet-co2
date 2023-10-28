<template>
    <div class="body">
        <h2>STORAGE</h2>

        <!-- Provider choose -->
        <label for="provider_id">Provider:</label>
        <select v-model="provider" id="provider">
            <option value="azure">Azure</option>
            <option value="aws">AWS</option>
            <option value="gcp">GCP</option>
        </select><br><br>

        <!-- Region choose -->
        <label for="region">Region:</label>
        <select v-if="regions" v-model="region" id="region">
            <option v-for="regiontxt in regions.cloud_providers[provider].cpu_regions" v-bind:key="regiontxt" :value="regiontxt"> {{regiontxt}}</option>
        </select><br><br>

        <!-- Storage choose -->
        <label for="storage_type">Storage Type :</label>
        <select v-model="storage_type" id="storage_type">
            <option value="ssd">SSD</option>
            <option value="hdd">HDD</option>
        </select><br><br>

        <!-- Data choose -->
        <label for="data">Data:</label>
        <input v-model="data" id="data" type="number"><br><br>

        <!-- Duration choose -->
        <label for="duration">Duration:</label>
        <input v-model="duration" id="duration" type="number"><br><br>

        <!-- Duration Unit choose -->
        <label for="duration_unit">Duration Unit :</label>
        <select v-model="duration_unit" id="duration_unit">
            <option value="ms">ms</option>
            <option value="s">s</option>
            <option value="m">m</option>
            <option value="h">h</option>
            <option value="day">day</option>
            <option value="year">year</option>
        </select><br><br>

        <!-- Calculate the emissions of CO2e -->
        <button @click="Go">Calculate Emissions</button>
        <div v-if="emissions">
            <h2>Emissions Data:</h2>
            <p>{{ emissions.co2e.toFixed(4) + " kg of CO2e" }}</p>
        </div>
    </div>
</template>

<script>
import store from '@/store';

export default {
    name: 'StorageView',
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
            regions: null,
            storage_type: null,
            data: null,
            duration: null,
            duration_unit: null,
            provider: 'azure', // Default provider

        };
    },
    mounted: function() {
        this.GetRegions()
    },
    methods: {
        GetRegions () {
                const apiKey = "77K5DJ9QQSMFGYNN8PK8MAW6NEDY";
                const theUrl = "https://beta3.api.climatiq.io/compute"
                console.log("region")
                window.fetch( theUrl, {
                    method: 'GET',
                    headers: {
                    'Authorization' : 'Bearer ' + apiKey,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json;charset=utf-8'
                    },            
                })
                .then(this.httpCheckCodeAndParseJson) //if Ok, convert to JSON
                .then(data => this.regions = data)   //Then update emissions
                .catch(err => console.log('Fetch went wrong : ', err))   //If error
        },
        Go() {
            //this.GetRegions()
            //console.log(this.region)
            const apiKey = "77K5DJ9QQSMFGYNN8PK8MAW6NEDY";
            const theUrl = `https://beta3.api.climatiq.io/compute/${this.provider}/storage`;
            window.fetch(theUrl, {  
                method: 'POST',
                headers: {
                    'Authorization' : 'Bearer ' + apiKey,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify ({
                    "region": this.region,
                    "storage_type": this.storage_type,
                    "data": this.data,
                    "duration": this.duration,
                    "duration_unit": this.duration_unit,
                })
            })
            .then(this.httpCheckCodeAndParseJson) //if Ok, convert to JSON
            .then(data => this.emissions = data)   //Then update emissions
            .catch(err => console.log('Fetch went wrong : ', err))   //If error
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
        background-color: #000000b2;
        font-family: 'Viga', sans-serif;
        font-weight: bold;
        font-size: 25px;
        color: white; /* Couleur du texte en blanc */
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