console.log('-----------------------------------------------------')
console.log('Olá, mundo!', 'Revisão de JavaScript e Introdução a ES6!')
console.log('-----------------------------------------------------')

// ----------------------------------------------
console.log('Funções')

// FUNÇÕES
// Possuímos as funções: falar, dobro, calcularMedia
// utilize o metodo function

/*

function falar() {
    return 'Piipi popopo'
}

function dobro(num) {
    return num * 2
}

function calcularMedia(nota1, nota2, nota3){
    const soma = (nota1 + nota2 + nota3)
    const media = soma / 3
    return media
}

*/

// Vamos refatorar essas funções para a sintaxe de Arrow function
// primeiro atribua a função em uma variavel
// retire o nome function e inclua o Arrow Function depois do parametro =>
// para as funções que só tem uma linha de codigo depois das chaves, 
// retire as chaves e o return

const falar = () => 'Piipi popopo'
console.log(falar());


const dobro =  (num) => num * 2
console.log(dobro(2));


const calcularMedia =  (nota1, nota2, nota3) => {
    const soma = (nota1 + nota2 + nota3)
    const media = soma / 3
    return media
}

console.log(calcularMedia(8,5,2));

//ja refatoramos para o javascript mais moderno
console.log('-----------------------------------------------------')
// ----------------------------------------------

console.log('Callback')
// CALLBACK
// Possuímos as funções: somar, subtrair, multiplicar e dividir.
/*
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
*/

// refatore as funções na sintaxe ES6
const somar = (a, b) => a + b

const subtrair = (a, b) => a - b

const multiplicar = (a, b) => a * b

const dividir = (a, b) => a / b

//deixe para refarotar quando falar de condicionais
const ordenar = (a, b) => (a <= b) ? [a, b] : [b, a]

// Crie uma função chamada resultado que receberá como parâmetro: dois números e uma função de callback

/*
function resultado(n1, n2, callback) {
    return callback(n1, n2)
}
*/

// Refatore a função resultado na sintaxe ES6
const resultado = (a, b, callback) => callback(a, b)

// Faça a soma de dois números usando a função resultado e chamada callback 

const resultadoSoma = resultado(3, 5, somar)
console.log(`A soma de 3 com 5 é: ${resultadoSoma}`);

// Faça a subtração de dois números usando a função resultado e chamada callback 

const resultadoSubtracao = resultado(5, 3, subtrair)
console.log(`A subtração de 5 com 2 é: ${resultadoSubtracao}`);

// Faça a multiplicação de dois números usando a função resultado e chamada callback 

const resultadoMultiplicacao = resultado(5, 3, multiplicar)
console.log(`A multiplicação de 5 com 3 é: ${resultadoMultiplicacao}`)

// Faça a divisão de dois números usando a função resultado e chamada callback 

const resultadoDivisao = resultado(5, 5, dividir)
console.log(`A divisão de 5 com 5 é: ${resultadoDivisao}`)

// Faça a ordenação crescente de dois números usando a função resultado e chamada callback 

const resultadoOrdenacao = resultado(120, 68, ordenar)
console.log(`A ordenação correta dos numeros 128 e 68 é: ${resultadoOrdenacao}`)
 
console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Condicionais')
// CONDICIONAIS e Operador Condicional Ternário
// Uma estudante obteve as seguinte notas: n1, n2 e n3
const n1 = 9
const n2 = 5
const n3 = 1

// Verifique se a estudante foi aprovada. Se a média das notas for maior ou igual a 7, a estudante passou!

const media = calcularMedia(n1, n2, n3) 
// verifique se a media existe console.log(media); 
/*
if (media >= 7) {
    return 'aprovado'
} else {
    return 'reprovado'
}
*/


// condicao ? true : false
// tira o if troca o {} por ? apaga o return tira o else e coloca o :
// para verificar se está correto vamos colocar em uma variavel
const resultadoMedia = (media >= 7) ? 'aprovado': 'reprovada'
//sobre a questão do codigo limpo, 
//primeiro façam o if normal, depois transforme para ternario,
// mas a minha dica é para o if else, se você não está entendendo o que está fazendo, mantenha o if else. 


console.log(`A estudante ficou com média ${media} e foi ${resultadoMedia} !!!`);

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
/*
const nome = objeto.nome
console.log(nome)
const tipo = objeto.tipo,
console.log(tipo)
const peso = objeto.tipo,
console.log(peso)

//estou dizendo que nome da minha variavel == ao nome da propriedade que quero acessar
// apago o ponto propriedade e incluo a chaves
const {nome} = objeto
console.log(nome)
const {tipo} = objeto
console.log(tipo)
const {peso} = objeto
console.log(peso)

//estou repetindo codigo então faço a desestruturação do objeto
*/

