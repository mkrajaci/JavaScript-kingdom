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

var mario = new Osoba('Mario', 1980, 'developer');
var marija = new Osoba('Marija', 1981, 'knjigovodja');
var ivan = new Osoba('Ivan', 2011, 'ucenik');
mario.calculateAge();
marija.calculateAge();
ivan.calculateAge();
console.log(mario.lastName);
console.log(marija.lastName);
console.log(ivan.lastName);
