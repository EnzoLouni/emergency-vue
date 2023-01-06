<template>
  <HeaderComponent/>
  <div class="data-container">
    <DataVisualiserComponent/>
  </div>
  <aside>
    <MapComponent/>
  </aside>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import MapComponent from './MapComponent.vue'
import DataVisualiserComponent from './DataVisualiserComponent.vue'
import "../assets/style.css";


export default {
  name: 'App',
  components: {
    MapComponent,
    HeaderComponent,
    DataVisualiserComponent 
  }
}
</script>
