<template>
  <div class="home">
    <SearchCity />
    <WeatherForecast />

    <!-- loader ----> 
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50 cursor-not-allowed" aria-hidden="true" v-if="loading">
      <div class="flex justify-center items-center h-screen" role="status" aria-label="Loading">
        <div class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
