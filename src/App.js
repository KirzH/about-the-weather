import React from 'react'
import './App.css'
import Cities from './components/cities/cities'
import Forecast from './components/forecast/forecast'

const App = (props) => {
	return (
		<div className='wrapper'>
			<div className='block'>
				<Cities />
				<Forecast />
			</div>
		</div>
	)
}

export default App