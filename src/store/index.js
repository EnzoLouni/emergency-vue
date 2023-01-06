import { createStore } from 'vuex'
import teams from './modules/teams'

export default createStore({
  modules: {
    teams
  }
})