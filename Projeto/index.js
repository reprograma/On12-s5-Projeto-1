console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('             Tassila Bomfim         ')
console.log('--------------------------------------')


//vamos instanciar, o nosso banco de dados
const db = require('./database')

const { produtos } = db
//verificar se veio
// console.table(produtos)
// Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior). Utilize a lista contida no arquivo database.js

produtos.sort((a, b) => a.preco - b.preco)

//console.table(produtos);

const read = require('readline-sync')

//Busca por categoria.
// para isso precisamos pedir ao usuario que digite se quer ou nao encontrar 
// por categoria e se sim informar a categoriar para entrão filtrar
const verProdutos = read.question('Voce deseja encontrar o produto por categoria? (S / N) :')
if (verProdutos.toUpperCase() === 'S') {
    console.log('--------------------------------------')
    console.log('Essas são as nossas categorias:')
    console.log('Alimento, Bebida, Casa, Higiene, Informática')
    console.log('--------------------------------------')
     
    const qualCategoria = read.question('Voce esta procurando produtos de qual categoria? ')
    
    //vamos filtrar a categoria desejada
    const categorias = produtos.filter(item => item.categoria === qualCategoria)
    
    console.table(categorias); 
} else { (verProdutos.toUpperCase() !== 'S') 
    console.log('Esses são nossos produtos disponiveis!')
    console.table(produtos)
}


console.log('--------------------------------------')


//Calcular o valor do subtotal (sem considerar o desconto)

//sutotal podem usar metodo recude

const array = new Array()

class Pedido{
    constructor(array){
        this.products = array //se existir ID as propriedades vem pra ca
        this.subtotal = 0
        this.valortotal = 0
        this.totalItens = 0
    }
}
