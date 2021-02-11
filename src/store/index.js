import Vue from 'vue'
import Vuex from 'vuex'

// Import all modules
import charactersModule from './characters.store'
import planetsModule from './planets.store'
import vehiclesModule from './vehicles.store'

Vue.use(Vuex)

export default new Vuex.Store({  
  // Register modules
  modules: {
    characters: charactersModule,
    planets: planetsModule,
    vehicles: vehiclesModule,
  },
})
