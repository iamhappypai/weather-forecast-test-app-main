<template>
  <div>
    <h3>Type a city name to search</h3>
    <GMapAutocomplete @place_changed="placeChanged" class="gmap-autocompolete"/>

    <div>You can also click a location on the map to view the weather forecast</div>
    <div v-if="error" class="mt-5 mb-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg" role="alert">
      <span class="block">
        {{ error }}
      </span>
    </div>
    <GMapMap
      class="gmap-class"
      :center="selectedPlace"
      :zoom="15"
      map-type-id="roadmap"
      ref="gmap"
      @click="onMapClick"
    >
    <GMapMarker
        :key="marker.id"
        v-for="marker in markers"
        :position="marker.position"
    />
    </GMapMap>
  </div>
</template>

<script lang="ts" src="./search-city.component.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.gmap-class {
  height: 500px;
  width: 100%;
}
.gmap-autocompolete {
  width: 250px;
  margin: 10px auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.vue-map-container {
  height: 500px;
  width: 100%;
}

.pac-logo:after {
  display: none;
}

.hdpi.pac-logo:after {
  background-image: none;
}

.pac-item {
  cursor: default;
  padding: 0 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 40px;
  text-align: left;
  border-top: 1px solid #e6e6e6;
  font-size: 11px;
  color: #515151;
}
@tailwind components;
@layer components {
  .pac-target-input {
    @apply w-1/4 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-100 focus:border-primary-300;
  }
}
</style>
