"Use strict";

let userName = document.querySelector(".user__name"),
  userAge = document.querySelector(".user__age"),
  loginButton = document.querySelector(".login__btn");

document.querySelector(".user__age").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^\d.]/g, "");
});

loginButton.addEventListener("click", () => {
  if (
    (userName.value.length !== 0 &&
      userName.value.trim() !== "" &&
      userAge.value.length !== 0 &&
      userAge.value.trim() !== "") ||
    (document.cookie.userName !== userName.value &&
      document.cookie.userAge !== userAge.value)
  ) {
    document.cookie = "user" + "=" + userName.value;
    document.cookie = "age" + "=" + userAge.value;
  }
});

console.log(document.cookie);

//------------------------------------------------

const dateContainer = document.querySelector(".date__container");
const createElem = (elem) => `${elem}`;
const addElem = (elem, out = dateContainer) =>
out.insertAdjacentHTML("beforeend", elem);
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

function getCookie() {
    const COOKIE_KEY = "age";
    const cookiesInArray = document.cookie.split("; ");
    const targetCookie = cookiesInArray.find((cookie) => {
    return cookie.startsWith(COOKIE_KEY);
    });
  
    return targetCookie;
}
  
const dateHandler = (e) => {
    document.cookie = `age=${e.target.value}`;
    checkCookie();
};
  
const checkCookie = () => {
    const value = getCookie();
    if (value) {
        dateBirth.style.display = "none";
        dateBirth.removeEventListener("change", dateHandler);
        dateTimerStart();
    } else {        
        dateCounter.style.display = "none";  
        dateBirth.addEventListener("change", dateHandler);
    }
};
  
checkCookie();
  
function dateTimerStart() {
    const cookie = getCookie().split("=")[1];
    console.log(cookie);
    const currentYear = new Date().getFullYear();
    const nowTime = Date.now();
    const nextBirthday = new Date(cookie);
    nextBirthday.setFullYear(currentYear); 
    if (nowTime > nextBirthday.getTime()) {
        nextBirthday.setFullYear(currentYear + 1);
    }
  
    setInterval(() => {
        let birthDate = new Date(cookie);
        let month = birthDate.getMonth();
        let day = birthDate.getDate();
        let nextBirthDate = new Date(new Date().getFullYear() + 1, month, day);
        
        let diff = nextBirthDate - new Date();
        let months = new Date(diff).getUTCMonth();
        let days = new Date(diff).getUTCDate() - 1;
        let hours = new Date(diff).getUTCHours();
        let minutes = new Date(diff).getUTCMinutes();
        let seconds = new Date(diff).getUTCSeconds();

    monthsOut.textContent = `${months}`;
    daysOut.textContent = `${days}`;
    hoursOut.textContent = `${hours}`;
    minutesOut.textContent = `${minutes}`;
    secondsOut.textContent = `${seconds}`;
    }, 1000);
}

//---------------------------------------------------------------------

let txtArea = document.querySelector(".text__area");
const txtToStorage = localStorage.getItem("txtArea");

if (txtToStorage) {
  txtArea.value = txtToStorage;
}

txtArea.oninput = () => {
  localStorage.setItem("txtArea", txtArea.value);
};

//-----------------------------------------------------------------

const arr = [1, 2, 3, 4, 5];
//Используя splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

arr.splice(1, 0, "a", "b");
arr.splice(6, 0, "c");
arr.splice(8, 0, "e");

console.log(arr);
