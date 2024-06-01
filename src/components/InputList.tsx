import React, { memo, useCallback, useContext, useEffect, useState } from "react";
import Button from "./Button";
import ListItem from "./ListItem";
import styled from "styled-components";
import { SmallText, SubTitle } from "../GlobalStyles";
import { Context, Data } from "../context/Context";
import { UpdateDeductions, UpdateEarnings } from "../context/Actions";

interface InputListProps {
	title: string;
	subtitle: string;
	epfVisibility: boolean;
	buttonText: string;
	isReset: boolean;
}

const TitleBlock = styled.div`
	margin-top: 16px;
`;

const UnorderList = styled.ul`
	margin-bottom: 16px;
`;

const InputList: React.FC<InputListProps> = ({
	title,
	subtitle,
	epfVisibility,
	buttonText,
	isReset,
}) => {
	const { state, dispatch } = useContext(Context);
	const [list, setList] = useState<Data[]>(epfVisibility ? state.earnings : state.deductions);

	useEffect(() => {
		setList([]);
	}, [isReset]);
	

	const addItem = useCallback(() => {
		const newItem = {
			id: list.length + 1,
			title: "",
			amount: "",
			epf: false,
		};
		const newList = [...list, newItem];
		setList(newList);
	}, [list]);

	const removeItem = useCallback((id: number) => {

		const updatedList = list.filter(item => item.id !== id);
		epfVisibility ? dispatch(UpdateEarnings(updatedList)) : dispatch(UpdateDeductions(updatedList));
		setList(updatedList);
	}, [list]);

	const updateItem = useCallback((id: number, updatedItem: Data) => {

		setList((prevItems) => {
			const updatedList = prevItems.map((item) => item.id === id ? updatedItem : item);
			epfVisibility ? dispatch(UpdateEarnings(updatedList)) : dispatch(UpdateDeductions(updatedList));
			return updatedList;
		});
	}, []);

	return (
		<>
			<TitleBlock>
				<SubTitle>{title}</SubTitle>
				<SmallText>{subtitle}</SmallText>
			</TitleBlock>
			<UnorderList>
				{list.map((item) => (
					<ListItem key={item.id} epfVisibility={epfVisibility} item={item} onUpdate={updateItem} removeItem={removeItem} />
				))}
			</UnorderList>

			<Button
				onClick={addItem}
				icon="/icons/add.png"
				text={buttonText}
			/>
		</>
	);
};

export default memo(InputList);
