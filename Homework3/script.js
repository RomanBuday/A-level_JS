"Use strict";

let num = +prompt("Введите число", "");
let result = 0,
    powValue = 0;

if(typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
    console.log("Вы ввели не число!");
} else {
    for(let i = 0; i <= num; i++) {
        powValue = Math.pow(i , 2);
            if(powValue > 0) {
                result += powValue;
            }
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

let myObj = (key, value, obj) => {
    obj[key] = value;
};