//estou dizendo que nome == a propriedade nome então 
const {nome, tipo, peso} = objeto
console.log(nome)
console.log(tipo)
console.log(peso)

console.log(`O objeto disponível é ${nome}, feito de ${tipo} e pesa ${peso} kg!!!`);

// Declare um objeto aluna com as propriedades, Nome Completo, turma e ID
const aluna = {
    nomeCompleto: 'Denise Cardoso da Silva',
    turma: 'On12',
    id: 8596
  }

//acessando o valor nome completo

const nomeDaAluna = aluna.nomeCompleto
console.log(nomeDaAluna);


//desestruturando alunas

const {nomeCompleto, turma, id} = aluna
console.log(`A aluna ${nomeCompleto} está matriculada da turma ${turma}, e seu id é ${id}.`);


console.log('-----------------------------------------------------')
// ----------------------------------------------
// DATAS
console.log('Datas 🗓')

// Outro exemplo de um objeto JavaScript é o Date.
// Vamos criar a variável chamada hoje que irá receber a data de hoje.
const hoje = new Date()
console.log(hoje);
// Vamos capturar os valores de dia, mes e ano da data de hoje pelos métodos de Date

const dia = hoje.getDate()
const mes = hoje.getMonth()
const ano = hoje.getUTCFullYear()

console.log(dia, mes, ano); // pera javascript considera janeiro  = 0

// Vamos criar uma data específica. Lembrando que mês de Janeiro é 0 no Javascript 🤷🏻‍♀️

const nascimentoProfa = new Date(1990, 8, 3)
console.log(`A profa nasceu em ${nascimentoProfa}`);

// Podemos usar o método toLocaleString para formatar a data 

const dataFormatada = hoje.toLocaleString('pt-BR')
console.log(dataFormatada);

console.log(`A profa nasceu em ${nascimentoProfa.toLocaleString()}`);

// Temos mais opções para formatar a data temos que verificar a documentação de data no javascript
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

const dataLonga = hoje.toLocaleDateString('pt-BR', options)

console.log(dataLonga)


console.log('-----------------------------------------------------')
// ----------------------------------------------
// CLASSES
console.log('Classes 🆕')

const alunaReprograma = {
    nomeCompleto: 'Denise Cardoso da Silva',
    id: 7896,
    turma: 'On12',
    quantidadeDeAcesso: 0,
    acessarAmbiente: (acessoAmbiente) => alunaReprograma.quantidadeDeAcesso += acessoAmbiente,
    apresentacao: () => `Olá, ${alunaReprograma.nomeCompleto} - turma ${alunaReprograma.turma} - id: ${alunaReprograma.id} , você acessou o ambiente remoto ${alunaReprograma.quantidadeDeAcesso} vezes, até o momento!`
}

alunaReprograma.acessarAmbiente(1)
alunaReprograma.acessarAmbiente(1)
alunaReprograma.acessarAmbiente(1)
alunaReprograma.acessarAmbiente(1)
  
console.log(alunaReprograma.apresentacao())
console.log(alunaReprograma.quantidadeDeAcesso)



// Quero Replicar alunaReprograma2 e alunaReprograma3 com as mesmas propriedades, para ser possivel alterar os valores de nome, id, classe.
// Vamos criar a classe Alunas

class AlunaReprograma {
    constructor(nome, identificador, classe, quantidadeDeAcesso) {
      this.nome = nome
      this.id = identificador
      this.turma = classe
      this.quantidadeDeAcesso = quantidadeDeAcesso
    }
    acessarAmbiente(acessoAmbiente){
        return this.quantidadeDeAcesso += acessoAmbiente
    }
    apresentacao() {
        return `Olá, ${this.nome} - turma ${this.turma} - id: ${this.id} , você acessou o ambiente remoto ${this.quantidadeDeAcesso} vezes, até o momento!`
    }
}

const aluna1 = new AlunaReprograma('Vanessa', 8952, 'On11', 0)
aluna1.acessarAmbiente(1)
aluna1.acessarAmbiente(1)
aluna1.acessarAmbiente(1)

console.log(aluna1);
console.log(aluna1.apresentacao())


const aluna2 = new AlunaReprograma('Amanda', 7796, 'On12', 0)
aluna2.acessarAmbiente(1)
aluna2.acessarAmbiente(1)

console.log(aluna2);
console.log(aluna2.apresentacao())


console.log('-----------------------------------------------------')
// ----------------------------------------------
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')
// Declaração de arrays
const lista = new Array('pera', 'uva', 'maçã')

const numbers = [9, 2, 5, 14, 25, 16]

// Acessando elementos pela posição do array

console.log(lista[2]);
console.log(numbers[0]);

// Informe o tamanho de cada array

console.log(numbers.length);

// Faça a desestruturação do array
/*
const primeiroItem = lista[0]
console.log(primeiroItem) // pera

*/


