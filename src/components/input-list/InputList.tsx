import React, { useCallback, useState } from "react";
import TextInput from "../textInput/TextInput";
import Button from "../button/Button";
import "./InputList.css";
import ListItem from "../ListItem/ListItem";

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
const InputList: React.FC<InputListProps> = ({
	title,
	subtitle,
	epfVisibility,
	buttonText,
}) => {
	const [earnings, setEarnings] = useState<Earnings[]>([]);
  const addAllowance = useCallback(
     () => {
      const newItem = {
        id: earnings.length + 1,
        details: "dsf",
        amount: 41,
        epfAvailability: false,
      };
      setEarnings([...earnings, newItem]);
    }
    ,
    [earnings],
  )
  
	return (
		<>
			<div className="titleSection">
				<h5>{title}</h5>
				<p className="smallText">{subtitle}</p>
			</div>
			<ul>
				{earnings.map((item) => (
					<ListItem id={item.id} epfVisibility={epfVisibility} />
				))}
			</ul>
			<Button addAlowance={addAllowance} icon="/icons/add.png" text={buttonText} />
		</>
	);
};

export default InputList;
