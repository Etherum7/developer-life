import React from 'react';
import Button from '@material-ui/core/Button';

import { ReactComponent as Google } from '../../assets/google-icon.svg';

import { makeStyles } from '@material-ui/core/styles';

import {signInWithGoogle} from '../../firebase/firebase.utils'
const useStyles = makeStyles((theme) => ({
	googleBtn : {
		margin : theme.spacing(1, 0, 2)
	}
}));
function GoogleBtn() {
	const classes = useStyles();
	return (
		<Button
			fullWidth
			variant="outlined"
			color="primary"
			className={classes.googleBtn}
			onClick={signInWithGoogle}>
			<Google style={{ marginRight: '0.5rem' }} />
			Continue With Google
		</Button>
	);
}
export default GoogleBtn;
