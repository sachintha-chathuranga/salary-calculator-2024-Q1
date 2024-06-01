import React, { memo, useCallback, useContext, useState } from "react";
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
}) => {
	const { state, dispatch } = useContext(Context);
	const [list, setList] = useState<Data[]>(epfVisibility ? state.earnings : state.deductions);

	const addItem = useCallback(() => {
		console.log("add item to perant");
		console.log("list length"+list.length);
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
		console.log("removeItem from parent");
		const updatedList = list.filter(item => item.id !== id);
		epfVisibility ? dispatch(UpdateEarnings(updatedList)) : dispatch(UpdateDeductions(updatedList));
		setList(updatedList);
	}, [list]);

	const updateItem = useCallback((id: number, updatedItem: Data) => {
		console.log("update Item in perant");
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
