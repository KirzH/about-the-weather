import React, { Component } from 'react'
import './forecast.css'
import { connect } from 'react-redux'

const Forecast = (props) => {
	return (
		<div className='block_two'>
			<div>
				<h1>
					Forecast:
					{/* <p>{props.zip}</p> */}
				</h1>
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
  )(Forecast)
