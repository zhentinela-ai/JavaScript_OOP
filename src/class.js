// function Person(name, lastName) {
//   "use strict"
//   this.name = name
//   this.lastName = lastName
// }

// Person.prototype.greet = function () {
//   return `Hello I am ${this.name} ${this.lastName}!`
// }

// Equivalent a lo de ^
// const Person = class {
class Person {
  
  constructor(name, lastName) {
    this.name = name
    this.lastName = lastName
    // Sobre escribe los parametros, y no se pueden utilizar los métodos
    return {
      x: "something"
    }
  }

  greet() {
    return `Hello I am ${this.name} ${this.lastName}!`
  }
  
}

const user1 = new Person("joe", "ray")
const user2 = new Person("ryan", "ray")

console.log(user1.greet)
console.log(user2)

console.log(typeof Person)
console.log(Person.prototype)