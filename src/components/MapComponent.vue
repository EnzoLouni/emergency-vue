<template>
  <div class="map">
    <l-map ref="map" v-model:zoom="zoom" :center="[45.759, 4.841]" :options="{ zoomControl: false, dragging : false }">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>
  
<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 12.25,
    };
  },
};
</script>
