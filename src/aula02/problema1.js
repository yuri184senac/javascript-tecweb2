num1 = 10;
console.log(typeof(num1));
if (typeof(num1) !== 'number') {throw Error};

function antecessor(numero) {
    return numero-=1;
}

function sucessor(numero) {
    return numero+=1;
}

console.log(`O sucessor de ${num1} é ${sucessor(num1)} \n Já o antecessor de ${num1} é ${antecessor(num1)}`);