import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostIndex from './components/posts_index';
import PostNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
		<div>
			<Switch>
				<Route path="/posts/new" component={ PostNew } />
				{/* A rota abaixo deve se manter sempre após o '/new', pois a rota pode interpretar
				com se o :id fosse o 'new' */}
				<Route path="/posts/:id" component={ PostsShow } />
				<Route path="/" component={ PostIndex } />
			</Switch>
		</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
