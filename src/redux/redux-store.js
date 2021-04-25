import { combineReducers, createStore } from 'redux'
import { citiesReducer } from './list-of-cities-reducer'

let reducers = combineReducers({
	cities: citiesReducer,
})

let store = createStore(reducers)

export default store
