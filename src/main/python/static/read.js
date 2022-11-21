import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

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
var event_name = document.querySelector("#event_name").value
var start_time = document.querySelector("#start_time").value
var end_time = document.querySelector("#end_time").value

function testFun() {
	alert("YOU CLICKED ME!");
	var eventObj = {
		eventName: event_name.value
	};

	console.log(eventObj)
}
// document.getElementById("button_test").addEventListener("click", testFun);


function writeUserData(event) { //name, sTime, eTime) {
	event.preventDefault();

	const db = getDatabase();
	const reference = ref(db, 'Events/');


	// set(reference, {
	// 	eventName: "ev",
	// 	user: "n",
	// 	time: "number"
	// });
	var eventObj = {
		eventName: event_name,
		startTime: start_time,
		endTime: end_time
	};

	console.log(eventObj)
	//push generates unique id

	push(reference, {
		eventName: event_name,
		startTime: start_time,
		endTime: end_time
	}).then(() => {
		alert("Event Added!")
	})
		.catch((error) => {
			alert(error)
		});


}


var button_submit = document.querySelector("#button_submit")

// button_submit.addEventListener('click', myFunction)
button_submit.addEventListener('click', writeUserData)

