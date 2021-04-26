import React from 'react'
import './forecast.css'

const Forecast = (props) => {
	constructor() {
		super()
		this.state = {
			weatherData: null,
		}
	}
	componentDidMount() {
		const zip = this.props.store.zip
		const URL =
			'http://api.openweathermap.org/data/2.5/weather?q=' +
			zip +
			'api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}'
		fetch(URl)
			.then((res) => res.json())
			.then((json) => {
				this.setState({ weatherData: json })
			})
	}

	render() {
		const weatherData = this.state.weatherData
		if (!weatherData) return <div>Loading</div>
		const iconUrl = 'http://openweathermap.org/img/w/' + weather.icon + '/png'
	return (
		<div className='block_two'>
		<h1>
			{weather.main} in {weatherData.name}
			<img src={iconUrl} />
		</h1>
		<p>Current: {weatherData.main.temp}°</p>
		<p>High: {weatherData.main.temp_max}°</p>
		<p>Low: {weatherData.main.temp_min}°</p>
		<p>Wind Speed: {weatherData.wind.speed}mi/hr</p>
			{/* <div>
				<h1>
					Forecast:
					<p>{props.zip}</p>
				</h1>
			</div> */}
		</div>
		)
	}
}

export default Forecast
