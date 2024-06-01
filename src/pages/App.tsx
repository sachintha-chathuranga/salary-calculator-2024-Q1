import Dashboard from '../components/dashboard/Dashboard';
import Form from '../components/Form';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	padding: 128px 142px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	column-gap: 24px;
	min-height: 100vh;
	background: #ffffff;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: 50px;
	}

	@media (min-width: ${({ theme }) =>
		theme.breakpoints.mobile}) and (max-width: ${({ theme }) =>
	theme.breakpoints.tablet}) {
		flex-direction: column;
		row-gap: 24px;
	}
`;

function App() {
	return (
		<Container>
			<Form />
			<Dashboard />
		</Container>
	);
}

export default App;
