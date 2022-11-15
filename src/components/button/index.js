import styled from 'styled-components/macro'
import { FaQuestionCircle } from 'react-icons/fa'

const StyledButton = styled.button`
	padding: 10px;
	border: 1px solid #c1593f;
	border-radius: 0 20px 20px 0;
	font-size: 14px;
	color: white;
	background: #e84444;
	display: flex;
	align-items: center;
	&:hover {
		background: #a92b2b;
	}
`

const Button = ({ label, onClick }) => {
	const handleOnClick = (e) => {
		if (onClick) {
			onClick(e)
		}
	}

	return (
		<StyledButton onClick={handleOnClick}>
			<FaQuestionCircle />
			{label}
		</StyledButton>
	)
}

export default Button
