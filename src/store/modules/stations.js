import axios from "axios"

// initial state
const state = () => ({
    stations: [
        {
            "name": "Caserne de la Madre",
            "coordinates": "(45.750,4.841)",
            "agents": [],
            "vehicles": []
        },
        {
            "name": "Caserne Edouard Philippe",
            "coordinates": "(45.745,4.841)",
            "agents": [],
            "vehicles": []
        }
    ]
})
  
// getters
const getters = {
    getStations: (state) => {
        return state.stations.map(({ name }) => {
            const station = state.stations.find(station => station.name === name)
            const coords = station.coordinates.split(',');
            return {
                name: station.name,
                lattitude: coords[0].slice(1),
                longitude: coords[1].slice(0, -1),
                agents: station.agents,
                vehicles: station.vehicles
            }
        }) 
    },
}
  
  // actions
const actions = {
    async loadStations({ commit }) {
      try {
        const data = await axios.get(
          "http://localhost:8081/emergencyapi/station"
        );
        console.log(data.data);
        commit("SET_STATIONS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  }
  
  // mutations
const mutations = {
    SET_STATIONS(state, stations) {
        state.stations = stations;
    }
}
  
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}