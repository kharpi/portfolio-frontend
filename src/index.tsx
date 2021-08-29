import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';
import Router from './components/router/Router';
import { GlobalStyles } from 'twin.macro';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<GlobalStyles />
				<Router />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
