let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.unshift('Dormir até acordar')
console.log(tasksList);


tasksList.pop();  // remove a última tarefa
tasksList.shift(); //remove o primeiro elemento
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]


let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1

// Elementos de repetição "FOR"

let cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

for (let index = 0; index < cars.length; index += 1) {
    console.log(cars[index]);
  }


  let numeros = [1,2,3,4,5];
  for(let numero of numeros) {
    console.log(numero);
  }
  
  // resultado: 
  //1
  //2
  //3
  //4
  //5


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

console.log(arrOfNumbers);
// Resultado: [10, 20, 30]

/* function oddNumbers(){
  // Desenvolva seu código nessa função
  let numbers = [];
  for(let i = 0; i < 50; i+=1){
      if( i % 2 != 0){
          numbers.push(i);
      }
  }
  console.log(numbers.join())
}
oddNumbers(); */