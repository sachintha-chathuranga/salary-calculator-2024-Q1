import React, { useContext } from "react";
import styled from "styled-components";
import { MainTitle, Wrapper } from "../GlobalStyles";
import { Context } from "../context/Context";

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

const Dashboard = () => {
	const { state, dispatch } = useContext(Context);

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
					<Col>{state.basicSalary}</Col>
				</Row>
				<Row>
					<Col>Gross Earning</Col>
					<Col>Amount</Col>
				</Row>
				<Row>
					<Col>Gross Deduction</Col>
					<Col>Amount</Col>
				</Row>
				<Row>
					<Col>Employee EPF (8%)</Col>
					<Col>Amount</Col>
				</Row>
				<Row>
					<Col>APIT</Col>
					<Col>Amount</Col>
				</Row>
			</List>
			<Card>
				<Row>
					<Col>Net Salary (Take Home)</Col>
					<Col>Ammont</Col>
				</Row>
			</Card>
			<List>
				<HeadingRow>
					<Col>Contribution from the Employer</Col>
				</HeadingRow>
				<Row>
					<Col>Employeer EPF (12%)</Col>
					<Col>Amount</Col>
				</Row>
				<Row>
					<Col>Employeer ETF (13%)</Col>
					<Col>Amount</Col>
				</Row>
			</List>
			<BottomRow>
				<Col>CTC (Cost to Company)</Col>
				<Col>amount</Col>
			</BottomRow>
		</DashboardWrapper>
	);
};

export default Dashboard;
