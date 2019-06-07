/***************
 * Hoisting
 */
// calculateAge(1980);

// function calculateAge(year) {
//   console.log(2019 - year);
// }

// var retirement = function(year) {
//   console.log(65 - (2019 - year));
// };

// retirement(1980);

/***************
 * The this keyword
 */

//console.log(this);

// calculateAge(1980);

// function calculateAge(year) {
//   console.log(2019 - year);
//   console.log(this);
// }

var osoba = {
  name: 'Mario',
  yearOfBirth: 1980,
  calculateAge: function() {
    console.log(this);
    console.log(2019 - this.yearOfBirth);

    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
};

osoba.calculateAge();

var osoba2 = {
  name: 'Marija',
  yearOfBirth: 1981
};

osoba2.calculateAge = osoba.calculateAge;
osoba2.calculateAge()