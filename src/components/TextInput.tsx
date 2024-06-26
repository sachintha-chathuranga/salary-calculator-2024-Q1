import React from 'react';
import styled from 'styled-components';
import { memo } from "react";

interface TextInputProps {
	size: string;
	placeholder: string;
	value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputProps {
	width: string;
}

const Input = styled.input<InputProps>`
	width: ${(props) => props.width};
	height: 48px;
	padding: 12px 15px 12px 15px;
	gap: 8px;
	border-radius: 4px;
	border: 1px solid #e0e0e0;
	opacity: 0px;
	margin-top: 8px;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #000000;

	@media (max-width: ${({ theme }) => theme.breakpoints.miniTab}) {
			width: ${(props) => props.width == "212px" ? "100%" : props.width > "212px" ? "80%" : props.width};
	}
`;
const TextInput: React.FC<TextInputProps> = ({ size, placeholder, value, onChange }) => {
	return <Input width={size} placeholder={placeholder}   value={value} onChange={onChange} />;
};

export default memo(TextInput);
