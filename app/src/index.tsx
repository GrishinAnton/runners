import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { API_SERVER_URL } from './config';

axios.defaults.baseURL = API_SERVER_URL;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter basename="/">
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
