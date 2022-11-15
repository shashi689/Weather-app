import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import SearchBar from './components/compositeComponents/SearchBar'
import styled from 'styled-components/macro'
import Header from './components/compositeComponents/Header'
import Divider from './components/compositeComponents/Divider'
import { useGetCityWeather } from './hooks/useGetCityWeather'
import { BASE_URL, MY_SECRET_TOKEN } from './constants'
import ListItem from './components/compositeComponents/ListItem'

const Wrapper = styled.div`
	background: white;
	// padding-left: 50px;
	// padding-right: 50px;
`

const ItemLists = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

function App() {
	const [parentKaLocalState, setParentKaLocalState] = useState('')
	const [data, setData] = useState(null)

	const handleOnClick = (e) => {
		const newUrl = `https://jsonplaceholder.typicode.com/posts`
		fetch(newUrl)
			.then(function (response) {
				response.json().then((res) => {
					console.log(res)
					setData(res.slice(0, 10))
				})
			})
			.catch(function (err) {
				console.warn('Something went wrong.', err)
			})
	}

	const renderList = () => {
		if (data?.length > 0) {
			return data.map((item, index) => <ListItem onRemoveClick={onRemoveClick} data={item} />)
		}
	}

	const onRemoveClick = (id) => {
		console.log(id)
		setData(data.filter((item) => item.id !== id))
	}

	return (
		<Wrapper>
			<Header />
			<Divider />
			<SearchBar parentKaLocalState={parentKaLocalState} setParentKaLocalState={setParentKaLocalState} clickPeDataPass={handleOnClick} />
			<ItemLists>{renderList()}</ItemLists>
		</Wrapper>
	)
}

export default App
