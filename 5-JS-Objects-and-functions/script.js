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