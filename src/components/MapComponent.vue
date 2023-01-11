<template>
  <div class="map">
    <l-map ref="map" v-model:zoom="zoom" :center="lyonCenter" :options="{ zoomControl: false, dragging : false }">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <ul>
        <li v-for="accident in accidents" :key="accident">
          <l-marker :lat-lng="[accident.lattitude, accident.longitude]" :icon="fireIcon" >
            <l-tooltip>
              <h4>Sinistre N°{{accident.id}}</h4> Intensité <strong>{{ accident.intensity }}</strong>
              <ul>
                     <h5>Agents mobilisés :</h5>
                     <li v-for="agent in accident.agents" :key="agent">
                        {{ agent.name }}
                     </li>
                     <h5>Vehicules mobilisés :</h5>
                     <li v-for="vehicle in accident.vehicles" :key="vehicle">
                        Vehicle N°{{ vehicle.id }}
                     </li>
                  </ul>
            </l-tooltip> 
          </l-marker>
        </li>
        <li v-for="station in stations" :key="station" >
          <l-marker :lat-lng="[station.lattitude, station.longitude]" :icon="stationIcon">
            <l-tooltip>
              <h4>{{station.name}}</h4>
                  <ul>
                     <h5>Agents libres :</h5>
                     <li v-for="agent in station.agents" :key="agent">
                        {{ agent.name }}
                     </li>
                     <h5>Vehicules disponibles :</h5>
                     <li v-for="vehicle in station.vehicles" :key="vehicle">
                        Vehicle N°{{ vehicle.id }}
                     </li>
                  </ul>
            </l-tooltip> 
          </l-marker>
        </li>
      </ul>
    </l-map>
  </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import L from 'leaflet';
import fireMarkerIcon from '/public/caserne.png';
import stationMarkerIcon from '/public/feu.png';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data() {
    return {
      zoom: 13,
      lyonCenter: [45.759, 4.841],
      fireIcon : L.icon({
        iconUrl: fireMarkerIcon,
        iconSize: [35, 40],
        iconAnchor: [16, 37]
      }),
      stationIcon : L.icon({
        iconUrl: stationMarkerIcon,
        iconSize: [25, 30],
        iconAnchor: [16, 37]
      })
    };
  },
  computed: {
      ...mapGetters('stations', {
        stations: 'getStations',
      }),
      ...mapGetters('teams', {
         accidents: 'getAccidents',
      }),
      ...mapGetters('teams', {
         teams: 'getTeams',
      })
  },
  methods: {
    ...mapActions('teams', {
        loadTeams: 'loadTeams',
    }),
    ...mapActions('stations', {
        loadStations: 'loadStations',
    }),
  },
  created() {
    this.loadStations();
    this.loadTeams();
    var self = this;

    setInterval(function () {
      self.loadStations();
      self.loadTeams();
    }, 3000);
  }
};
</script>
