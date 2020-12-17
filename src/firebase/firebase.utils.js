import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBASSYwM3JuvD7aGj3_T887gID-EWB8YpE",
    authDomain: "givethechange-e9777.firebaseapp.com",
    projectId: "givethechange-e9777",
    storageBucket: "givethechange-e9777.appspot.com",
    messagingSenderId: "193634557734",
    appId: "1:193634557734:web:d17ff72c5c58ae0760abe7",
    measurementId: "G-HLL4Z9PF0R"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const balance = 0;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                balance,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setup Google auth utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); 
// always trigger the Google popup whenever we use Google for authentication

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; // in case I want the whole library