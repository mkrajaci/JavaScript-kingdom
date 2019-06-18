/*
var mario = {
  name: 'Mario',
  yearOfBirth: 1980,
  job: 'developer'
};

class Osoba {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
}

// Adding method to object
Osoba.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
};

// Adding property to object
Osoba.prototype.lastName = 'Krajacic';

/*
var Osoba = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
  };
};
*/
/*
var mario = new Osoba('Mario', 1980, 'developer');
var marija = new Osoba('Marija', 1981, 'knjigovodja');
var ivan = new Osoba('Ivan', 2011, 'ucenik');
mario.calculateAge();
marija.calculateAge();
ivan.calculateAge();
console.log(mario.lastName);
console.log(marija.lastName);
console.log(ivan.lastName);
*/

// Object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
};

var mario = Object.create(personProto);
mario.name = 'Mario';
mario.yearOfBirth = 1980;
mario.job = 'developer';

var marija = Object.create(personProto, {
  name: { value: 'Marija' },
  yearOfBirth: { value: 1981 },
  job: { value: 'designer' }
});
*/
/*
// Primitives

var a = 23;
var b = a;
a = 46;
console.log(a, b);

// Objects

var obj1 = {
  name: 'Mario',
  age: 39
};

// Pokazuje na mjesto u memoriji gdje se nalazi obj1 zato je vrijednost jednaka u svakom trenutku kada se mjenja obj1
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age);

// Functions
var age = 35;
var obj = {
  name: 'Janko',
  city: 'Zagreb'
};

function change(a, b) {
  a = 30;
  b.city = 'Vukovar';
}

change(age, obj)

console.log(age, obj.city)
*/

// Passing functions as arguments
/*
var years = [1980, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}
function calculateAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/

// Functions returning functions
/*
function inteviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    };
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    };
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    };
  }
}

var teacherQuestion = inteviewQuestion('teacher');
var designerQuestion = inteviewQuestion('designer');

teacherQuestion('Marija');
designerQuestion('Mario');

inteviewQuestion('designer')('Mariola');
*/

// Immediately Invoked Functions Expressions (IIFE)
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();
*/
// skriveno od vanjskog svijeta, privatnost varijable score je zagarantirana
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();
