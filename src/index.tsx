import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { GlobalStyles, theme } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

