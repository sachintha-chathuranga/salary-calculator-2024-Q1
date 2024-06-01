import styled from 'styled-components';
import { ButtonText } from '../GlobalStyles';
import { memo } from 'react';

const ButtonWrapper = styled.div`
	padding: 8px 0px;
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	height: 40px;
	width: fit-content;
	gap: 5px;
`;

type RunFunction = () => void;
interface ButtonProps {
	text: string;
	icon: string;
	onClick: RunFunction;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
	return (
		<>
			<ButtonWrapper onClick={onClick}>
				<img src={icon} alt="Icon description" />
				<ButtonText>{text}</ButtonText>
			</ButtonWrapper>
		</>
	);
};

export default memo(Button);
