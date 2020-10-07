import React from 'react';
import ReactDOM from 'react-dom';

import ReduxProvider from './redux/provider'
import Router from './routing/router';

//import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider>
			<Router />
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();
