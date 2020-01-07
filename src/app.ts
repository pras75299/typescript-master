const hobbies = ["Sports", "cooking"];
const activeHobbies = ["Hiking", ...hobbies];

//activeHobbies.push(hobbies[0], hobbies[1]); //looking cumbersome
activeHobbies.push(...hobbies);

const personSS = {
  name: "Vikas",
  age: 29
};

const copiedPerson = { ...personSS }; //with this we have a exact copy of personSS object
copiedPerson.name = "new Delhi";
console.log(copiedPerson);
