// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Prashant",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "NoneABC"]
// };

//person.role.push('Admin'); //this is an exception for Tuples !! should aware of !!

//person.role = [2, "abc", 15]; // although gives support here by not, letting pas 3rd argument

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "Prashant",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

for (const hobby of person.hobbies) {
  console.log(hobby);
}

console.log(person.name);

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
