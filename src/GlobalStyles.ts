import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	  text-decoration: none;
	  font-family: "Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
		"Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    list-style-type: none;
  }
`;

export const theme = {
	breakpoints: {
		mobile: '480px',
		tablet: '768px',
		desktop: '1024px',
	},
};

export const MainTitle = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02px;
`; 

export const SubTitle = styled.h5`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
`;

export const ButtonText = styled.span`
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #0052ea;
`; 
export const SmallText = styled.p `
font-weight: 400;
font-size: 12px;
line-height: 20px;
color: #757575;
`;

export const NormalText = styled.p `
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #000000;
`;
export const Wrapper = styled.div`
background-color: #fafafa;
padding: 24px;
border: 1px solid #e0e0e0;
border-radius: 8px;
`;
