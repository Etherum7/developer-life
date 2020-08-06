import React from 'react';
//Node Modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Internal Modules
import './App.css';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/signin" component = {SignIn}/>
					<Route exact path="/signup" component = {SignUp}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
