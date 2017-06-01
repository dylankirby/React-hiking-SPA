import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/landing';
import HikeIndex from './components/hike_index';
import HikeShow from './components/hike_show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/hikes/:id" component={HikeShow}/>
					<Route path="/hikes" component={HikeIndex}/>
					<Route path="/" component={Landing}/>
				</Switch>
			</div>
		</BrowserRouter>
  </Provider>
  , document.querySelector('.react'));
