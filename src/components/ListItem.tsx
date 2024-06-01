import React from "react";
import TextInput from "./TextInput";
import styled from "styled-components";
interface ListItemProps {
	epfVisibility: boolean;
}

const Item = styled.li`
	display: flex;
	align-items: center;
	gap: 8px;
	
	@media (max-width: ${({ theme }) =>
		theme.breakpoints.miniTab}) {
			flex-direction: column;
	}
`;

const InputWrapper = styled.div`
	display: flex;
	gap: 8px;
	`;
interface EpfProps {
	visibility: boolean;
}
const EpfWrapper = styled.div<EpfProps>`
	display: ${(props) => props.visibility ? "flex" : "none"};
	margin-top: 8px;
	gap: 16px;
`;
const CheckBoxWrapper = styled.label`
	display: flex;
	align-items: center;
	gap: 8px;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #000000;
`;
const CheckBox = styled.input`
	width: 20px;
	height: 20px;
	cursor: pointer;
`;

const ListItem: React.FC<ListItemProps> = ({ epfVisibility }) => {
	return (
		<Item>
			<InputWrapper>
				<TextInput size="212px" placeholder="sdfsd" />
				<TextInput size="136px" placeholder="sdfsdf" />
			</InputWrapper>
			<EpfWrapper visibility={epfVisibility}>
				<img src="/icons/close.png" alt="icon" />
				<CheckBoxWrapper htmlFor="1">
					<CheckBox type="checkbox" name="1" id="1" />
					EPF/ETF
				</CheckBoxWrapper>
			</EpfWrapper>
		</Item>
	);
};

export default ListItem;
