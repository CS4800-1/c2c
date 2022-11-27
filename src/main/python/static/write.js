import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { dates } from './calscript.js';

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

var event_name = document.querySelector("#event_name");
var start_time = document.querySelector("#start_time");
var end_time = document.querySelector("#end_time");
var selected_dates = dates

function writeUserData(event) { //name, sTime, eTime) {
	event.preventDefault();

	const db = getDatabase();
	const reference = ref(db, 'Events/');

	//push generates unique id
	var eventRef = push(reference);
	var newKey = eventRef.key



	// set(reference, {
	// 	eventName: "ev",
	// 	user: "n",
	// 	time: "number"
	// });
	var eventObj = {
		eventName: event_name.value,
		startTime: start_time.value,
		endTime: end_time.value,
		uniqueKey: newKey,
		selectedDates: selected_dates
		// ,
		// userTimes: { person:[] }
	};

	console.log(eventObj)
	
// push(reference,
set(eventRef,
	{
		eventName: event_name.value,
		startTime: start_time.value,
		endTime: end_time.value,
		selectedDates: selected_dates
		// ,
		// userTimes: { person: [] }

	}).then(() => {
		alert("Event Added!\nReference Key: " + newKey)
	})
	.catch((error) => {
		alert(error)
	});


}


var button_submit = document.querySelector("#button_submit")
button_submit.addEventListener('click', writeUserData)

