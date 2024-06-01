import React, { memo, useCallback, useContext, useState } from "react";
import TextInput from "./TextInput";
import styled from "styled-components";
import {Context, Data } from "../context/Context";


interface ListItemProps {
	item: Data;
	epfVisibility: boolean;
	removeItem: (id: number) => void;
	onUpdate: (id: number, updatedItem: Data) => void;
}

const Item = styled.li`
	display: flex;
	align-items: center;
	gap: 8px;
	
	@media (max-width: ${({ theme }) => theme.breakpoints.miniTab}) {
			flex-direction: column;
	}
`;

const InputWrapper = styled.div`
	display: flex;
	gap: 8px;
	`;
interface EpfProps {
	visibility: string;
}
const EpfWrapper = styled.div`
	display: flex;
	margin-top: 8px;
	gap: 16px;
`;
const CheckBoxWrapper = styled.label<EpfProps>`
	display: ${(props) => props.visibility=="true" ? "flex" : "none"};
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

const ListItem: React.FC<ListItemProps> = ({ epfVisibility, item, onUpdate, removeItem }) => {
	const { state, dispatch } = useContext(Context);
	const [listItem, setListItem] = useState<Data>(item);

	const handleTitleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setListItem((prevItem) => {
			const updatedItem = { ...prevItem, title: newValue };
			onUpdate(item.id, updatedItem);
			return updatedItem;
		});
	}, [item.id, onUpdate]);

	const handleAmountChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		const sanitizedValue = newValue.replace(/[^0-9.]/g, ''); 
		setListItem((prevItem) => {
			const updatedItem = { ...prevItem, amount: sanitizedValue };
			onUpdate(item.id, updatedItem);
			return updatedItem;
		});
	}, [onUpdate, item.id]);

	const handleCheckBoxChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.checked;
		setListItem((prevItem) => { 
			const updatedItem = { ...prevItem, epf: newValue };
			onUpdate(item.id, updatedItem);
			return updatedItem;
		});
	}, [onUpdate, item.id]);

	return (
		<Item>
			<InputWrapper>
				<TextInput size="212px" placeholder="Pay Details (Title)"  value={listItem.title} onChange={handleTitleChange}/>
				<TextInput size="136px" placeholder="Amount" value={listItem.amount} onChange={handleAmountChange}/>
			</InputWrapper>
			<EpfWrapper>
				<img src="/icons/close.png" alt="icon" onClick={() => removeItem(item.id)}/>
				<CheckBoxWrapper visibility={epfVisibility ? "true" : "false"}>
					<CheckBox type="checkbox" checked={listItem.epf} onChange={handleCheckBoxChange}/>
					EPF/ETF
				</CheckBoxWrapper>
			</EpfWrapper>
		</Item>
	);
};

export default memo(ListItem);
