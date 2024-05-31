import React from "react";
import TextInput from "../textInput/TextInput";
import "./ListItem.css";
interface ListItemProps {
	id: number;
	epfVisibility: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ id, epfVisibility }) => {
	return (
		<li key={id}>
			<div className="inputWrapper">
				<TextInput size="mediaum" placeholder="sdfsd" />
				<TextInput size="small" placeholder="sdfsdf" />
			</div>
			<div className="epfSection">
				<img src="/icons/close.png" alt="icon" />
				<span style={{ display: epfVisibility ? "flex" : "none" }}>
					<input type="checkbox" name="1" id="1" />
					<label htmlFor="1" className="normalText">
						EPF/ETF
					</label>
				</span>
			</div>
		</li>
	);
};

export default ListItem;
