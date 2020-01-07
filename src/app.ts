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

const addRest = (...numbersRest: number[]) => {
  return numbersRest.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbersRest = addRest(1, 2, 3, 4, 5, 6, 7);
console.log(addNumbersRest);
