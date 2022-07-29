"Use strict";

// class ITCompany {
//   create (jobType) {
//     let employee;
//     if (jobType === 'Programmer') {
//       return new Programmer(jobType);
//     } else if (jobType === 'Tester') {
//       return new Tester(jobType);
//     } 
//     employee.type = jobType;
//     employee.say = function () {
//       console.log(`${this.jobType}`);
//     };
//     return employee;
//   }
// }

// class Human {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getName() {
//     console.log(`My name is ${this.name}`);
//   }
//   getAge() {
//     console.log(`My age is ${this.age}`);
//   }

//   describe() {
//     console.log(`Hi, My name is ${this.name}, I'm ${this.age}, and I ${this.job}`);
//   }
// }

// class Programmer extends Human {
//   constructor () {
//     this.job = 'Programmer';
//     super(name, age);
//   }
// }

// class Tester extends Human {
//   constructor () {
//     this.job = 'Tester';  
//     super(name, age);
//   }
// }

// const testing = () => {
//   const employees = [];
//   const factory = new ITCompany();
//   employees.push(factory.create('Programmer', 'Roman', 36));
//   employees.push(factory.create('Tester', 'Stas', 28));
//   employees.forEach((employee) => employee.describe());
// };

// testing();


//----------------------------------------------------------

const obj = {
  a: '1',
  b: '2',
  c: '3',
  e: '4',
  o: '5'
};

function freezeVowelKeys(obj) {
  for (const key of Object.keys(obj)) {
    if (/[aeiou]/i.test(key)) {
      Object.defineProperty(obj, key, {
        writable: false, 
      });
    }
  }
}

freezeVowelKeys(obj);
obj.a = '120';
obj.b = '120';
obj.e= '120';
console.log(obj);
