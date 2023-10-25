<template>
    <div class="body">
        <h1>CPU</h1>
        <label class="label" for="select">Provider</label><br>
        <select name="provider" id="provider">
            <option value="ex1">ex1</option>
            <option value="ex2">ex2</option>
            <option value="ex3">ex3</option>
        </select><br>

        <label class="label" for="select">Region</label><br>
        <select name="region" id="region">
            <option value="ex1">ex1</option>
            <option value="ex2">ex2</option>
            <option value="ex3">ex3</option>
        </select><br>

        <label class="label" for="select">Number of CPU</label><br>
        <input class="input" type="int"><br>

        <label class="label" for="select">CPU load</label><br>
        <input class="input" type="int"><br>

        <label class="label" for="select">Running duration</label><br>
        <input class="input" type="int"><br>

        <label class="label" for="select">Duration unit</label><br>
        <select name="duration_unit" id="duration_unit">
            <option value="ex1">ex1</option>
            <option value="ex2">ex2</option>
            <option value="ex3">ex3</option>
        </select>
    </div>
</template>

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