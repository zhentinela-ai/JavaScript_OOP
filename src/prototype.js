function Person(name, lastName){
  this.name = name
  this.lastName = lastName
  this.displayName = function() {
    return `${this.name} ${this.lastName}`
  }
}

// Son referencias
const john = new Person("John", "Ford")
const mario = new Person("Mario", "Rossi")
const maria = new Person("Maria", "Perez")
const jose = new Person("Jose", "Perez")

Person.prototype.greet = function() {
  return `Hello I'am ${this.name}`
}

Person.prototype.age = 41

// console.log(john.age)
// console.log(mario.age)
// console.log(maria.age)
// console.log(jose.age)

const s = new String("Hello World")

String.prototype.concatTest = function()  {
  return this + "test"
}

console.log("My name is Jesus".concatTest())

console.log(s.concatTest())