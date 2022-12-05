import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, set, update, child, get } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

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

const eventID = document.getElementById('unique-id');
var userName = document.getElementById('person-name');
var date = document.getElementById('date');
var start_time = document.getElementById('start-time');
var end_time = document.getElementById('end-time');


function getTimes(event) {
	event.preventDefault();

	const db = getDatabase();
	const dbRef = ref(db);

	var time = [start_time.value, end_time.value];
	//get previous times then append new times for corresponding date
	
	get(child(dbRef, `/${eventID.value}/userTimes/${userName.value}/${date.value}/`)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(time);

			console.log("Snapshot E")


			var prevTimes = snapshot.val()["times"]
			console.log(prevTimes)
			time = (prevTimes).concat(time)

			console.log(time);
			
			setTimes(time)


		}
		else {
			console.log("Snapshot DNE")
			// time = [start_time.value, end_time.value];
			setTimes(time)
		}
	}).catch((error) => {
		alert(error)
	});

	// console.log(time);
}


function setTimes(t) {
	event.preventDefault();

	const db = getDatabase();
	const dbRef = ref(db);

	// var time = [start_time.value, end_time.value];
	// //get previous times then append new times for corresponding date
	// get(child(dbRef, `/${eventID.value}/userTimes/${userName.value}/${date.value}/`)).then((snapshot) => {
	// 	if (snapshot.exists()) {
	// 		console.log("Snapshot E")


	// 		var prevTimes = snapshot.val()["times"]
	// 		console.log(prevTimes)
	// 		time = (prevTimes).concat(time)

		
	// 	}
	// 	else {
	// 		console.log("Snapshot DNE")
	// 		time = [start_time.value, end_time.value];
	// 	}
	// }).catch((error) => {
	// 	alert(error)
	// });

	// console.log(time);


	// set(child(dbRef, `/${eventID.value}/userTimes/${userName.value}/${date.value}/`), {
	// 	testChild: "testChild"
	// });


	// var reference = ref(db, event_id).child("userTimes").child(user_name).child(date);


	// if (dbRef != null)
	// {
	// 	dbRef.push(time);
	// }
	// else
	// {
	// 	dbRef = time;
	// }

	//try update instead of set
	set(child(dbRef, `/${eventID.value}/userTimes/${userName.value}/${date.value}/`), {
		times: t

	}).then(() => {
		alert("Times added: " + t)
	})
		.catch((error) => {
			alert(error)
		});
}


var button_submit = document.querySelector("#button_submit")
button_submit.addEventListener('click', getTimes)
// button_submit.addEventListener('click', setTimes)

// var button_submit = document.getElementById('button_submit')
// button_submit.addEventListener('click', () => {
// 	alert("Clicked")
// });

// document.getElementById("button_submit").addEventListener("click", testFun);