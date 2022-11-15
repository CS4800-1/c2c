// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: "AIzaSyAaxnJ-eYsIC9A1g_6wAIWCPeRElEVBG3g",
// 	authDomain: "coffee2conference.firebaseapp.com",
// 	databaseURL: "https://coffee2conference-default-rtdb.firebaseio.com",
// 	projectId: "coffee2conference",
// 	storageBucket: "coffee2conference.appspot.com",
// 	messagingSenderId: "718465301534",
// 	appId: "1:718465301534:web:17e424f8ec38caea5a020f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider(app);
// const auth = getAuth(app);


import { getAuth, GoogleAuthProvider, signInWithPopup, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

const firebaseApp = initializeApp({
	apiKey: "AIzaSyAaxnJ-eYsIC9A1g_6wAIWCPeRElEVBG3g",
	authDomain: "coffee2conference.firebaseapp.com",
	databaseURL: "https://coffee2conference-default-rtdb.firebaseio.com",
	projectId: "coffee2conference",
	storageBucket: "coffee2conference.appspot.com",
	messagingSenderId: "718465301534",
	appId: "1:718465301534:web:17e424f8ec38caea5a020f"
});


// document.addEventListener("DOMContentLoaded", event => {
// 	// const app = firebase.app();
// 	const app = initializeApp(firebaseConfig);

// });

function googleLogin() {
	const provider = new GoogleAuthProvider(firebaseApp);
	const auth = getAuth(firebaseApp);
	const r = signInWithPopup(auth, provider)
	auth.setPersistence(browserSessionPersistence)
	// firebase.auth().signInWithPopup(provider).setPersistence(auth, browserSessionPersistence)
		.then((result) => {
			const user = result.user;
			alert(user.displayName);
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
			alert(errorMessage);
			});		
}


// googleLogin.addEventListener('click', (e) => {
// 	// signInWithRedirect(auth, provider);
// 	signInWithPopup(auth, provider)
// 		.setPersistence(auth, browserSessionPersistence)
// 		// Existing and future Auth states are now persisted in the current
// 		// session only. Closing the window would clear any existing state even
// 		// if a user forgets to sign out.
// 		.then((result) => {
// 			// This gives you a Google Access Token. You can use it to access the Google API.
// 			const credential = GoogleAuthProvider.credentialFromResult(result);
// 			const token = credential.accessToken;
// 			// The signed-in user info.
			
// 			// ...
// 		}).catch((error) => {
// 			// Handle Errors here.
// 			const errorCode = error.code;
// 			const errorMessage = error.message;
// 			// The email of the user's account used.
// 			const email = error.customData.email;
// 			// The AuthCredential type that was used.
// 			const credential = GoogleAuthProvider.credentialFromError(error);
// 			// ...
// 			alert(errorMessage);
// 		});

// });
