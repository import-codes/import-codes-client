import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './service-worker';

import './css/tailwind.output.css';

import StoreProvider from './redux/provider'
import Router from './routing/router';

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<Router />
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
