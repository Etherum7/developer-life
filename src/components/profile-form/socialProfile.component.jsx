import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root : {
		// '& .MuiContainer-root': {
		//   margin: theme.spacing(2),
		//   width:'100%'
		// },
	},
	form : {},
	grid : {}
}));
function ProfileForm() {
	const classes = useStyles();
	return (
		<Container component="main" className={classes.root} maxWidth="xs">
			<Typography variant="h4">Profile Form</Typography>
			<form noValidate>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="name"
							label="Full Name"
							name="name"
							autoComplete="name"
							autoFocus
						/>
					</Grid>
					<Grid item sm={6}>
						<TextField
							id="date"
							label="Birthday"
							type="date"
							variant="outlined"
							defaultValue="2001-12-18"
							//className={classes.textField}
							InputLabelProps={{
								shrink : true
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="outlined-multiline-static"
							label="Multiline"
							multiline
							fullWidth
							rows={10}
							defaultValue="Default Value"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							fullWidth
							id="mobilenumber"
							label="Mobile Name"
							name="tel"
							autoComplete="tel"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							id="instagram"
							fullWidth
							label="Instagram Handle"
							name="instagram"
							autoComplete="instagram"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							id="twitter"
							fullWidth
							label="Twitter Handle"
							name="twitter"
							autoComplete="twitter"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							
							id="facebookgithub"
							fullWidth
							label="Facebook Handle"
							name="facebook"
							autoComplete="facebook"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							variant="outlined"	
							id="github"
							fullWidth
							label="Github Handle"
							name="github"
							autoComplete="github"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							id="tinder"
							fullWidth
							label="Tinder Handle"
							name="tinder"
							autoComplete="tinder"
						/>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
}

export default ProfileForm;
