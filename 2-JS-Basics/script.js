var firstName = "Mario";
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