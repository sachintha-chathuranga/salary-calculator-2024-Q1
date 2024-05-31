import React from "react";
import "./TextInput.css";
interface TextInputProps {
	size: string;
	placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ size, placeholder }) => {
	return <input className={`input ${size}`} placeholder={placeholder} />;
};

export default TextInput;
