import React from 'react'
import styled from 'styled-components/macro'
import { TEXT_CONSTANTS } from '../../../constants'

const Wrapper = styled.div`
	background: white;
	margin-left: 50px;
	padding-left: 50px;
	padding-right: 50px;
	font-size: 40px;
	color: #e95e24;
`

export default function Header() {
	return <Wrapper>{TEXT_CONSTANTS.HEADER}</Wrapper>
}
