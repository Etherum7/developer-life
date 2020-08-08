import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//internal modules
import GoogleBtn from '../google-btn/googleBtn.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				STORY QR
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper  : {
		marginTop     : theme.spacing(8),
		display       : 'flex',
		flexDirection : 'column',
		alignItems    : 'center'
	},
	avatar : {
		margin          : theme.spacing(1),
		backgroundColor : theme.palette.secondary.main
	},
	form   : {
		width     : '100%', // Fix IE 11 issue.
		marginTop : theme.spacing(3)
	},

	submit : {
		margin : theme.spacing(3, 0, 2)
	}
}));

function SignUp() {
	const classes = useStyles();
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const handleSubmit = async (event) => {
		event.preventDefault();

		// if (password !== confirmPassword) {
		// 	alert("Password Don't match");
		// 	return;
		//}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, {
				username
			});
			//an use it to store username
			setUsername('');
			setEmail('');
			setPassword('');
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								autoComplete="username"
								name="userName"
								variant="outlined"
								required
								fullWidth
								id="userName"
								label="Username"
								autoFocus
								value={username}
								onChange={(event) =>
									setUsername(event.target.value)}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								value={email}
								onChange={(event) =>
									setEmail(event.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								value={password}
								onChange={(event) =>
									setPassword(event.target.value)}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						className={classes.submit}
						onClick={handleSubmit}>
						Sign Up
					</Button>
					<GoogleBtn />

					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/signin" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
export default SignUp;

//Optional
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
// <Grid item xs={12}>
// 							<FormControlLabel
// 								control={
// 									<Checkbox
// 										value="allowExtraEmails"
// 										color="primary"
// 									/>
// 								}
// 								label="I want to receive inspiration, marketing promotions and updates via email."
// 							/>
// 						</Grid>
