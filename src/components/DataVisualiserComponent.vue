<template>
   <div class="card">
      Sinistres
   </div> 
   <div class="card">
   Vehicules
   <ul id="example-1">
      <li v-for="vehicle in vehicleList" v-bind:key="vehicle.id">
         {{ vehicle.id }}
      </li>
   </ul>
   </div> 
   <div class="card">
    Agents
   </div> 
</template>
<script>
export default {
props: {
   accidentList: Object,
   vehicleList: Object,
   agentList: Object
}
}
</script>

<!-- A METTRE QQ PART
   data() {
   return {
     accidentList :{
       id: 1,
       intensity : 10
     },
     vehicleList : [ { id: '1' } ],
     agentList : [ { id: '1' } ]
   }
 }   -->