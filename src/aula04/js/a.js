let switchBebida = {
    'café': 2.00,
    'chá': 1.50,
    'chocolateQuente': 2.50
}

var adicionado = 0;
const bebidaEscolhida = prompt('Qual a bebida você deseja ?').toLowerCase();
console.log(switchBebida[bebidaEscolhida])


const leite = prompt('Você gostaria de adicionar leite (sim ou não)').toLowerCase();

if(leite === 'sim') {
    adicionado += 0.50;
}

const acucar = prompt('Você gostaria de adicionar açucar (sim ou não)').toLowerCase();

if (acucar === 'sim') {
    adicionado += 0.25
}

const chantilly = prompt('Você gostaria de adicionar chantilly (sim ou não)').toLowerCase();

if (chantilly === 'sim') {
    adicionado += 1.00
}


alert(`PREÇO TOTAL À PAGAR R$ ${adicionado + switchBebida[bebidaEscolhida]}`)


