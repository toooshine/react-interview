import React, { Component } from 'react';
import Home from './Home';
import movies from './Reducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
const store = createStore(combineReducers({ movies }));

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Home />
			</Provider>
		);
	}
}

export default App;
