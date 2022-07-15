function countItems(x) {
  return x.toString().length;
}

console.log(countItems(100000));
console.log(countItems("Hola Mundo"));

function sum(x = 0, y = 0, z = 0) {
  return z + y + x;
}

console.log(sum(10,20));
console.log(sum(10,20, 30));


// Parametric
function Stack() {
  this.items = []

  this.push = function(item) {
    this.items.push(item)
  }
}

const stack = new Stack()
stack.push("asdad")

const stack2 = new Stack()
stack2.push(1000)

console.log(stack)
console.log(stack2)

// Subtypes
class Person {
  constructor(name, lastName) {
    this.name = name
    this.lastName = lastName
  }
}

class Programmer extends Person{
  constructor(name, lastName, language) {
    super(name, lastName)
    this.language = language
  }
}

const john = new Person("john", "ray")
const ryan = new Person("ryan", "ray", "C#")

console.log(john)
console.log(ryan)

function writeFullName(p) {
  console.log(p.name +  " " + p.lastName)
}

writeFullName(john)
writeFullName(ryan)

"Asi funciona en C#"
// using System;

// class Program {
//   public static void Main (string[] args) {
//     Console.WriteLine ("Hello World");

//     Program program = new Program();
//     Console.WriteLine(program.CountItems(30000000));
//     Console.WriteLine(program.CountItems("Hola Mundo"));

//     var stack = new Stack<string>();
//     var stack2 = new Stack<int>();
    
//     Console.WriteLine(program.Sum(10, 15));
//     Console.WriteLine(program.Sum(10, 15, 20));

//     var john = new Person();
//     john.Name = "John";
//     john.LastName = "Ray";
//     program.WriteFullName(john);

//     var ryan = new Programmer();
//     ryan.Name = "Ryan";
//     ryan.LastName = "Ray";
//     ryan.Language = "C#";
    
//     program.WriteFullName(ryan);
    
//   }

//   // Overloading
//   public int CountItems(int x) { 
//     return x.ToString().Length; 
//   }
  
//   public int CountItems(string x) { 
//     return x.Length; 
//   }

//   public int Sum(int x, int y) {
//     return Sum(x, y, 0);
//   }

//   public int Sum(int x, int y, int z) {
//     return x + y + z;
//   }

//   public void WriteFullName(Person p) {
//     Console.WriteLine(p.Name + " " + p.LastName);
//   }
  
// }

// public class Stack<T> {
//   private T[] items;
//   public void Push() {}
// }

// public class Person {
//   public String Name {get; set;}
//   public String LastName {get; set;}
// }

// public class Programmer: Person {
//   public String Language {get; set;}
// }