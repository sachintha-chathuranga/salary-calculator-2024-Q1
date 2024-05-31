import React, { useCallback, useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import ListItem from "./ListItem/ListItem";
import styled from "styled-components";
import { SmallText, SubTitle } from "../GlobalStyles";

interface InputListProps {
	title: string;
	subtitle: string;
	epfVisibility: boolean;
	buttonText: string;
}
interface Earnings {
	id: number;
	details: string;
	amount: number;
	epfAvailability: boolean;
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
	const [earnings, setEarnings] = useState<Earnings[]>([]);
	const addAllowance = useCallback(() => {
		const newItem = {
			id: earnings.length + 1,
			details: "dsf",
			amount: 41,
			epfAvailability: false,
		};
		setEarnings([...earnings, newItem]);
	}, [earnings]);

	return (
		<>
			<TitleBlock>
				<SubTitle>{title}</SubTitle>
				<SmallText>{subtitle}</SmallText>
			</TitleBlock>
			<UnorderList>
				{earnings.map((item) => (
					<ListItem id={item.id} epfVisibility={epfVisibility} />
				))}
			</UnorderList>

			<Button
				addAlowance={addAllowance}
				icon="/icons/add.png"
				text={buttonText}
			/>
		</>
	);
};

export default InputList;
