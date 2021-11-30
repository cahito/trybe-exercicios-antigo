/*let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Contato');

console.log(menu);
*/

/* let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1) {
    console.log(groceryList[i]);
} */
/* 
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name);
    for (let letra of name) {
        console.log(letra);
    }
}
 */
// Exercícios pós aula
// Exercício 1

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// Exercício 2

let result02 = 0;

for (let i = 0; i < numbers.length; i += 1) {
    result02 += numbers[i];
}
console.log(result02);

// Exercício 3

let result03 = result02 / (numbers.length + 1);

console.log(result03);

// Exercício 4

if (result03 > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor que 20');
}

// Exercício 5

let result05 = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if ( numbers[i] > result05) {
        result05 = numbers[i];
    }
}

console.log(result05);

// Exercício 6

let result06 = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
        result06 += 1;
    }
}
if (result06 > 0) {
    console.log(result06);
} else {
    console.log('nenhum valor ímpar encontrado');
}

// Exercício 7

let result07 = result05;

for (let i = 0; i < numbers.length; i += 1) {
    if ( numbers[i] < result07) {
        result07 = numbers[i];
    }
}

console.log(result07);

// Exercício 8

let result08 = [];

for (let i = 1; i <= 25; i += 1) {
    result08.push(i);
}

console.log(result08);

// Exercício 9

for (let i = 0; i < result08.length; i += 1) {
    console.log(result08[i] / 2);
}

// Bonus

/* for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  } */

// Bonus 1

console.log(numbers);

let numbersB1 = [];

for ( i = 0; i < numbers.length; i += 1){
    numbersB1.push(numbers[i]);
}

for (let index = 1; index < numbersB1.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbersB1[index] < numbersB1[secondIndex]) {
        let position = numbersB1[index];
        numbersB1[index] = numbersB1[secondIndex];
        numbersB1[secondIndex] = position;
      }
    }
  }

console.log(numbersB1);

// Bonus 2

let numbersB2 = [];

for ( i = 0; i < numbers.length; i += 1){
    numbersB2.push(numbers[i]);
}

for (let i = 1; i < numbersB2.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (numbersB2[i] > numbersB2[j]) {
        let position = numbersB2[j];
        numbersB2[j] = numbersB2[i];
        numbersB2[i] = position;
      }
    }
  }

console.log(numbersB2);

// Bonus 3
// Resultado esperado: 
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbersB3 = [];

for (i = 0; i < numbers.length; i += 1) {
    if (i < numbers.length - 1) {
        numbersB3.push(numbers[i] * numbers[i+1]);
    } else {
        numbersB3.push(numbers[i] * 2);
    }
}

console.log(numbersB3);
