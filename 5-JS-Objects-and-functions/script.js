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
