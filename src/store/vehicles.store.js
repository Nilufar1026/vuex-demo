import * as Mutations from './mutationTypes'
import * as API from '@/api'

export default {
  state: {
    vehicleList: [],
    vehicles: {}
  },

  mutations: {
    [Mutations.SAVE_VEHICLES](state, vehicles){
      state.vehicleList = vehicles
      for(let vehicle of vehicles){
        const id = vehicle.url.replace('http://swapi.dev/api/vehicle/').replace('/','')
        vehicle.id = id
        state.vehicles[id] = vehicle
      }
    }
  },


  actions: {
    async fetchVehicles(context){
      const vehicle = await API.fetchVehicles()
      context.commit(Mutations.SAVE_VEHICLES, vehicle)
    }
  },

  getters: {
    getVehicleById: state => id => state.vehicles[id]
  }
}