import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

import './../src/theme/theme.css';

const rootElement: HTMLElement | null = document.getElementById('root');
if (rootElement === null) {
	throw new Error('Failed to find root element');
}

ReactDOM.createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
