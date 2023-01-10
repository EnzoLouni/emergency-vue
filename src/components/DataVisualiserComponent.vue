<template>
   <div class="card-container">
      <div class="card">
         <h2>Agents inactifs</h2>
         <ul class="station-data">
            <li v-for="station in stations" :key="station">
               <div v-if="station.agents.length !== 0">
                  <h3>{{ station.name }}</h3>
                  <ul>
                     <li v-for="agent in station.agents" :key="agent">
                        {{ agent.name }}
                     </li>
                  </ul>
               </div>
            </li>
         </ul>
      </div> 
      <div class="card">
         <h2>Vehicules inactifs</h2>
         <ul class="station-data">
            <li v-for="station in stations" :key="station">
               <div v-if="station.vehicles.length !== 0">
                  <h3>{{ station.name }}</h3>
                  <ul>
                     <li v-for="vehicle in station.vehicles" :key="vehicle ">
                        Camion n°{{ vehicle.id }}
                     </li>
                  </ul>
               </div>
            </li>
         </ul>
      </div>
   </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
      ...mapGetters('stations', {
         stations: 'getStations',
      }),
  },
};
</script>