const [primeiro, segundo, terceiro] = lista

console.log(segundo)
console.log(primeiro)

console.log('-----------------------------------------------------')

// Possuo 4 tias. Os dados delas estão armazenados no array de objetos dentro do arquivo db.js
// Vamos importar esses dados para podermos usá-los durante nosso exercício de revisão.
const database = require('./database')
console.log(database)

// ----------------------------------------------
// MÉTODOS DE ITERAÇÃO
console.log('Métodos iteração ')

// Mostre a tabela das tias pelo console.table()

const {tias} = database
console.log(tias);

console.table(tias) 
console.table(lista)

console.log('-----------------------------------------------------')
console.log('filter()')
// filter
// Filtre as tias que são gente boa e mostre no console.
// Faz  primeiro com a função separada e depois coloca dentro.
/*
function filtrarTias(item) {
    return item.votaEmQuem === 'Gente Boa'
}
const tiaslegais = tias.filter(filtrarTias)
*/

const tiaslegais = tias.filter((item) => item.votaEmQuem === 'Gente Boa')

console.table(tiaslegais)



console.log('-----------------------------------------------------')
console.log('map()')
// map
// Crie um novo array chamado tiasMaisProximas e adicione uma propriedade chamada 
// cuidouDeMim que recebe um valor booleano. Caso a tia teve até 2 filhos, isso 
// significa que ela cuidou de mim e seu valor é true. Caso ela teve mais que 
//2 filhos, o valor da propriedade cuidouDeMim é false.
/*
function cuidar(tias){
        if (tias.filhos <= 2) {
        //return tia.cuidouDeMim = true
        return tias
    } else {
        return tias.cuidouDeMim = false
    }
}
const tiasMaes = tias.map(cuidar)
console.log(tiasMaes);
*/

function cuidar(tias){
    const {nome, idade, filhos, votaEmQuem} = tias
    if (tias.filhos <= 2) {
    const tiaNova = { 
        nome: nome,
        idade: idade,
        filhos: filhos,
        votaEmQuem: votaEmQuem,
        cuidouDeMim: true
    }
    return tiaNova
} else {
    return tias.cuidouDeMim = false
}
}

const tiasMaisChegadas = tias.map(cuidar)
console.log(tiasMaisChegadas)

function cuidadora(tias){
    const {nome, idade, filhos, votaEmQuem} = tias
    if (tias.filhos <= 2) {
    const tiaNova = { 
        nome: nome,
        idade: idade,
        filhos: filhos,
        votaEmQuem: votaEmQuem,
        cuidouDeMim: true
    }
    return tiaNova
} else {
    const tiaNaoChegada = {
        nome: nome,
        idade: idade,
        filhos: filhos,
        votaEmQuem: votaEmQuem,
        cuidouDeMim: false
    }
    return tiaNaoChegada
}
}
const titiasMaisChegadas2 = tias.map(cuidadora)
console.log(`Essas são meus amores ${titiasMaisChegadas2}`);


console.log('-----------------------------------------------------')
console.log('sort()')
// SORT

// Vamos praticar o método sort() com o array numbers

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

// 9 e 2 -> retornar valor positivo -> 9 - 2 = 7 positivo
// 2 e 5 -> retornar valor negativo -> 2 - 5 = -3 negativo
// 2 e 2 -> retornar valor zero -> 2 - 2 = 0


// Refatore a função comparar e ordene numbers em ordem crescente


numbers.sort((a, b) => a - b)

console.log(numbers)

numbers.sort((b, a) => a - b)

console.log(numbers)


// Ordene as tias por ordem decrescente de idade (a mais velha primeiro)
/*
function ordenarTias(a, b){
    return b.idade - a.idade
}

tias.sort(ordenarTias)
*/

tias.sort((a, b) => b.idade - a.idade)
console.table(tias)


console.log('-----------------------------------------------------')
console.log('reduce()')
// reduce

// Faça a soma do array numbers

function somarTodos(acumulador, item) {
    return acumulador + item
}
const arraySoma = numbers.reduce(somarTodos,0) //71
//const arraySoma = numbers.reduce(somarTodos,0) //81 ... podemos incluir o frete de uma compra
console.log(arraySoma)

//faça o array reduzido
const arrayReduzido = numbers.reduce((acumulador, item)=> acumulador + item, 10)
console.log(arrayReduzido)


// Some a quantidade de netos que vovó possui.

function somarNetos(acumulador, tia){
    return acumulador + tia.filhos
}

const somarNetosTia = tias.reduce(somarNetos, 0)
console.log(somarNetosTia);


const netosComigo = tias.reduce((acumulador, tia) => acumulador + tia.filhos, 1)
console.log(netosComigo);


// ----------------------------------------------
console.log('-----------------------------------------------------')
console.log('                         Fim                         ')
console.log('-----------------------------------------------------')