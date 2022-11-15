import { BASE_URL, MY_SECRET_TOKEN } from '../constants'
import { useState } from 'react'

export const useGetCityWeather = ({ city = 'q' }) => {
	const [data, setData] = useState(null)

	const newUrl = `${BASE_URL}/data/2.5/weather?q=${city}&units=metric&appid=${MY_SECRET_TOKEN}`
	fetch(newUrl)
		.then(function (response) {
			response.json().then((res) => {
				console.log(res)
				setData(res)
			})
		})
		.catch(function (err) {
			console.warn('Something went wrong.', err)
		})
	return data
}
