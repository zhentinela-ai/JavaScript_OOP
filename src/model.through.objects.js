const company = {
  name: "fazt tech",
  employees: []
}

class Person {
  constructor(name, lastName) {
    this.name = name
    this.lastName = lastName
  }
}

const john = new Person('john', 'ray')
const maria = new Person('maria', 'perez')

`Relations`
`Association`
maria.parent = john;

`Aggregationn`
`There are two concepts: Aggregate (bigger Object or Container) & Component (inside the Aggregate)`
company.employees.push(john)
company.employees.push(maria)

// console.log(maria)
// console.log(john)

// console.log(company)

`Composition`
`The contained object has no independent life because it has no meaningless without the Aggregate`
const person = {
  name: "ryan",
  lastName: "ray".anchor,
  address: {
    street: "123 baker street",
    city: "london",
    country: "united kingdom"
  }
}