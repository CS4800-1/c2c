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

//use when user is auth, enters uniqueId, and selects their available times
//read database Events/eventID/userTimes/person/<array> - initially doesn't exist




var start_time = document.getElementById('start-time');
var end_time = document.getElementById('end-time');
const event_id = document.getElementById('unique_id');
var user_name = document.getElementById('person-name');
var date = document.getElementById('date');


function setTimes(event) { 
	event.preventDefault();

	const db = getDatabase();
	var reference = ref(db, event_id).child("userTimes").child(user_name).child(date);
	const time = [start_time, end_time];
	console.log(time);

	if (reference != null)
	{
		reference.push(time);
	}
	else
	{
		reference = time;
	}

	set(ref(db,event_id).child("userTimes").child(user_name).child(date),{
		times: time

		}).then(() => {
		alert("Times added: " + time)
	})
	.catch((error) => {
		alert(error)
	});
}


// var button_submit = document.querySelector("#submit-avail")
// button_submit.addEventListener('click', setTimes)

var button_submit = document.getElementById('submit-avail')
button_submit.addEventListener('click', () => {
	alert("Clicked")
});