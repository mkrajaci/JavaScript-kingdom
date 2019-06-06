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