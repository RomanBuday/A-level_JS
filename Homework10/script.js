"Use strict";

let userName = document.querySelector(".user__name"),
    userAge = document.querySelector(".user__age"),
    loginButton = document.querySelector(".login__btn");

document.querySelector('.user__age').addEventListener('input', 
    function(e){
      this.value = this.value.replace(/[^\d.]/g, '');
    }
);

loginButton.addEventListener("click", () => {
    if(userName.value.length !== 0 && userName.value.trim() !== '' &&
    userAge.value.length !== 0 && userAge.value.trim() !== '' ||
    document.cookie.userName !== userName.value && document.cookie.userAge !== userAge.value) {
        
        document.cookie = "user" + "=" + (userName.value);
        document.cookie = "age" + "=" + (userAge.value);
    }
});

console.log(document.cookie);

//------------------------------------------------

const dateContainer = document.querySelector(".date__container");
const createElem = elem => `${elem}`;
const addElem = (elem, out = dateContainer) => out.insertAdjacentHTML('beforeend', elem); 
const app = createElem(`<div class="date__counter">
                            <h2>left until the birthday</h2>
                            <div class="date__wrapper">
                                <div class="date__inner">
                                    <h3 class="date__header">Months:</h3>
                                    <span class="date__text month__counter">00</span>
                                </div>

                                <div class="date__inner">
                                    <h3 class="date__header">Days:</h3>
                                    <span class="date__text days__counter">00</span>
                                </div>

                                <div class="date__inner">
                                    <h3 class="date__header">Hours:</h3>
                                    <span class="date__text hours__counter">00</span>
                                </div>

                                <div class="date__inner">
                                    <h3 class="date__header">Minutes:</h3>
                                    <span class="date__text minutes__counter">00</span>
                                </div>

                                <div class="date__inner">
                                    <h3 class="date__header">Seconds:</h3>
                                    <span class="date__text seconds__counter">00</span>
                                </div>
                            </div>
                        </div>`);

addElem(app);

let dateCounter = document.querySelector(".date__counter"),
    dateBirth = document.querySelector(".user__date-birth"),
    monthsOut = document.querySelector(".month__counter"),
    daysOut = document.querySelector(".days__counter"),
    hoursOut = document.querySelector(".hours__counter"),
    minutesOut = document.querySelector(".minutes__counter"),
    secondsOut = document.querySelector(".seconds__counter"),
    dateText = document.querySelector(".date__text");

dateBirth.addEventListener('oninput', function() {
	let userAnswer = dateBirth.value.split('-');

    if(document.cookie.value == userAnswer) {
        dateBirth.style.display = "none";
    } else {
        let userDate = {
            year : userAnswer[0],
            month : userAnswer[1],
            date : userAnswer[2]
        };
    
        document.cookie = 'month=' + userDate.month;
        document.cookie = 'date=' + userDate.date;
        document.cookie = 'year=' + userDate.year;
    }
});

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(name.replace(/([.$?*+\\\/{}|()\[\]^])/g, '\\$1') + '=(.*?)(?:;|$)'));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

let date = new Date(); 
//const deadline = new Date(getCookie('month'), getCookie('date'));
let deadline = new Date(date.getFullYear() + 1, getCookie('month'), getCookie('date'), 0, 0, 0);
//let timerId = null;    
let id       = setInterval(countdownTimer, 1000, deadline, dateCounter);

function countdownTimer() {
    const now = new Date();
    //const diff = deadline - now;
    let diff = Math.ceil((deadline - now) / 1000);

    if (diff <= 0) {
        clearInterval(timerId);
    } 

    let dateNow  = new Date();

    //let diff = Math.ceil((deadline - now) / 1000);
    let seconds  = diff % 60,
        minutes   = Math.floor(diff / 60) % 60,
        hours    = Math.floor(diff / (60 * 60)) % 24,
     
        target   = Math.floor(diff / (60 * 60 * 24)), //Всего дней
        days     = Math.floor(diff / (60 * 60 * 24) / target),
        months  = Math.round(diff / (60 * 60 * 24) / 31);

        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        hours = (hours < 10) ? '0' + hours : hours;

    monthsOut.textContent = `${months}`;
    daysOut.textContent = `${days}`;
    hoursOut.textContent = `${hours}`;
    minutesOut.textContent = `${minutes}`;
    secondsOut.textContent = `${seconds}`;
}   
//countdownTimer();
let timerId = setInterval(countdownTimer(),1000);

//---------------------------------------------------------------------

let txtArea = document.querySelector(".text__area");
const txtToStorage = localStorage.getItem("txtArea");

if (txtToStorage) {
	txtArea.value = txtToStorage;
}

txtArea.oninput = () => {
	localStorage.setItem("txtArea",txtArea.value);
};

//-----------------------------------------------------------------

const arr = [1, 2, 3, 4, 5];
//Используя splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

arr.splice(1, 0, 'a','b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');

console.log(arr);