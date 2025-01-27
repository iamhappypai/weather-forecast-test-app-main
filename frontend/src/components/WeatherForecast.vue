<template>
  
  <div class="hello mt-5">
    <div v-if="weatherForecast?.value" class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h3 class="mt-5">Weather forecast for <span class="font-semibold">{{ weatherForecast.value?.locationName ? weatherForecast.value?.locationName : 'Unknown Location' }}</span></h3>
        <ul class="text-gray-800 text-left p-4">
          <li class="block pb-2">
            Latitude:&nbsp;
            <span class="font-semibold">{{ weatherForecast.value.latitude }}</span>
          </li>
          <li class="block pb-2">
            Longitude:&nbsp;
            <span class="font-semibold">{{ weatherForecast.value.longitude }}</span>
          </li>
          <li class="block pb-2">
            Temperature:&nbsp;
            <span class="font-semibold">
              {{ weatherForecast.value.current_weather.temperature }}&nbsp;
              {{ weatherForecast.value.current_weather_units.temperature }}
            </span>
          </li>
          <li class="block pb-2">
            Wind speed:&nbsp;
            <span class="font-semibold">
              {{ weatherForecast.value.current_weather.windspeed }}&nbsp;
              {{ weatherForecast.value.current_weather_units.windspeed }}
            </span>
          </li>
        </ul>
    </div>

    <div v-if="apiErrorMessage && !weatherForecast?.value" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg" role="alert">
      <span class="block">
        {{ apiErrorMessage }}
      </span>
    </div>
  </div>

</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

