"Use strict";

class ITCompany {
  create (name, age, typeJob) {
    if(typeJob == 'Programmer') {
      return new Programmer(name, age);
    }

    if(typeJob == 'Tester') {
      return new Tester(name, age);
    }
  }
}

class Human {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    console.log('My name is' `${this.name}`);
  }

  getAge() {
    console.log('My age is' `${this.age}`);
  }

  static getType() {
    return 'Human';
  }
}

class Programmer extends Human {
  constructor (name, age) {
    this.job = 'Programmer';
    super(name, age);
  }

  static getJob() {
    return this.job;
  }
}

class Tester extends Human {
  constructor (name, age) {
    this.job = 'Tester';  
    super(name, age);
  }
  static getJob() {
    return this.job;
  }
}

Programmer.prototype.getProgrammerName = function() {
  return `${this.name}`;
};

Tester.prototype.getProgrammerName = function() {
  return `${this.name}`;
};

const testing = () => {
  const userCompany = new ITCompany();

  const job = Tester.getJob();
  console.log(job);

  const user1 = userCompany.create("Roman", 36, 'Programmer');
  console.log(user1);

  const programmer1 = new Programmer("Roman", 36);
  programmer1.getAge();
};

testing();


//----------------------------------------------------------

const obj = {
  a: '1',
  b: '2',
  c: '3',
  e: '4',
  o: '5'
};

function freezeVowelKeys(obj) {
  let vowel = /[aeiou]/i;
  for (const key of Object.keys(obj)) {
    if (key.match(vowel)) {
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
