<template>
    <div class="body">
        <h1>CO2 Emission Calculator</h1>
        <label for="provider_id">Provider:</label>
        <select v-model="provider" id="provider">
            <option value="azure">Azure</option>
            <option value="aws">AWS</option>
            <option value="gcp">GCP</option>
        </select><br><br>

        <label for="region">Region:</label>
        <input v-model="region" id="region" type="text"><br><br>
        <p>{{ regions }}</p>

        <label for="cpu_count">CPU Count:</label>
        <input v-model="cpu_count" id="cpu-count" type="number"><br><br>

        <label for="duration">Duration:</label>
        <input v-model="duration" id="duration" type="number"><br><br>

        <button @click="Go">Calculate Emissions</button>

        <div v-if="emissions">
            <h2>Emissions Data:</h2>
            <p>{{ emissions }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            emissions: null,
            regions: null
        };
    },
    watch: {
        provider(newProvider) {
            this.region = this.regions[newProvider][0];
        }
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
            console.log(this.region)
            const apiKey = "77K5DJ9QQSMFGYNN8PK8MAW6NEDY";
            const theUrl = `https://beta3.api.climatiq.io/compute/${this.provider}/cpu`;
            window.fetch(theUrl, {  
                method: 'POST',
                headers: {
                    'Authorization' : 'Bearer ' + apiKey,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify ({
                    "cpu_count": 1,
                    "region": this.region,
                    "cpu_load": 1,
                    "duration": 1,
                    "duration_unit": "h"
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