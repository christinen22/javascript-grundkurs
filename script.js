/**alert("Hej JavaScript");

console.log("Hello console!");

let msg = "Voff voff voff";
let cat = "Mjau";

console.log(msg);

console.log(cat);

let firstName = "Christine";

console.log(firstName);

const lastName = "Nilsson";

let fullName = firstName + lastName;

console.log(fullName);

firstName = "Sara";

fullName = firstName + lastName;

console.log(fullName);

let helloMsg = "Hello" + firstName + " " + lastName;

let myName = "Slim shady";
console.log ("My name is: " + myName);

console.log ("Lenght of name is: " + myName.length);

console.log("First char in name is:", myName[0]);

console.log("Name SHOUTED is:", myName.toUpperCase() );

console.log("Name whispered is:", myName.toLowerCase() );

console.log("Position of 'h'", myName.indexOf('h'));

console.log("Slice of Slim Shady:", myName.slice(0, 2) ); "Sli"

console.log("Does name contain 'e'?", myName.includes('e')); 



let email = "johan.nordstrom@elevera.org";
email = "jn@thehiveresistance.com";
email = "johan.nordstrom@mil.gov.edu.com";

// Skriv ut positionen för den sista punkten i variabeln `email`, oavsett hur lång/kort `email` är
console.log("Last dot is at position:");

console.log("The top domain is");







students.push("Thanos"); //push lägger till sist i listan

students.pop(); //pop tar bort det sista ur listan

students.shift(); //shift tar bort det första ur listan

students.unshift(Super-Man); //unshift lägger till först i listan 



//Comparisons

const minAge = 18;
const maxAge = 65;

let age = 65;

console.log("Is age greater than minAge?", age > minAge); //jämförelse, är 65 större än 18? en sådan jämförelse kan bara bli true eller false

console.log ("Is age greater than OR equal to minAge?", age >= minAge); //jämförelse, större än eller lika med >= (greater than OR equal to)

console.log("Is age less than maxAge?", age < maxAge);

console.log("Is age the same as maxAge?", age == maxAge); //två likamed (double equals) jämför, ett enkelt = hade ersatt värdet i age

console.log("Is age NOT the same as minAge?" , age != minAge); // ! är logical NOT != betyder not equals to

//loose comparisons (different datatyps (ex sträng, tal etc) can still be equal)
age  = 25;

console.log('age == 25', age == 25);

//strict comparisons (different datatypes CAN NOT be equal)
console.log('age === 25', age === 25);

*/

//control flow

const minAge = 18;
const maxAge = 65;

let age = 15;

if (age > minAge) {
    console.log("Access granted"); //true
} else {
    console.log("You're too young");   //false

}

console.log("Program end");

age = 67 ;

// && = AND (both has to be true)

if (age >= minAge && age <= maxAge) {
    //true
    console.log("Access granted");
} else {
    //false
    console.log("You're too young");
}

console.log("Program end");

let username = "dave";
if (username === "dave" || username === "johan") {
    console.log(`I'm sorry ${username}, I can't open the doors.`);
} else {
    console.log("Welcome!");
}
