function Person(name, surname, id, phone, dob, note) {
  (this.name = name.toLowerCase()),
    (this.surname = surname.toLowerCase()),
    (this.id = id),
    (this.phone = phone),
    (this.dob = new Date(Date.parse(dob))),
    (this.note = note);
}

//create array of persons
let persons = [];

//add new person
function addPerson(name, surname, id, phone, dob, note) {
  let person = new Person(name, surname, id, phone, dob, note);
  persons.push(person);
}

console.log("Persons are", persons);
addPerson(
  "Kristina",
  "Prezelj",
  1,
  0976665690,
  "1991-01-24",
  "Kristina je junior JS developer"
);
addPerson("Ira", "Petris", 2, 1245678, "1987-12-04", " Ira je dizajner");
addPerson("bero", "nizic", 3, 874621, "1988-12-04", " Bero je master coda!");

//console.log("ID is", id);

//delete person: remove an object from persons array
function deletePerson(id) {
  persons = persons.filter((person) => person.id !== id);
}
deletePerson(3);
console.log("Filtered persons", persons);

//update persons array
function updatePerson(id, prop, propValue) {
  let updatedPerson = persons.find((person) => person.id === id);
  console.log("Updated person", updatedPerson);
  updatedPerson[prop] = propValue;
  console.log("Updated person", updatedPerson);
}

updatePerson(1, "name", "Kiki");
console.log("Filtered persons", persons);

//search persons array
function search(prop, propValue, searchType) {
  let searchedPersons =
    searchType == "equals"
      ? persons.filter((person) => person[prop] === propValue)
      : searchType == "contains"
      ? persons.filter((person) => person[prop].includes(propValue))
      : console.log("person not in array!");
  return searchedPersons;
}

addPerson(
  "Kikiriki",
  "Perec",
  4,
  56478,
  "1977-12-04",
  " Kviki gric su najbolji"
);
search("name", "iki", "contains");

//countFullNameChars
function countFullNameChars(prop, propValue, searchType) {
  let count = 0;
  let searchedPersons = search(prop, propValue, searchType);
  console.log("searched pers is type", searchedPersons);
  for (var i = 0; i < searchedPersons.length; i++) {
    count += searchedPersons[i].name.length + searchedPersons[i].surname.length;
  }
  return count;
}
countFullNameChars("surname", "r", "contains");

//countTotalYears
function countTotalYears(prop, propValue, searchType) {
  let sumAges = 0;
  let currentYear = new Date().getFullYear();
  let searchedPersons = search(prop, propValue, searchType);

  for (var i = 0; i < searchedPersons.length; i++) {
    let personBirthYear = searchedPersons[i].dob.getFullYear();
    let age = currentYear - personBirthYear;
    console.log("Age is", searchedPersons[i].name, age, "years!");
    sumAges += age;
  }
  console.log("Count total years is:", sumAges, "years!");
}
countTotalYears("name", "ir", "contains");
//countTotalYears2: use reduce instead for

function countTotalYears2(prop, propValue, searchType) {
  let currentYear = new Date().getFullYear();
  let searchedPersons = search(prop, propValue, searchType);
  let sumAges = searchedPersons.reduce(
    (sum, person) => sum + (currentYear - person.dob.getFullYear()),
    0
  );
  console.log("Count total years 2 is:", sumAges);
}
countTotalYears2("name", "ir", "contains");

function getMaxYear (prop, propValue, searchType) {
  let currentYear = new Date().getFullYear();
  let searchedPersons = search(prop, propValue, searchType);
  let maxAge = searchedPersons.reduce ((age, person) =>{

  return (currentYear - person.dob.getFullYear())>age ? (currentYear - person.dob.getFullYear()) : age;
  
  },0)
  console.log("Max age is:", maxAge);
}

getMaxYear("name", "ir", "contains");

function getMinYear (prop, propValue, searchType) {
  let currentYear = new Date().getFullYear();
  let searchedPersons = search(prop, propValue, searchType);
  let minAge = searchedPersons.reduce ((age, person) =>{

    return (currentYear - person.dob.getFullYear())< age ? (currentYear - person.dob.getFullYear()) : age;
    
    },200)
    console.log("Min age is:", minAge);
}

getMinYear("name", "ir", "contains");