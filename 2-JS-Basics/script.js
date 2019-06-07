/*var firstName = "Mario";
console.log(firstName);

var lastName = "Krajacic";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// single line comments

/* *********************
 * Multiline comments
 * ********************/

/*
console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = true;

console.log(
  firstName + " " + age + " year old " + job + ". Is he married? " + isMarried
);

// Variable mutation

age = "twenty eight";
job = "programmer";
alert(
  firstName + " " + age + " year old " + job + ". Is he married? " + isMarried
);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName)
*/

/*
// Chalenge 1
var marioMass = prompt('What is Mario mass'); 
var marioHeight = prompt('What is Mario height'); 
var marijaMass = prompt('What is Marija mass'); 
var marijaHeight = prompt('What is Marija height');
var bmiMario, bmiMarija;
bmiMario = marioMass / (marioHeight * marioHeight);
bmiMarija = marijaMass / (marijaHeight * marijaHeight);
alert('Is Mario\'s BMI higher? ' + (bmiMario > bmiMarija))
*/

/*****************
 * If / else
 */

/*
var firstName = 'Ivan';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married');
} else {
  console.log(firstName + ' is single');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married');
} else {
  console.log(firstName + ' is single');
}
*/

/**************************
 * Boolean logic
 */
/*
var firstName = 'Mario';
var age = 18;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if ((age >= 13) && (age <= 18))
  console.log(firstName + ' is a teenager.');
else {
  console.log(firstName + ' is a man.');
}
 */

/**************************
 * Ternary Operator
 */
/*
 var firstName = 'Mario';
var age = 17;

age >= 18
  ? console.log(firstName + ' is a man.')
  : console.log(firstName + ' is a boy.');
*/

/**************************
 * Functions
 */

// function calculateAge(birthYear) {
//   return 2019 - birthYear;
// }

// console.log(calculateAge(1980));

// // Function expression
// var whatDoYouDo = function(job, firstName) {
//   switch (job) {
//     case 'teacher':
//       return firstName + ' teaches kids.';
//     case 'driver':
//       return firstName + ' drives taxy.';
//     case 'designer':
//       return firstName + ' create web sites.';
//   }
// };

// console.log(whatDoYouDo('teacher', 'Mario'))
// console.log(whatDoYouDo('designer', 'Marija'))
// console.log(whatDoYouDo('driver', 'Zdravko'))

/**************************
 * Arrays
 */

//  var names = ['Mario', 'Marija', 'Josip'];
//  var years = ['1980', '1981', '2008'];
//  console.log(names[0], years[0])

/**************************
 * Objects and properties and loops
 */

var covjek = {
  firstName: 'Mario',
  birthYear: 1980,
  kids: ['Josip', 'Mihael', 'Ivan']
};

console.log(covjek);
console.log(covjek.kids[0]);
console.log(covjek['birthYear']);

for (var i = 0; i < 3; i++) {
  console.log(covjek.kids[i]);
}

i = 0;
while (i < covjek.kids.length) {
  console.log(covjek.kids[i] + ' je dobar sin.');
  i++;
}
