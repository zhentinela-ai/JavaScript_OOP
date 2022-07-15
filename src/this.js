const user = {
  name: "Joe", //properties
  lastName: "McMillan",
  age: 30,
  // showFullName: function() {
  showFullName() {
    return this.name + " " + this.lastName
  }
}

console.log(user.showFullName())

const account = {
  number: "1000152463541547",
  amount: 100,
  deposit(quantity) {
    this.amount += quantity
    console.log(this.amount)
  },
  withdraw(quantity) {
    this.amount -= quantity
    console.log(this.amount)
  }
}

account.deposit(100)
account.deposit(50)
account.deposit(10)
console.log(account)

account.withdraw(10)
account.withdraw(200)
console.log(account)