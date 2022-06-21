"Use strict";
// const context = {
//     name: "Roman",
// };

// const fn = Name => console.log("Function");

// function someFunc(a, b, c, d) {
//     console.log(this.name);
//     console.log(a + b + c + d);  
// }

// function bindFunc(fn, context, ...args) {
//     return function() {
//         fn.apply(context, [...args]);
//     };
// }

// const newFunc = bindFunc(someFunc, context, 1, 1, 3, 4);

// newFunc();

function bindFunc(fn, cont, ...theArgs){
    return fn.call(cont, ...theArgs);
}

bindFunc(expo, document.querySelector("body"), 1,2,3);

function expo(...theArgs) {
    for (const arg of theArgs) {
        console.log(arg);
    }
    console.log(this);
}


//-------------------------------------------------------------

// function funcSum () {
//     let sum = 0;
//     for(let key in objectA) {
//         sum += objectA[key];
//     }
//     console.log(sum);
// }

// funcSum(objectA);

const objectA = {
    a: 1,
    b: 2,
    c: 3,
};

            // let funcSum =  fn.bind(objectA);

            // function fn() {
            //     let out = 0;
            //     Object.values(this).forEach((item)=> {
            //         if(item > 0) {
            //             out += item;
            //         }
            //     });
            //     console.log(out);
            // }

            // funcSum();

function funcSum () {
    let sum = 0;
    for(let key in objectA) {
        sum += objectA[key];
    }
    console.log(sum);
}

funcSum(objectA);

//----------------------------------------------------------

function getNewArray() {
    let newArray = this.values.filter((x) => {
        return typeof x == "number" && x > 2 && x < 10 ;
    });
    return newArray;
}

const valObject0 = {  
    values: [1, '2', 4, 8, '8',  3, 10, null, false],
};

const arrayObj = getNewArray.call(valObject0); 
console.log(arrayObj);

//----------------------------------------------------------------------------

function getCity() {
    for (const [key, value] of Object.entries(citiesAndCountries)) {
        console.log(`"${key} это - ${value},"`); 
    }
}

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const result = getCity();

//---------------------------------------------------------------------------------

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday'],
};

function getNameOfDay(lang, day) {
    if(day <= 0) {
        console.log("Неверные данные");
    }
    if(day > 7) {
        let outDay = parseInt(day % 7);
        return namesOfDays[lang][outDay - 1];
    }
    return namesOfDays[lang][day - 1];
}

console.log(getNameOfDay('ru', 50)); 

//---------------------------------------------------------------------------------------

const personObj = {
    name: 'Vlad'
};

const person1Obj = {
    age: 1
};

function setProto (currentObj, protoObj) {
  //protoObj = Object.create(currentObj);
  Object.setPrototypeOf (currentObj, protoObj);
  console.log(Object.getPrototypeOf(currentObj) == protoObj);
}

setProto(person1Obj, personObj);

//---------------------------------------------------------------------------------------

const person = {
    name: "",
    age: 0,
    setName: function(name) {
        this.name = name;
    },
    setAge: function(age) {
        const ageVerify = this.ageValidation(age);
        this.age = ageVerify;
    },
    getName: function() {
        return this.name;
    },
    getAge: function() {
        return this.age;
    },
    ageValidation: function (value) {
        if(value >= 18) {
            return value;
        }
        else {
            return "Validation Error";
        }
    }
 };

const person1 = Object.create(person);

console.log(person1);
person1.setName('Roman');
person1.setAge(32);

console.log(person1.getName());
console.log(person1.getAge());
