import React from 'react'
import styled from 'styled-components/macro'
import Input from '../../input'
import Button from '../../button'

const Wrapper = styled.div`
	background: #a94a13;
	display: flex;
	height: 200px;
	align-items: center;
	justify-content: center;
`

const Container = styled.div`
	display: flex;
	align-items: center;
`

function SearchBar({ parentKaLocalState, setParentKaLocalState, clickPeDataPass }) {
	return (
		<Wrapper>
			<Container>
				<Input parentKaLocalState={parentKaLocalState} setParentKaLocalState={setParentKaLocalState} />
				<Button label={'Submit'} onClick={clickPeDataPass} />
			</Container>
		</Wrapper>
	)
}

export default SearchBar
