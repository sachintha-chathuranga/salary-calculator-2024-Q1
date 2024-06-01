import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MainTitle, Wrapper } from "../GlobalStyles";
import { Context } from "../context/Context";

const EMPLOYEE_EPF_RATE = 0.08;
const EMPLOYER_EPF_RATE = 0.12;
const EMPLOYER_ETF_RATE = 0.03;
const DashboardWrapper = styled(Wrapper)`
	width: 480px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		width: 100%;
	}
`;
const List = styled.ul`
	margin-top: 25px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
const HeadingRow = styled.li`
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.2px;
	color: #757575;
	display: flex;
	justify-content: space-between;
	padding-bottom: 8px;
	width: 100%;
`;

const Row = styled.li`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
const Col = styled.div``;
const Card = styled.div`
	padding:16px;
	font-weight: 600;
	border: 0.78px solid #E0E0E0;
	border-radius: 4px;
	margin-top: 24px;
`;
const BottomRow = styled(Row)`
	margin-top: 32px;
`;
const convertToNumber = (value:string) => parseFloat(parseFloat(value).toFixed(2));

const Dashboard = () => {
	const { state } = useContext(Context);
	const [basicSalary, setBasicSalary] = useState(convertToNumber(state.basicSalary));
	const [grossEarnings, setGrossEarnings] = useState(0);
	const [grossDeduction, setGrossDeduction] = useState(0);
	const [employeeEpf, setEmployeeEpf] = useState(0);
	const [apit, setApit] = useState(0);
	const [netSalary, setNetSalary] = useState(0);
	const [employerEpf, setEmployerEpf] = useState(0);
	const [employerEtf, setEmployerEtf] = useState(0);
	const [costToCompany, setCostToCompany] = useState(0);

	const calTotalEarning = () => {
		const totalEarnig = state.earnings.reduce((sum, item) => {
			if (!item.amount) {
				return sum;
			}
			return sum + parseFloat(item.amount);
		}, 0);
		if (state.basicSalary) return convertToNumber((totalEarnig + convertToNumber(state.basicSalary)).toFixed(2));
		return totalEarnig;
	};
	const calTotalDeduction = () => {
		const totalDeduction = state.deductions.reduce((sum, item) => {
			if (!item.amount) {
				return sum;
			}
			return sum + parseFloat(item.amount);
		}, 0);
		return totalDeduction;
	};

	const calGrossEarning = (totalDeduction: number) => {
		return calTotalEarning() - totalDeduction;
	};


	const calTotEarnForEpf = () => {
		const totalEarnig = state.earnings.reduce((sum, item) => {
			if (!item.amount || !item.epf) {
				return sum;
			}
			return sum + parseFloat(item.amount);
		}, 0);
		if (state.basicSalary) return convertToNumber((totalEarnig + convertToNumber(state.basicSalary)).toFixed(2));
		return totalEarnig;
	};
	useEffect(() => {
		setBasicSalary(convertToNumber(state.basicSalary));
		const totDeduction = calTotalDeduction();
		setGrossDeduction(totDeduction);
		const grossEarn = calGrossEarning(totDeduction);
		setGrossEarnings(grossEarn);
		const totEarnForEpf = calTotEarnForEpf();
		const employeeEPF = totEarnForEpf * EMPLOYEE_EPF_RATE;
		setEmployeeEpf(employeeEPF);
		const APIT = grossEarn ? (grossEarn * state.taxRate) - state.regularProfit : 0;
		setApit(APIT);
		setNetSalary(grossEarn - employeeEPF - APIT);
		const employerEPF = totEarnForEpf * EMPLOYER_EPF_RATE;
		setEmployerEpf(employerEPF);
		const employerETF = totEarnForEpf * EMPLOYER_ETF_RATE;
		setEmployerEtf(employerETF);
		setCostToCompany(grossEarn+employerEPF+employerETF);
	}, [state]);
	
	return (
		<DashboardWrapper>
			<MainTitle>Your salary</MainTitle>
			<List>
				<HeadingRow>
					<Col>Items</Col>
					<Col>Amount</Col>
				</HeadingRow>
				<Row>
					<Col>Basic Salary</Col>
					<Col>{basicSalary ? basicSalary.toFixed(2) : "0.00"}</Col>
				</Row>
				<Row>
					<Col>Gross Earning</Col>
					<Col>{grossEarnings ? grossEarnings.toFixed(2) : "0.00"}</Col>
				</Row>
				<Row>
					<Col>Gross Deduction</Col>
					<Col>{grossDeduction ? grossDeduction.toFixed(2) : "0.00"}</Col>
				</Row>
				<Row>
					<Col>Employee EPF (8%)</Col>
					<Col>{employeeEpf ? employeeEpf.toFixed(2) : "0.00"}</Col>
				</Row>
				<Row>
					<Col>APIT</Col>
					<Col>{apit ? apit.toFixed(2) : "0.00"}</Col>
				</Row>
			</List>
			<Card>
				<Row>
					<Col>Net Salary (Take Home)</Col>
					<Col>{netSalary ? netSalary.toFixed(2) : "0.00"}</Col>
				</Row>
			</Card>
			<List>
				<HeadingRow>
					<Col>Contribution from the Employer</Col>
				</HeadingRow>
				<Row>
					<Col>Employer EPF (12%)</Col>
					<Col>{employerEpf ? employerEpf.toFixed(2) : "0.00"}</Col>
				</Row>
				<Row>
					<Col>Employer ETF (3%)</Col>
					<Col>{employerEtf ? employerEtf.toFixed(2) : "0.00"}</Col>
				</Row>
			</List>
			<BottomRow>
				<Col>CTC (Cost to Company)</Col>
				<Col>{costToCompany ? costToCompany.toFixed(2) : "0.00"}</Col>
			</BottomRow>
		</DashboardWrapper>
	);
};

export default Dashboard;
