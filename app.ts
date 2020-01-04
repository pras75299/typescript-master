const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Prashant",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "NoneABC"]
};

//person.role.push('Admin'); //this is an exception for Tuples !! should aware of !!

//person.role = [2, "abc", 15]; // although gives support here by not, letting pas 3rd argument

console.log(person.name);
