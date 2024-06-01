import React from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import InputList from "./InputList";

import styled from "styled-components";
import { MainTitle, SubTitle, Wrapper } from "../GlobalStyles";

const FormWrapper = styled(Wrapper)`
	width: 680px;

	@media (max-width: ${({ theme }) =>
		theme.breakpoints.tablet}) {
		width: 100%;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 100%;
	}
`;
const Header = styled.header`
	display: flex;
	justify-content: space-between;
`;

const Line = styled.hr`
	border: 1px solid #e0e0e0;
	margin-top: 16px;
`;
const Section = styled.section`
	margin-top: 24px;
	margin-bottom: 16px;
	width: fit-content;
`;
function Form() {
	const reset = () => {
		console.log("reset");
	};
	return (
		<FormWrapper>
			<Header>
				<MainTitle>Calculate Your Salary</MainTitle>
				<Button addAlowance={reset} text="Reset" icon="/icons/reset.png" />
			</Header>
			<Section>
				<SubTitle>Basic Salary</SubTitle>
				<TextInput size="356px;" placeholder="something" />
			</Section>

			<InputList
				title="Earnings"
				subtitle="Allowance, Fixed Allowance, Bonus and etc."
				epfVisibility={true}
				buttonText="Add New Allowance"
			/>
			<Line />
			<InputList
				title="Deductions"
				subtitle="Salary Advances, Loan Deductions and all."
				epfVisibility={false}
				buttonText="Add New Deduction"
			/>
		</FormWrapper>
	);
}

export default Form;
