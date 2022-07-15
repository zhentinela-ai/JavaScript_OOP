const user1 = {
  name: "Joe",
  lastName: "McMillan",
  age: 30,
  showFullName() {
    return `${this.name} ${this.lastName}`
  }
}

// contructor
function Person() {
  this.name = ""
  this.lastName = ""
  this.age = 0
  this.showFullName = function() {
    return `${this.name} ${this.lastName}`
  }
}

const user2 = new Person()
user2.name = "Ryan"
user2.lastName = "McFly"
user2.age = 30
console.log(user2.showFullName())

const user3 = new Person()
user3.name = "Cameron"
user3.lastName = "Howe"
console.log(user3.showFullName())

const user4 = new Person()
const user5 = new Person()

console.log(user3, user4, user5)