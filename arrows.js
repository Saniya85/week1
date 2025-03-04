const add = (a, b) => a + b;
console.log(add(5, 3)); // 8


//Inside objects  
  const obj2 = {
    name: "Heena",
    greet() {
      console.log(`Hello, ${this.name}`);
    },
  };
  obj2.greet(); // Hello, Heena
  

  //using arrow functions in callbacks
const num = [1, 2, 3, 4, 5];
const squared = num.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]


//inside a setTimeout
setTimeout(() => {
    console.log("Executed after 2 seconds");
  }, 2000);
  

//inside a eventListeners
document.getElementById("btn").addEventListener("click", () => {
    console.log("Button Clicked!");
  });
  

//using arrow function with this in classes
class Person {
    constructor(name) {
      this.name = name;
    }
    
    greet = () => {
      console.log(`Hi, I'm ${this.name}`);
    };
  }
  
  const person = new Person("Heena");
  person.greet(); // Hi, I'm Heena

  
//using arrow  function in promises
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data fetched"), 2000);
    });
  };
  
  fetchData().then(data => console.log(data)); // Data fetched (after 2 sec)
  

//in arrays
const numbers = [1, 2, 3, 4, 5];

// Filter even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Double each number
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

//Sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
