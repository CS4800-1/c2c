const mth_element = document.querySelector('.date-picker .dates .month-wrapper .mth');
const dates_element = document.querySelector('.dates-here')

const next_mth_element = document.querySelector('.date-picker .dates .month-wrapper .arrow-wrapper-right');
const prev_mth_element = document.querySelector('.date-picker .dates .month-wrapper .arrow-wrapper-left');
const days_element = document.querySelector('.date-picker .dates .days');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const date = new Date();

let day = date.getDate();
let month = date.getMonth(); 
let year = date.getFullYear(); 

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

const dates = [];

function formatDate(d) {
    let day = d.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let month = d.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let year = d.getFullYear();
    return day + '/' + month + '/' + year;
}

mth_element.textContent = months[month] + ' ' + year;

function populateDates() {
    console.log(date)
    const day_elements = document.getElementsByClassName('day');

    const lastDayCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const lastDayPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 0).getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    
    const nextDays = 7 - lastDayIndex;

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="pre-date day">${lastDayPrevMonth - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDayCurrentMonth; i++) {
        const isCurrentDay = i === new Date().getDate();
        const isCurrentMonth = date.getMonth() === new Date().getMonth();
        const isCurrentYear = date.getFullYear() === new Date().getFullYear();

        if (isCurrentDay && isCurrentMonth && isCurrentYear) {
            days += `<div class="today-day day">${i}</div>`;
        }
        else {
            days += `<div class="day current-month-days">${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date day">${j}</div>`;
        days_element.innerHTML = days;
    }


    for (const el of day_elements) {
        el.addEventListener('click', function () {

            selectedDay = el.innerHTML;
            if (selectedDay < 10) {
                selectedDay = '0' + selectedDay;
            }
            selectedYear = year;

            selectedMonth = month + 1;
            if (el.classList.contains('next-date')) {
                selectedMonth += 1;
                if (selectedMonth >= 13) {
                    selectedYear = year + 1;
                    selectedMonth = 1;
                }
            }

            if (el.classList.contains('pre-date')) {
                selectedMonth -= 1;
                if (selectedMonth <= 0) {
                    selectedYear = year - 1;
                    selectedMonth = 12;
                }
            }
          
            if (el.classList.contains('current-month-days')) {
                if (selectedYear > year) {
                    selectedYear = year;
                }
                else if (selectedYear < year) {
                    selectedYear = year;
                }
            }

            if (selectedMonth < 10) {
                selectedMonth = '0' + selectedMonth;
            }
            selectedDate = selectedDay + "/" + selectedMonth + "/" + selectedYear;
            console.log(selectedDate);

            if (el.classList.contains("highlight-day")) {
                el.classList.remove("highlight-day");
                let datesIndex = dates.indexOf(selectedDate);
                dates.splice(datesIndex, 1);

            }
            else if (el.classList.contains("day")) {
                el.classList.add("highlight-day");
                dates.push(selectedDate)
            }
        });
    }

    for (const el of day_elements) {
        selectedDay = el.innerHTML;
        if (selectedDay < 10) {
            selectedDay = '0' + selectedDay;
        }
        selectedYear = year;

        selectedMonth = month + 1;
        if (el.classList.contains('next-date')) {
            selectedMonth += 1;
            if (selectedMonth >= 13) {
                selectedYear = year + 1;
                selectedMonth = 1;
            }
        }

        if (el.classList.contains('pre-date')) {
            selectedMonth -= 1;
            if (selectedMonth <= 0) {
                selectedYear = year - 1;
                selectedMonth = 12;
            }
        }
        
        if (el.classList.contains('current-month-days')) {
            if (selectedYear > year) {
                selectedYear = year;
            }
            else if (selectedYear < year) {
                selectedYear = year;
            }
        }

        if (selectedMonth < 10) {
            selectedMonth = '0' + selectedMonth;
        }
        selectedDate = selectedDay + "/" + selectedMonth + "/" + selectedYear;
        if (dates.includes(selectedDate)) {
            el.classList.add("highlight-day");
        }
    }
}
 
function goToNextMonth(e) {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    mth_element.textContent = months[month] + ' ' + year;
}
function goToPrevMonth(e) {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    mth_element.textContent = months[month] + ' ' + year;
}

next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

prev_mth_element.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1, 1);
    populateDates();
});
next_mth_element.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1, 1);
    populateDates();
});

populateDates();