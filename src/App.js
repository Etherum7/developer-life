import React from 'react';
import { RecoilRoot } from 'recoil';

//Node Modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Internal Modules
import './App.css';
import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import ProfileForm from './components/profile-form/socialProfile.component';
function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<div className="App">
					<Header />
					<Switch>
						<Route exact path="/signin" component={SignIn} />
						<Route exact path="/signup" component={SignUp} />
						<Route
							exact
							path="/create/social"
							component={ProfileForm}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
