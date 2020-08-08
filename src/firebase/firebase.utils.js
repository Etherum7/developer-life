import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey            : 'AIzaSyDnY-224VAGQQwcHmRBHloACvyKsmjpepE',
	authDomain        : 'developer-life-d6eca.firebaseapp.com',
	databaseURL       : 'https://developer-life-d6eca.firebaseio.com',
	projectId         : 'developer-life-d6eca',
	storageBucket     : 'developer-life-d6eca.appspot.com',
	messagingSenderId : '618159357690',
	appId             : '1:618159357690:web:2035543bb124d040201343',
	measurementId     : 'G-BXEN19DF33'
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`/users/${userAuth.uid}`);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			//*Used await
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log(error.message);
		}
	}
	return userRef;
};
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
