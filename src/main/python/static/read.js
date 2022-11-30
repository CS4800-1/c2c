import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

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
	// console.log(uniqueId.value);

	object.innerHTML = ``;
	//display event name
	const dbRef = ref(db);
	get(child(dbRef, `/${uniqueId.value}/eventName`)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
			object.innerHTML = `<h2> Showing Group Availability for ${snapshot.val()}\n </h2>`;

		}
		else {
			object.innerHTML = `<h2> Unique ID "${uniqueId.value}" not found\n </h2>`;
	
		}
	}).catch((error) => {
		console.error(error);
	});


	//display person with their choosen date(s) with times
	const firebaseRef = ref(db, `/${uniqueId.value}/userTimes`); //-NHNQvVWLDx7e-lbpVHf');


	// get(firebaseRef, (snapshot) => {
	get(firebaseRef).then((snapshot) => {
		if (snapshot.exists()) {
			snapshot.forEach(element => {
				const entries = Object.entries(element.val());

				console.log(element.key);
				console.log(entries + "\n----------")

				object.innerHTML += `<h3>${element.key} : \n</h3>`

				entries.forEach(item => {
					var vals = Object.values(item)
					var times = Object.values(vals[1])
					// console.log(vals[0]) //log choosen date, always first key
					// console.log(times)	//log chossen times (array)

					object.innerHTML += `<b>\t${vals[0]}\n\t\t[${times}]\n </b>`

					// console.log("**********")

				});
			});
		}
		else {
			object.innerHTML += `<b> No times </b>`;

		}
	});
}


var button_submit = document.querySelector("#button_submit")
button_submit.addEventListener('click', readData)