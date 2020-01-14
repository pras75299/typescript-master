class Department {
  //public name: string;
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    //this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["MAX"]);
it.addEmployee("MAX");
it.addEmployee("MANU");

it.describe();
it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("something went wrong..");
accounting.printReports();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
