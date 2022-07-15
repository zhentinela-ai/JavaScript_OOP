// const company = {
//   name: "fazt tech",
//   employees: [],
//   sortEmployees: function () {}
// }
`Error`
// company.sortEmployees = ""

// company.sortEmployees()


function Company(name) {
  let employees = []
  this.name = name

  this.getEmployees = function() {
    return employees
  }

  this.addEmployees = function(employee) {
    employees.push(employee)
  } 
  
}

const company = new Company("Coca Cola")
const company2 = new Company("Pepsi")

console.log(company)
console.log(company2)

company.addEmployees({name: "ryan"})
company2.addEmployees({name: "joe"})

console.log(company.getEmployees())
console.log(company2.getEmployees())