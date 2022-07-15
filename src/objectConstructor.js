const string = new Object("Hello World")
string.name = "Special String"
string.test = function() {
  return this + "test"
}
// console.log(string.name)

const user = {
  name: "Ryan",
  lastName: "Ray",
  age: 30,
  showName (){
    return this.name;
  }
}

console.log(Object.keys(user))
console.log(Object.values(user))

// const person = {}
// console.log(person.constructor === Object)