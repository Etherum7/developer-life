import React from 'react';
//Node Modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Internal Modules
import './App.css';
import Header from './components/header/header.component'
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import ProfileForm from './components/profile-form/socialProfile.component'
function App() {
	return (
		<BrowserRouter>
			<div className="App">
			<Header />
				<Switch>
					<Route exact path="/signin" component = {SignIn}/>
					<Route exact path="/signup" component = {SignUp}/>
					<Route exact path= '/create/social' component={ProfileForm}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
