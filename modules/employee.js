export class Employee {
  #jobType;

  static compareSalary(dev, pm) {
    if (dev.salary > pm.salary) {
      return `User with id ${dev.id} has a greater salary.`;
    } else if (dev.salary < pm.salary) {
      return `User with id ${pm.id} has a greater salary.`;
    } else {
      return "salaries are equal";
    }
  }

  constructor(id, salary, jobType) {
    this.id = id;
    this.salary = salary;
    this.#jobType = jobType;
  }

  getJobType(jobType) {
    return `I am a ${this.#jobType}`;
  }
}
