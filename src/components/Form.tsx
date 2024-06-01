import React, { useCallback, useContext, useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import InputList from "./InputList";

import styled from "styled-components";
import { MainTitle, SubTitle, Wrapper } from "../GlobalStyles";
import { Context } from "../context/Context";
import { Reset, SetBasicSalary } from "../context/Actions";

const FormWrapper = styled(Wrapper)`
	width: 680px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
	const { state, dispatch } = useContext(Context);
	const [salary, setSalary] = useState<string>(state.basicSalary);
	const [isReset, setisReset] = useState(false);

	const handleSalaryChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		const sanitizedValue = newValue.replace(/[^0-9.]/g, ''); 
		dispatch(SetBasicSalary(sanitizedValue));
		setSalary(sanitizedValue);
	}, [salary]);
	
	const reset = useCallback(() => {
		dispatch(Reset());
		setSalary('');
		setisReset(true);
	}, [state]);

	return (
		<FormWrapper>
			<Header>
				<MainTitle>Calculate Your Salary</MainTitle>
				<Button onClick={reset} text="Reset" icon="/icons/reset.png" />
			</Header>
			<Section>
				<SubTitle>Basic Salary</SubTitle>
				<TextInput size="356px;" placeholder="Basic salary" value={salary} onChange={handleSalaryChange}/>
			</Section>

			<InputList
				title="Earnings"
				subtitle="Allowance, Fixed Allowance, Bonus and etc."
				epfVisibility={true}
				buttonText="Add New Allowance"
				isReset={isReset}
			/>
			<Line />
			<InputList
				title="Deductions"
				subtitle="Salary Advances, Loan Deductions and all."
				epfVisibility={false}
				buttonText="Add New Deduction"
				isReset={isReset}
			/>
		</FormWrapper>
	);
}

export default Form;
