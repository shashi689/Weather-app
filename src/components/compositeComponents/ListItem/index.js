import React from 'react'
import styled from 'styled-components/macro'
import { AiOutlineClose } from 'react-icons/ai'

const Wrapper = styled.div`
	border: 1px solid red;
	width: 500px;
	background: bisque;
	margin: 10px 0;
`

const Title = styled.div`
	font-size: 16px;
	font-weight: 700;
`

const SubTitle = styled.div`
	font-size: 12px;
	font-weight: normal;
`

const StyledButton = styled.button``

// let h = {
// 	body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
// 	id: 1,
// 	title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
// 	userId: 1,
// }

const ListItem = ({ data, onRemoveClick }) => {
	const handleOnClick = (e) => {
		onRemoveClick(data.id)
	}

	return (
		<Wrapper>
			<StyledButton onClick={handleOnClick}>
				<AiOutlineClose />
			</StyledButton>
			<Title> {data.title}</Title>
			<SubTitle> {data.body}</SubTitle>
		</Wrapper>
	)
}

export default ListItem
