console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')


const db = require('./database')

const { produtos } = db

produtos.sort((a, b) => a.preco - b.preco)

console.table(produtos);

const read = require('readline-sync')

const carrinho = []
//Busca por categoria.

const verProdutos = read.question('Voce deseja o produto por categoria? (S / N) :')
if (verProdutos.toUpperCase() === 'S') {
    console.log('--------------------------------------')
    console.log('Essas são as nossas categorias:')
    console.log('Alimento, bebida, casa, higiene, Informática')
    console.log('--------------------------------------')

    const qualCategoria = read.question('Voce procura produtos de qual categoria? ')

    //vamos filtrar a categoria desejada
    const categorias = produtos.filter(item => item.categoria === qualCategoria)

    console.table(categorias); 
} else { (verProdutos.toUpperCase() !== 'S') 
    console.log('Esses são nossos produtos disponiveis!')
    console.table(produtos)
}


console.log('--------------------------------------')


//Calcular o valor do subtotal 

//sutotal metodo recude

const array = new Array()

class Pedido{
    constructor(array){
        this.products = array //se existir ID as propriedades vem pra ca
        this.subtotal = 0
        this.valortotal = 0
        this.totalItens = 0
    }
}
const shopping = () => {

    productId = parseInt(read.question('Digite o id do produto desejado: '))

    //validando o Id
    for (i = 0; i < 1000; i++) {
        findingId = produtos.find(item => item.id === productId)
        if (findingId) {
            break;
        } else {
            productId = parseInt(read.question('Que pena!Id não encontrado, tente novamente: '))
        }
    }

    qtdItems = parseInt(read.question('Digite a quantidade de produtos que deseja comprar: '))

    //validando a quantidade
    for (i = 0; i < 1000; i++) {
        if (qtdItems > 0) {
            break;
        } else {
            qtdItems = parseInt(read.question('Digite uma quantidade válida: '))
        }
    }

    //adicionando os produtos
    const produtosCarrinho = { ...findingId, quantidade: qtdItems}
    carrinho.push(produtosCarrinho)

    //validação para continuar comprando
    const continueComprando = read.question('Deseja inserir mais algum produto no carrinho? (Digite S ou N): ')
    const continueComprandoFormat = continueComprando.toLowerCase()

    if (continueComprandoFormat === "n") {
        cupom = parseInt(read.question('Digite o valor do seu cupom de desconto: '))
    } else {
        shopping()
    }

    //validando o cupom
    for (i = 0; i < 1000; i++) {
        if (cupom > 15 || cupom < 0) {
            cupom = parseInt(read.question('Lamento, cupom inválido! Tente novamente: '))
        } else {
            break;
        }
    }
}

shopping()

class Order {
    constructor(carrinho){
      this.newProducts = carrinho
      this.subtotal = 0
    }
    calcSubtotal() {
      this.subtotal = this.newProducts.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0)
    }

  }


const order = new Order (carrinho)
console.table(order.newProducts)

//calculando o subtotal
order.calcSubtotal()
console.log(`Valor do pedido: R$ ${order.subtotal.toFixed(2)}.`)