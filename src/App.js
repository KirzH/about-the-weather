import React from 'react'
import './App.css'
import Cities from './components/cities/cities'
import Forecast from './components/forecast/forecast'

const App = (props) => {
	return (
		<div className='wrapper'>
			<div className='block'>
				<Cities store={props.store} />
				<Forecast store={props.store} />
			</div>
		</div>
	)
}

export default App
