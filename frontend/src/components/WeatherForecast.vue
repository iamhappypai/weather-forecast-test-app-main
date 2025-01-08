<template>
  <div v-if="weatherForecast" class="hello">
    <h3>Weather forecast for city</h3>

    {{weatherForecast.latitude }} {{ weatherForecast.longitude}}
    
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>

</style>
