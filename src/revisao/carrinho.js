const shoppingCart = [];

function addItemToCart(item) {
    shoppingCart.push(item);
}

function removerItemFromCart(item){
    const index = shoppingCart.indexOf(item);
    if (index !== -1) 
        shoppingCart.splice(index,1)
}

function viewCart() {
    if(shoppingCart.length === 0) {
        console.log('Seu carrinho está vazio')
    } else {
        for (item of shoppingCart) {
            console.log(item)
        }
    }
}
function clearCart(){
    shoppingCart.length=0
    console.log('Esvaziado')
}

addItemToCart('suco')
addItemToCart('pepsi')
addItemToCart('maracuja')

shoppingCart.splice(0,1)

viewCart()