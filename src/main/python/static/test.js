
var uid = document.querySelector("#unique_id")

function testFun() {
	alert("YOU CLICKED ME!");
	var eventObj = {
		uid: uid.value
	};

	console.log(eventObj)
}
document.getElementById("button_submit").addEventListener("click", testFun);