import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvinder } from './context';
ReactDOM.render(
	<React.StrictMode>
		<AppProvinder>
			<App />
		</AppProvinder>
	</React.StrictMode>,
	document.getElementById('root')
);
