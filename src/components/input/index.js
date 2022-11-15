import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { TEXT_CONSTANTS } from '../../constants'

const StyledInput = styled.input`
	border-radius: 20px 0 0 20px;
	background: white;
	font-size: 20px;
	border: none;
	padding: 11px;
	&:focus {
		outline: none;
	}
`

const StyledDiv = styled.div``

const Input = ({ parentKaLocalState, setParentKaLocalState }) => {
	const handleOnchange = (e) => {
		setParentKaLocalState(e.target.value)
	}

	return <StyledInput value={parentKaLocalState} onChange={handleOnchange} placeholder={TEXT_CONSTANTS.SEARCH_BAR_PLACEHOLDER} />
}

export default Input
