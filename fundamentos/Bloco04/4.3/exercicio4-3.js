// Exercício 1
// Fazer um quadrado de asteriscos

let n = 15;

let resultado = "";

// Se fizer console.log apenas deste primeiro loop, vai fazer a "escada"
for (j = 1; j <= n; j += 1) {
    resultado = resultado + '*';
}

for (i = 1; i <= n; i += 1) {
    console.log(resultado)
}

// Exercício 2
// Fazer uma escada! =D

resultado = "";

for (j = 1; j <= n; j += 1) {
    resultado = resultado + '*';
    console.log(resultado);
}

// Exercício 3
// Fazer a escada invertida no sentido horizaontal

resultado = "";

for (i = 1; i <= n; i += 1) {
    for (j = 1; j <= n; j += 1) {
        if (j <= n - i) {
            resultado = resultado + " ";
        } else {
            resultado = resultado + "*";
        }
    }
    console.log(resultado);
    resultado = "";
}

// Exercício 4
// Fazer uma pirâmide

resultado = "";
let meio = (n/2) + 0.5;
let piramide = "";
let esquerda = "";
let direita = "";

console.log(meio);

for (i = 0; i < meio; i += 1) {
    for (j = 0; j < meio; j += 1) {
        if (j < meio - i -1) {
            esquerda = esquerda + " ";
            direita = direita + " ";
        } else if (j <= meio - i) {
            piramide = piramide + "*";
        }
    }
    resultado = esquerda+piramide+direita;
    console.log(resultado);
    esquerda = "";
    direita = "";
    resultado = "";
}

//Bonus Exercício 5
// Fazer uma piramide vazada

