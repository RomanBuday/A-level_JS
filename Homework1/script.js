"use strict";

//---------Homework1-----------------------------------

//let varName = +prompt("Введите значение Name", "");
//let varName = prompt("Введите значение Name", "");
const varName = 'строка';
//const varName = 123;

typeof varName === 'string' ? 
console.log('Привет ' + varName) : 
console.log('Ошибка, не тот тип данных');

console.log(typeof 9);
console.log(typeof 'string');
console.log(typeof true);
console.log(typeof 12 / 0);
console.log(typeof string);
console.log(typeof {});
console.log(typeof 1n);

//--------Homework 2-----------------------------------

const arr = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

console.log(arr.join(' | '));

//-----------------------------------------------------

let str = "Вася;Петя;Вова;Олег";

const newArr = str.split(";");
console.log(newArr);

//-----------------------------------------------------

function hello2(name) {
    if(name == undefined) {
        console.log("Привет гость");
    }
    else {
        console.log("Привет, " + name);
    }
}

hello2();
hello2('Василий');

//------------------------------------------------------

const fruits = ['яблоко', 'ананас', 'груша'];

const fruitsToUpperCase = fruits.toString().toUpperCase();
const fruitsInUpperCase = fruitsToUpperCase.split(",");

console.log(fruitsInUpperCase, typeof fruitsInUpperCase);
//-------------------------------------------------------

function addOneForAll(...args) {
    let arr = args.map(i => i + 1);
    console.log(arr);
    return arr;
}

addOneForAll(1, 2, 3, 4);

//--------------------------------------------------------

function getSum(...args) {
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    console.log(sum);
}

getSum(1, 2, 3, 4);

//---------------------------------------------------------

const arr2 = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

const numberArr = arr2.filter(function(number) {
    return typeof number == "number";
});

console.log(numberArr);

//---------------------------------------------------------

// const haveTrueValue = arrayTesting([0, false, null, 1]);
// const dontHaveTrueValue = arrayTesting([0, false, null, 0]);

// function arrayTesting(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] == true) {
//             console.log('Нашли true значение');
//             return arr[i];
//         } else {
//             console.log('Ничего нет');
//         }
//     }
// }

// arrayTesting(haveTrueValue);
// arrayTesting(dontHaveTrueValue);

const haveTrueValue = [0, false, null, 1];
const dontHaveTrueValue = [0, false, null, 0];
const arrayTesting = el => { if(el) return el};
console.log(dontHaveTrueValue.some(arrayTesting));
console.log(haveTrueValue.some(arrayTesting));


//const arrayTesting = el => { if(el) return el};
//const haveTrueValue = [0, false, null, 1].some(arrayTesting);
//const dontHaveTrueValue = [0, false, null, 0].some(arrayTesting);
