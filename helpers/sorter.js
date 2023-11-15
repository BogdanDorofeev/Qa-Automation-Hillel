export default function sortBySalary(users) {
  const inAscendingSalaryOrder = users.sort((a, b) => {
    if (a.salary !== b.salary) {
      return a.salary - b.salary;
    }
    return a.id - b.id;
  });

  return inAscendingSalaryOrder;
}
