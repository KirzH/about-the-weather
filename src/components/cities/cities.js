import React, { Component } from 'react'
import './cities.css'
import Post from './post/post'

const Cities = (props) => {
	let postElements = props.myCities.map((p) => <Post name={p.name} />)
	let newCityText = React.createRef()

	let onAddPost = () => {
		props.addPost()
	}

	let onPostChange = () => {
		let text = newCityText.current.value
		props.updateNewPostText(text)
	}

	return (
		<div className='block_one'>
			<div>
				<h1>Cities:</h1>
			</div>
			<div>list</div>
			<div>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newCityText}
						value={props.newPostText}
					/>
				</div>
				<div>
					<butonn className='btn_add btn-info' onClick={onAddPost}>
						Add City
					</butonn>
				</div>
				<div>{postElements}</div>
			</div>
		</div>
	)
}

export default Cities

// export default class Cities extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			activeCities: 0,
// 		}
// 	}
// 	render() {
// 		const activeCities = this.state.activeCities
// 		return (
// 			<div className='block_one'>
// 				<div>
// 					<h3>Select a city</h3>
// 					<div
// 						bsStyle='pills'
// 						stacked
// 						activeKey={activeCities}
// 						onSelect={(index) => {
// 							this.setState({ activeCities: index })
// 						}}
// 					>
// 						{store.map((myСities, index) => (
// 							<div key={index} eventKey={index}>
// 								{myСities.name}
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }
