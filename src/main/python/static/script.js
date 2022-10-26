const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
const time_picker_element = document.querySelector('.time-picker');

const hr_element = document.querySelector('.time-picker .hour .hr');
const min_element = document.querySelector('.time-picker .minute .min');

const hr_up = document.querySelector('.time-picker .hour .hr-up');
const hr_down = document.querySelector('.time-picker .hour .hr-down');

const min_up = document.querySelector('.time-picker .minute .min-up');
const min_down = document.querySelector('.time-picker .minute .min-down');

let d = new Date();

let hour = d.getHours();
let minute = d.getMinutes();
setTime();

// EVENT LISTENERS
hr_up.addEventListener('click', hour_up);
hr_down.addEventListener('click', hour_down);

min_up.addEventListener('click', minute_up);
min_down.addEventListener('click', minute_down);

hr_element.addEventListener('change', hour_change);
min_element.addEventListener('change', minute_change);

function hour_change (e) {
	if (e.target.value > 23) {
		e.target.value = 23;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = formatTime(hour);
	}

	hour = e.target.value;
}

function minute_change (e) {
	if (e.target.value > 59) {
		e.target.value = 59;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = formatTime(minute);
	}

	minute = e.target.value;
}

function hour_up () {
	hour++;
	if (hour > 23) {
		hour = 0;
	}
	setTime();
}
function hour_down () {
	hour--;
	if (hour < 0) {
		hour = 23;
	}
	setTime();
}

function minute_up () {
	minute++;
	if (minute > 59) {
		minute = 0;
		hour++;
	}
	setTime();
}
function minute_down () {
	minute--;
	if (minute < 0) {
		minute = 59;
		hour--;
	}
	setTime();
}

function setTime () {
	hr_element.value = formatTime(hour);
	min_element.value = formatTime(minute);
	time_picker_element.dataset.time = formatTime(hour) + ':' + formatTime(minute);
}

function formatTime (time) {
	if (time < 10) {
		time = '0' + time;
	}
	return time;
}

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

function myFunction() {
    var x = document.getElementsByClassName("myText").value;
    document.getElementById("demo").innerHTML = x;
  }
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});