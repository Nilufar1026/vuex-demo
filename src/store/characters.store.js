import * as Mutations from './mutationTypes'
import * as API from '@/api'

export default {
  state: {
    characterList: [],
    characters: {}
  },

  mutations: {
    [Mutations.SAVE_CHARACTERS](state, characters){
      state.characterList = characters
      for(let character of characters){
        const id = character.url.replace('http://swapi.dev/api/characters/').replace('/','')
        character.id = id
        state.characters[id] = character
      }
    }
  },


  actions: {
    async fetchCharacters({commit}){
      const characters = await API.fetchCharacters()
      commit(Mutations.SAVE_CHARACTERS, characters)
    }
  },

  getters: {
    getCharacterById: state => id => state.characters[id]
  }
}