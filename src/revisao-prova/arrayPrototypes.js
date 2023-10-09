let bebidas = []
let comidas = []
let dataDaCompra = []
let notaFiscal = [1,2,3,4]

//funcao para adicionar item na primeira posicao do array
Array.prototype.inserir = function(item) {
    for (let i = this.length; i>=0; i--) {
        this[i] = this[i-1];
    }
    this[0] = item;
}

Array.prototype.remover = function(item) {
    
}

notaFiscal.inserir(13)

for (n of notaFiscal) {
    console.log(n)
}





