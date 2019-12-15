import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Api, { ApiContext } from './api';

ReactDOM.render(
 	<ApiContext.Provider value={new Api()}>
		<App />
	</ApiContext.Provider>
  , document.getElementById('root'));
