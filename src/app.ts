const hobbies = ["Sports", "cooking"];
const activeHobbies = ["Hiking", ...hobbies];

//activeHobbies.push(hobbies[0], hobbies[1]); //looking cumbersome
activeHobbies.push(...hobbies);
