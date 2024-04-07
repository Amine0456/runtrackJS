const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectedDay = null;
let isDateSelected = false;

function renderCalendar() {
    const calendarElement = document.getElementById("calendar");
    calendarElement.innerHTML = "";

    const monthElement = document.createElement("h4");
    monthElement.classList.add("mb-4");
    monthElement.textContent = months[currentMonth] + " " + currentYear;
    calendarElement.appendChild(monthElement);

    const daysElement = document.createElement("div");
    daysElement.classList.add("row", "row-cols-7", "g-1");
    calendarElement.appendChild(daysElement);

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("col", "day");
        dayElement.textContent = i;
        dayElement.addEventListener("click", () => {
            if (!isDateSelected) { 
                selectDay(dayElement);
            }
        });
        daysElement.appendChild(dayElement);
    }
}

function selectDay(dayElement) {
    const days = document.querySelectorAll(".day");
    days.forEach(day => {
        day.classList.remove("selected-day");
    });
    dayElement.classList.add("selected-day");
    selectedDay = parseInt(dayElement.textContent);
    isDateSelected = true;
}

document.getElementById("submitDateBtn").addEventListener("click", () => {
    if (selectedDay !== null) {
        const selectedDate = new Date(currentYear, currentMonth, selectedDay);
        const currentDate = new Date();
        if (selectedDate < currentDate) {
            alert("Vous ne pouvez pas faire une demande pour une date passée.");
        } else {
            alert("Demande d'autorisation de présence soumise pour le " + selectedDate.toDateString());
        }
    } else {
        alert("Veuillez choisir une date en cliquant sur le calendrier.");
    }
});

renderCalendar();
