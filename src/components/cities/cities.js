import React, { Component } from 'react'
import './cities.css'
import Post from './post/post'
import { connect } from 'react-redux'



const Cities = (props) => {
	console.log(props)
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
						// onChange={onPostChange}
						ref={newCityText}
						value={props.newPostText}
					/>
				</div>
				<div>
					<butonn className='btn_add btn-info'>
						Add City
					</butonn>
					<button className='btn_add btn-info' >Remove</button>
				</div>
				<div>{postElements}</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	console.log(state)
	return {
	  myCities : state.cities.myCities
	}
  }
   

   
  export default connect(
	mapStateToProps
  )(Cities)
