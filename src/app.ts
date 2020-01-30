type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: "Max",
  privileges: ["Course-create"],
  startDate: new Date()
};

type unknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: unknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`StartDate: ${emp.startDate}`);
  }
}

printEmployeeInformation(el);

console.log(el);

// type guards in classes

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehical = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehical(vehical: Vehical) {
  vehical.drive();
  if ("loadCargo" in vehical) {
    vehical.loadCargo(1000);
  }
}

useVehical(v1);
useVehical(v2);
