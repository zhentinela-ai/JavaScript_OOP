"ECMAScript5 -ES5-"
// function Person() {
//   this.name = ""
//   this.lastName = ""
// }

// function Programmer() {
//   this.language = ""
// }

// Programmer.prototype = new Person()

// console.log(Programmer)
// console.log(Person)

// const person = new Person()
// person.name = "maria"
// person.lastName = "perez"
// console.log(person)

// const programmer = new Programmer();
// programmer.name = "ryan"
// programmer.lastName = "ray"
// programmer.language = "Python"
// console.log(programmer)

  
"ECMAScript6 -ES6-"

class Person {
  constructor(name, lastName) {
    this.name = name
    this.lastName = lastName
    this.age = null
  }
}

class Programmer extends Person {
  constructor(name, lastName, language) {
    super(name, lastName);
    this.language = language
  }
}

const person = new Person('maria', 'perez')
console.log(person)

const programmer = new Programmer('jeo', 'mcmillan', 'javascript')
console.log(programmer)