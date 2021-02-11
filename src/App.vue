<template>
  <div id="app">
    <div class="characters">
      <button @click="fetchCharacters">Fetch characters!</button>
      <ul>
        <li v-for="char in characters" :key="char.name" @click="currentCharacterId = char.id">
          {{char.name}}
        </li>
      </ul>
      <div class="info" v-if="currentCharacterId">
        <p>{{currentCharacter}}</p>
      </div>
    </div>
    <div class="vehicles">
      <button @click="fetchVehicles">Fetch vehicles!</button>
      <ul>
        <li v-for="vehicle in vehicles" :key="vehicle.name" @click="currentVehicleId = vehicle.id">
          {{vehicle.name}}
        </li>
      </ul>
      <div class="info" v-if="currentVehicleId">
        <p>{{currentVehicle}}</p>
      </div>
    </div>
    <div class="planets">
      <button @click="fetchPlanets">Fetch planets!</button>
      <ul>
        <li v-for="planet in planets" :key="planet.name" @click="currentPlanetId = planet.id">
          {{planet.name}}
        </li>
      </ul>
      <div class="info" v-if="currentPlanetId">
        <p>{{currentPlanet}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
  data(){ return {
    currentCharacterId: null,
    currentVehicleId: null,
    currentPlanetId: null,
  }},
  computed: {    
    ...mapState({
      characters: state => state.characters.characterList,
      vehicles: state => state.vehicles.vehicleList,
      planets: state => state.planets.planetList,
    }),
    ...mapGetters(['getCharacterById', 'getPlanetById', 'getVehicleById']),

    currentCharacter(){
      return this.getCharacterById(this.currentCharacterId)
    },
    currentPlanet(){
      return this.getPlanetById(this.currentPlanetId)
    },
    currentVehicle(){
      return this.getVehicleById(this.currentVehicleId)
    },
  },
  methods: {
    ...mapActions(['fetchCharacters', 'fetchVehicles', 'fetchPlanets']),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
}
</style>
