import * as Mutations from './mutationTypes'
import * as API from '@/api'
export default {
  state: {
    planetList: [],
    planets: {}
  },

  mutations: {
    [Mutations.SAVE_PLANETS](state, planets){
      state.planetList = planets
      for(let planet of planets){
        // Magic for extracting ID from URL
        const id = planet.url.replace('http://swapi.dev/api/planets/').replace('/','')
        planet.id = id
        state.planets[id] = planet
      }
    }
  },

  actions: {
    async fetchPlanets(context){
      const planets = await API.fetchPlanets()
      context.commit(Mutations.SAVE_PLANETS, planets) // Commit using the abstracted mutation name
    }
  },

  getters: {
    getPlanetById: state => id => state.planets[id]
  }
}