import React from 'react';
import TextInput from '../TextInput';
import styled from 'styled-components';
interface ListItemProps {
	epfVisibility: boolean;
}

const Item = styled.li`
	display: flex;
	align-items: center;
	gap: 8px;
`;
const InputWrapper = styled.div`
	display: flex;
	gap: 8px;
`;
const EpfWrapper = styled.div`
	display: flex;
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
		<Item >
			<InputWrapper>
				<TextInput size="212px" placeholder="sdfsd" />
				<TextInput size="136px" placeholder="sdfsdf" />
			</InputWrapper>
			<EpfWrapper>
				<img src="/icons/close.png" alt="icon" />
				<CheckBoxWrapper htmlFor="1" >
					<CheckBox type="checkbox" name="1" id="1" />
					EPF/ETF
				</CheckBoxWrapper>
			</EpfWrapper>
		</Item>
	);
};

export default ListItem;
