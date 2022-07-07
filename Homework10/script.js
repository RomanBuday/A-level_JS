"Use strict";

let userName = document.querySelector(".user__name"),
    userAge = document.querySelector(".user__age"),
    loginButton = document.querySelector(".login__btn");
      

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
let dateBtn = document.querySelector(".date__btn"),
    dateCounter = document.querySelector(".date__counter"),
    dateBirth = document.querySelector(".user__date-birth");

dateBtn.addEventListener('click', function() {
	let userAnswer = dateBirth.value.split('-');
	let userDate = {
		year : userAnswer[0],
		month : userAnswer[1],
		date : userAnswer[2]
	};

	document.cookie = 'month=' + userDate.month;
	document.cookie = 'date=' + userDate.date;
    document.cookie = 'year=' + userDate.year;
});

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(name.replace(/([.$?*+\\\/{}|()\[\]^])/g, '\\$1') + '=(.*?)(?:;|$)'));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

let date = new Date(); 
let deadline = new Date(date.getFullYear() + 1, getCookie('month'), getCookie('date'), 0, 0, 0);
let timerId = null;    
//let id       = setInterval(countdownTimer, 1000, deadline, dateCounter);

function countdownTimer() {
    const diff = deadline - date;

    if (diff <= 0) {
        clearInterval(timerId);
    }

    let month = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24 / 12) % 12 :0,
        days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0,
        hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0,
        minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0,
        seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        hours = (hours < 10) ? '0' + hours : hours;

    dateCounter.innerHTML = `Birthday - Month: ${month} 
                            Days: ${days} 
                            Hours: ${hours} 
                            Minutes:${minutes} 
                            Seconds:${seconds}`;
}

countdownTimer();   
setTimeout(countdownTimer, 1000);

//---------------------------------------------------------------------

let txtArea = document.querySelector(".text__area");
const txtToStorage = localStorage.getItem("txtArea");

if (txtToStorage) {
	txtArea.value = txtToStorage;
}

txtArea.oninput = () => {
	localStorage.setItem("txtArea",txtArea.value);
};

let area = localStorage.setItem("text", txtArea);

//-----------------------------------------------------------------

const arr = [1, 2, 3, 4, 5];
//Используя splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

arr.splice(1, 0, 'a','b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');

console.log(arr);