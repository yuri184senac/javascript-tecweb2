frutas = ['Maça', 'Uva', 'Banana', 'Laranja', 'Abacaxi']
 console.log(frutas)
//frutas.shift() //remover o primeiro
// console.log(frutas)
//frutas.pop() //remover o ultimo
// console.log(frutas)
//frutas.unshift('Morango')
// console.log(frutas)
frutas.splice(1,2) //retira os elementos apartir 
console.log(frutas)


var posicao = frutas.indexOf("Tangerina")
console.log(posicao)


var contador = 0
frutas.forEach( x => {
    contador +=1
});
console.log(contador);