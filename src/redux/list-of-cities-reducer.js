import { cities } from '../assets/cities-list'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

console.log(cities)

let initialState = {
	myCities: cities
}

export const citiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				myCities: [...state.myСities]
			}
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newCityText: action.newText,
			}
		}
		default:
			return state
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
})
