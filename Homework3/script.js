"Use strict";

let num = +prompt("Введите число", ""),
    result = 0,
    powValue = 0;

if(typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
    console.log("Вы ввели не число!");
} else {
    for(let i = 0; i <= num; i++) {
        powValue = Math.pow(i , 2);
        result += powValue;
    }
    console.log(result);
}

//-------------------------------------------------------------------

const array = [3, 5, 12, 9, 23, 93, 17];
let sumResult = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i] > 2 && array[i] < 20) {
            //console.log(array[i]);
            sumResult += array[i];
        }
    }
console.log(sumResult);

//-------------------------------------------------------------------

const array2 = [[1, 6, 3, '6'], [10, 15, 13, '10']];
let sumArray2 = 0;

const newArray2 = [].concat(...array2);

for(let i = 0; i < newArray2.length; i++) {
    if((newArray2[i] % 2) === 0 && typeof(newArray2[i]) === 'number') {
        sumArray2 += newArray2[i];
        //console.log(newArray2[i]);   
    }
}
console.log(sumArray2);  

//----------------------------------------------------------------------

let myObj1 = {
    name: "Roman",
    Surname: "Budai",
    },
    myObj2 = {
    country: "Ukraine",
    city: "Kharkov",
},

key = prompt('Введите ключ обьекта:', ''),
value = prompt('Введите значение обьекта:', '');

function setObjProperties (key, value, obj) {
    for (let i in obj) {
        if (i === key) {
        console.log("Уже есть");
        } else {
        obj[key] = value;
        }
    }
    console.log(obj);
}   

setObjProperties(key, value, myObj1);

//----------------------------------------------------------------------

let count = 0;

while (count < 10) {
    count ++;
    if (count % 3 == 0) {
        console.log("FizBuz");
        continue;
    }

    if (count % 2 === 0) {
        console.log("Fiz");
        continue;
    }

    if(count % 2 !== 0) {
        console.log("Buz");
        continue;
    }
}

//----------------------------------------------------------------------

function factorial(valueFactorial) {
    let resultFactorial = 1;
    while(valueFactorial) {
        resultFactorial *= valueFactorial --;
    }
    console.log(resultFactorial);
    return;
}   

factorial(7); 

//----------------------------------------------------------------------

const sheetsInReamPaper = 500,
      consumptionPerWeek = 1200,
      weeksAmount = 8;
let boxResult = 0,
    boxResultCeil = 0,
    boxResultFloat = 0;

boxResultFloat = consumptionPerWeek / sheetsInReamPaper * weeksAmount;

if(boxResultFloat % 2 === 0) {
    boxResult = boxResultFloat;
} else {
    boxResultCeil = boxResultFloat.toString().split(".")[0];
    boxResult = Number(boxResultCeil) + 1;
}

console.log(boxResult);

// let sumSheetsPerWeek = consumptionPerWeek / sheetsInReamPaper; 
// console.log(sumSheetsPerWeek);

// for(let i =1; i <= 8; i++) {
//     if(boxResult % 2) {
//         boxResult += sumSheetsPerWeek;
//     }
// }
