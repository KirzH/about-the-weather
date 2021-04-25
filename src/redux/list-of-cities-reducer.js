const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
	myСities: [
		{ id: 1, name: 'New York City', zip: 10279 },
		{ id: 2, name: 'Atlanta', zip: 30334 },
		{ id: 3, name: 'Los Angeles', zip: 90071 },
	],
	newCityText: 'Washington',
}

export const citiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 4,
				name: state.newCityText,
				zip: 20230,
			}
			return {
				...state,
				myCities: [...state.posts, newPost],
				newCityText: '',
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

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
})
