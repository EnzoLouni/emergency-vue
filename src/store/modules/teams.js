import axios from "axios"

// initial state
const state = () => ({
    teams: [
      {
          "id": 1,
          "accident": {
              "id": 1,
              "intensity": 7,
              "status": "NOT_TREATED",
              "coordinates": "(45.759,4.841)"
          },
          "agents": [
              {
                  "name": "Lonchambon Alexo                                  ",
                  "exhaustion": 1
              },
              {
                  "name": "Jean-Marie Lepen                                  ",
                  "exhaustion": 2
              },
              {
                  "name": "Elise Mommy                                       ",
                  "exhaustion": 0
              }
          ],
          "vehicles": [
              {
                  "capacity": 12,
                  "tankCapacity": 300,
                  "isHeavy": true,
                  "coordinates": {},
                  "equipments": [
                      {
                          "type": "ECHELLE",
                          "features": "MOUSSE"
                      },
                      {
                          "type": "ECHELLE",
                          "features": "MOUSSE"
                      },
                      {
                          "type": "ECHELLE",
                          "features": "MOUSSE"
                      }
                  ]
              },
              {
                  "capacity": 6,
                  "tankCapacity": 120,
                  "isHeavy": false,
                  "coordinates": {},
                  "equipments": [
                      {
                          "type": "ECHELLE",
                          "features": "MOUSSE"
                      }
                  ]
              }
          ],
          "quality": 15
      },
      {
          "id": 2,
          "accident": {
              "id": 2,
              "intensity": 4,
              "status": "PROCESSING",
              "coordinates": "(45.75,4.837)"
          },
          "agents": [
              {
                  "name": "Raphou Laroué                                     ",
                  "exhaustion": 1
              },
              {
                  "name": "Jean Pourtal                                      ",
                  "exhaustion": 3
              },
              {
                  "name": "Diego Malafo                                      ",
                  "exhaustion": 2
              },
              {
                  "name": "John Doe                                          ",
                  "exhaustion": 1
              }
          ],
          "vehicles": [
              {
                  "capacity": 4,
                  "tankCapacity": 100,
                  "isHeavy": false,
                  "coordinates": {},
                  "equipments": [
                      {
                          "type": "ECHELLE",
                          "features": "MOUSSE"
                      }
                  ]
              },
              {
                  "capacity": 8,
                  "tankCapacity": 260,
                  "isHeavy": true,
                  "coordinates": {},
                  "equipments": [
                      {
                          "type": "ECHELLE",
                          "features": "MOUSSE"
                      },
                      {
                          "type": "ECHELLE",
                          "features": "MOUSSE"
                      },
                      {
                          "type": "ECHELLE",
                          "features": "MOUSSE"
                      }
                  ]
              }
          ],
          "quality": 25
      }
  ]
})
  
// getters
const getters = {
  getTeams: (state) => {
    return state.teams.map(({ id }) => {
        const team = state.teams.find(team => team.id === id)
        return {
            id: team.id,
            accident: team.accident,
            agents: team.agents,
            vehicles: team.vehicles,
            quality: team.quality,
        }
    }) 
  },
  getAgents: (state) => {
    return state.teams.map(({ id }) => {
        const team = state.teams.find(team => team.id === id);
        console.log(team.agents);
        return {
          agents: team.agents
        }
    }) 
  },
  getVehicles: (state) => {
    return state.teams.map(({ id }) => {
        const team = state.teams.find(team => team.id === id)
        return {
          vehicles: team.vehicles
        }
    }) 
  },
  getAccidents: (state) => {
    return state.teams.map(({ id }) => {
        const team = state.teams.find(team => team.id === id)
        const coords = team.accident.coordinates.split(',');
        return {
          id: team.accident.id,
          lattitude: coords[0].slice(1),
          longitude: coords[1].slice(0, -1),
          intensity: team.accident.intensity,
          status: team.accident.status,
        }
    }) 
  },
}
  
// mutations
const mutations = {
  SET_TEAMS(state, teams) {
    state.teams = teams;
}
}
  
  // actions
const actions = {
  async loadTeams({ commit }) {
    try {
      const data = await axios.get(
        "http://localhost:8081/emergencyapi/team"
      );
      console.log(data.data);
      commit("SET_TEAMS", data.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
}
  
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}