var a = 14
var b = 14
var c = 16
var maior = null;

if ((a > b) && (a > c))  {
    maior = a;
} else if ((b > a) && (b > c)) {
    maior = b;
} else if ((c > a) && (c > b)) {
    maior = c
}
console.log('logica 1:', maior);

if (a > b) {
    maior = a;
} else if (maior < b) {
    maior = b;
} else if (maior < c) {
    maior = c;
}
console.log('logica 2:', maior);

