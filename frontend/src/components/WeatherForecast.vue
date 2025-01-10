<template>
  
  <div v-if="weatherForecast" class="hello mt-5">
    <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h3 class="mt-5">Weather forecast for <span class="font-semibold">{{ weatherForecast.locationName }}</span></h3>


        <ul class="text-gray-800 text-left p-4">
          <li class="pb-2">Latitude: {{ weatherForecast.latitude }}</li>
          <li class="pb-2">Longitude: {{ weatherForecast.longitude }}</li>
          <li class="pb-2">Item 3: You can add more content.</li>
          <li class="pb-2">Item 4: The last item in the list.</li>
        </ul>
        <p class="mt-2 text-gray-600">
          This is a simple description of the card content. You can add more details or a summary here.
        </p>
    </div>
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>

</style>
