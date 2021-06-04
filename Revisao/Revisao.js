console.log('-----------------------------------------------------')
console.log('Olá, mundo! Revisão de JavaScript e Introdução a ES6!')
console.log('-----------------------------------------------------')

// ----------------------------------------------
console.log('Funções')

// FUNÇÕES
// Crie as funções: falar, dobro, calcularMedia


// Agora vamos refatorar essas funções para a sintaxe de Arrow function


console.log('-----------------------------------------------------')
// ----------------------------------------------

console.log('Callback')
// CALLBACK
// Possuímos as funções: somar, subtrair, multiplicar e dividir.
function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b){
    return a / b
}

function ordenar(a, b) {
    if (a <= b) {
        return [a, b]
    } else {
        return [b, a]
    }
}

// refatore as funções somar, subtrair, multiplicar, dividir  na sintaxe ES6



// Crie uma função chamada resultado que receberá como parâmetro: dois números e uma função de callback



// Refatore a função calcular na sintaxe ES6


// Faça a soma de dois números usando a função callback  


// Faça a subtração de dois números usando a função callback  



// Faça a multiplicação de dois números usando a função callback  



// Faça a divisão de dois números usando a função callback 



// Faça a ordenação crescente de dois números usando a função callback  




console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Condicionais')

// CONDICIONAIS
// Uma estudante obteve as seguinte notas: n1, n2 e n3
const n1 = 9
const n2 = 5
const n3 = 1
// Verifique se a estudante foi aprovada. Se a média das notas for maior ou igual a 7, a estudante passou! E refatore




//volte e refatore a função ordenar

console.log('-----------------------------------------------------')
// ----------------------------------------------
// OBJETOS
console.log('Objetos  🪑')

// Declaração de objetos
const objeto = new Object()
objeto.nome = 'cadeira'
objeto.tipo = 'madeira'
objeto.peso = 7

// Fazer destructuring e acessar os valores de objeto 

// Declare um objeto alun com as propriedades, Nome Completo, turma e ID

// Fazer destructuring e acessar os valores de objeto e aluna



console.log('-----------------------------------------------------')
// ----------------------------------------------
// DATAS
console.log('Datas 🗓')

// Outro exemplo de um objeto JavaScript é o Date.
// Vamos criar a variável chamada hoje que irá receber a data de hoje.


// Vamos capturar os valores de dia, mes e ano da data de hoje pelos métodos de Date


// Vamos criar uma data específica. Lembrando que mês de Janeiro é 0 no Javascript 🤷🏻‍♀️


// Podemos usar o método toLocaleString para formatar a data


// Temos mais opções para formatar a data
//const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }



console.log('-----------------------------------------------------')
// ----------------------------------------------
// CLASSES
console.log('Classes 🆕')

// Vamos criar a classe Alunas Reprograma


console.log('-----------------------------------------------------')
// ----------------------------------------------
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')

// Declaração de arrays
const lista = new Array('pera', 'uva', 'maçã')

const numbers = [9, 2, 5, 14, 25, 16]

// Acessando elementos pela posição do array


// Informe o tamanho de cada array


// Faça a desestruturação do array



// Possuo 4 tias. Os dados delas estão armazenados no array de objetos dentro do arquivo database.js
// Vamos importar esses dados para podermos usá-los durante nosso exercício de revisão.




console.log('-----------------------------------------------------')
// ----------------------------------------------
// MÉTODOS DE ITERAÇÃO
console.log('Métodos iteração ')

// Mostre a tabela das tias pelo console.table()



console.log('-----------------------------------------------------')
console.log('filter()')
// filter
// Filtre as tias que moram em SP e mostre no console.



console.log('-----------------------------------------------------')
console.log('map()')
// map
// Crie um novo array chamado tiasMaisChegadas e adicione uma propriedade chamada cuidouDeMim que recebe um valor booleano. Caso a tia teve até 2 filhos, isso significa que ela cuidou de mim e seu valor é true. Caso ela teve mais que 2 filhos, o valor da propriedade cuidouDeMim é false.




console.log('-----------------------------------------------------')
console.log('sort()')
// SORT
/*
function funcaoDeComparacao(a, b) {
  if (a < b) {
    return -1 // ao retornar valor negativo, a ordem fica [a, b]
  } else if (a > b) {
    return 1 // ao retornar valor positivo, a ordem fica [b, a]
  } else {
    return 0 // ao retornar valor nulo, a ordem permanece [a, b]
  }
}
*/
// Vamos praticar o método sort() com o array numbers
// const numbers = [9, 2, 5]
// 9 e 2 -> retornar valor positivo -> 9 - 2 = 7 positivo
// 2 e 5 -> retornar valor negativo -> 2 - 5 = -3 negativo
// 2 e 2 -> retornar valor zero -> 2 - 2 = 0

// Refatore a função comparar e ordene numbers em ordem crescente





// Ordene as tias por ordem decrescente de idade (a mais velha primeiro)




console.log('-----------------------------------------------------')
console.log('reduce()')
// reduce

// Faça a soma do array numbers


// Some a quantidade de netos que vovó possui.




// ----------------------------------------------
console.log('-----------------------------------------------------')
console.log('                         Fim                         ')
console.log('-----------------------------------------------------')