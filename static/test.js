
var event_name = document.querySelector("#event_name")

function testFun() {
	alert("YOU CLICKED ME!");
	var eventObj = {
		eventName: event_name.value
	};

	console.log(eventObj)
}
document.getElementById("button_test").addEventListener("click", testFun);