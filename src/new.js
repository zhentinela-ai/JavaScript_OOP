const mankind = {
  Person: function() {
    "use strict"
    this.name = ""
    this.lastName = ""
  }
}

// const person = Person()
// const person = mankind.Person()
// la importancia de new, para poder generar una instancia nueva
const person = new mankind.Person()
console.log(person)
console.log(mankind)