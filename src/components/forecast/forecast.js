import React from 'react'
import './forecast.css'

const Forecast = (props) => {
	return (
		<div className='block_two'>
			<div>
				<h1>
					Forecast:
					<p>{props.zip}</p>
				</h1>
			</div>
		</div>
	)
}

export default Forecast
