import { createStore } from 'vuex'
import teams from './modules/teams' 
import stations from './modules/stations'


export default createStore({
  modules: {
    teams,
    stations,
  }
})