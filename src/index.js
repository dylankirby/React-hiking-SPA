import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HikeIndex from './components/hike_index';
import Landing from './components/landing';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/hikes" component={HikeIndex}/>
					<Route path="/" component={Landing}/>
				</Switch>
			</div>
		</BrowserRouter>
  </Provider>
  , document.querySelector('.react'));
