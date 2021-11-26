let a = 4;
let b = 3;

console.log(a+b);

console.log(a-b);

console.log(a*b);

console.log(a/b);

console.log(a%b);

// --------

if (a > b){
    console.log("O maior é a");
} else {
    console.log("O maior é b");
};

// --------

let c = 10;

if (a > b && a > c){
    console.log("O maior é a");
} else if (b > a && b > c){
    console.log("O maior é b");
} else {
    console.log("O maior é c");
};

// --------

if (a > 0){
    console.log('positive');
} else if ( a < 0){
    console.log('negative');
} else {
    console.log('zero');
}

// --------

const abc = 45;
const bca = 30;
const cab = 105;

if (abc + bca + cab == 180){
    console.log("true");
} else if (abc < 0 || bca < 0 || cab < 0){
    console.log("What!??!");
} else {
    console.log("false");
};

// --------

const chessPiece = 'BiShOp';
let result = chessPiece.toLowerCase();

switch (result) {
    case 'king':
        console.log("Kings go anywhere they want, one step at a time.");
        break;
    case 'queen':
        console.log("The Queen moves in straight lines, anywhere, anytime. And it will crush you everytime!");
        break;
    case 'bishop':
        console.log("Never straight ahead, nor backwards. Can't choose right nor left either. Tricky, isn't it? Try diagonals.");
        break;
    case 'knight':
        console.log("The big 'L'... Is it for LOO...ney?? You never know with the one who can only strike at a distance.");
        break;
    case 'tower':
        console.log("Moving tower?!? WTF?!?! Well, towers are square-based, I suppose, so they shouldn't take diagonals.");
        break;
    case 'pawn':
        console.log("They can rush two steps at the beginning if they want, and later they lose their energy. And can't attack foward, only front diagonals. Cockeye, perhaps?");
        break;
    default:
        console.log("Not a chess piece")
        break;
};

// --------

let nota = 75;

if (nota < 0 || nota > 100){
    console.log("Não é uma nota válida");
} else if (nota >= 90){
    console.log("A");
} else if (nota >= 80){
    console.log("B");
} else if (nota >= 70){
    console.log("C");
} else if (nota >= 60){
    console.log("D");
} else if (nota >= 50){
    console.log("E");
} else {
    console.log("F");
};

// --------

const x = 5;
const y = 7;
const z = 2;

if (condition) {
    
}