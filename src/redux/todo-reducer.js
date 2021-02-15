const ADD_HERO = 'ADD_HERO'
const UPDATE_HERO_TEXT = 'UPDATE_HERO_TEXT'

const initialState = {

}

const todoReducer = (state=initialState, action) => {

  switch(action.type) {
    case ADD_HERO:
      const newHero = {
        name: state.newHeroName,
        alias: state.newHeroAlias
      }
      state.heroes.push(newHero)
      state.newHeroText = ''
      return state
    case UPDATE_HERO_TEXT:
      state.newHeroText = action.newText
      return state
    default:
      return state
  }
}

// Actions
export const addHero = () => ({type: ADD_HERO})
export const updateHeroText = (text) => ({type: UPDATE_HERO_TEXT, newText: text})

export default todoReducer