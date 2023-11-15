import { Employee } from "./employee.js";

export class Dev extends Employee {
  static returnArrayOfDevs(...users) {
    const newArray = [];

    for (let user of users) {
      if (user instanceof Dev) {
        newArray.push(user);
      }
    }

    return newArray;
  }
  constructor(id, salary) {
    super(id, salary, "Dev");
  }
}
