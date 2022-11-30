import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

const firebaseConfig = {
	apiKey: "AIzaSyAaxnJ-eYsIC9A1g_6wAIWCPeRElEVBG3g",
	authDomain: "coffee2conference.firebaseapp.com",
	databaseURL: "https://coffee2conference-default-rtdb.firebaseio.com",
	projectId: "coffee2conference",
	storageBucket: "coffee2conference.appspot.com",
	messagingSenderId: "718465301534",
	appId: "1:718465301534:web:17e424f8ec38caea5a020f"
};

const app = initializeApp(firebaseConfig);
const object = document.getElementById('object');
const uniqueId = document.getElementById('unique_id');

//use to show group availibilty calendar
//read database Events/.../.../availableTimes - initially empty
function readData() {
	const db = getDatabase();
	console.log(uniqueId.value);
	const firebaseRef = ref(db, `/${uniqueId.value}/userTimes/`); //-NHNQvVWLDx7e-lbpVHf');
	// onValue(firebaseRef, (snapshot) => {
	// 	console.log(snapshot.val())
	// 	object.innerHTML = `<div>${snapshot.val()}</div>`
	// });
	object.innerHTML = `<div>`
	onValue(firebaseRef, (snapshot) => {
		snapshot.forEach(element => {
			console.log(element.val());

			object.innerHTML += `${element.val()}\n`
		});
		object.innerHTML += `</div>`
		// const data = snapshot.val();
	}

	);
}


var button_submit = document.querySelector("#button_submit")
button_submit.addEventListener('click', readData)