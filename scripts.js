// console.log('Olá!')

//////////////////////////////////////////
// // console
//////////////////////////////////////////
// console.error('Este é um erro!')
// console.warn('Este é um aviso!')
// console.log('Esta é uma mensagem!')

// // variáveis
// var x = 10    /* - Escopo global */
// let y = 15    /* - Escopo local */
// const z = 20  /* - Escopo local */

// console.log(x)
// console.log(y)
// console.log(z)

// // tipos de dados
// const name = 'Davi'
// const number = 4
// const isApproved = false
// let surname = null
// let age
// const languages = ['JavaScript', 'PHP', 'Python']
// const user = { email: 'Davi@teste.com', password: 'teste123' }

// console.log(name)
// console.log(number)
// console.log(languages)

// console.log(typeof name) // String
// console.log(typeof surname) // Null
// console.log(typeof user) // Object

//////////////////////////////////////////
// // métodos de string
//////////////////////////////////////////
// const fullName = 'Davi Fer'

// console.log(fullName.length) // 8

// const stringToArray = fullName.split(' ') // jogando nome pro array

// console.log(stringToArray) // ["Davi", "Fer"]

// console.log(fullName.toLowerCase()) // minúscula

// console.log(fullName.toUpperCase()) // Maiúscula

// console.log(fullName.indexOf('Fer')) // 5

// console.log(fullName.slice(0, 7)) // Davi Fe - apenas 7

//////////////////////////////////////////
// métodos de array
//////////////////////////////////////////
// const list = ['a', 'b', 'c', 'd', 'e']

// console.log(list.length) // quantidade de elementos

// console.log(list[2]) // c - pegando elemento específico

// list[5] = 'f' // adicionando item na lista
// console.log(list) // ['a', 'b', 'c', 'd', 'e', 'f']

// list.push('g')  // adicionando g no último elemento 
// console.log(list) // ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// console.log(list[list.length - 1]) // pegando ultimo item - g

// list.pop() // remover eleento no final da lista

// list.shift() // remove inicio da lista
// console.log(list) //  ['b', 'c', 'd', 'e', 'f']

// list.unshift('a') // adiciona no início da lista
// console.log(list) // ['a', 'b', 'c', 'd', 'e', 'f']

//////////////////////////////////////////
// // objetos
//////////////////////////////////////////
// const product = {
//   name: 'Camisa',
//   price: 15.99,
//   inStock: true,
//   sizes: ['P', 'M', 'G'],
// }
// console.log(product['name'])
// console.log(product.name) // acessando name. Resultado: Camisa

// product.color = 'Azul' // Adicionando propriedade

// console.log(product)

//////////////////////////////////////////
// // destructuring
//////////////////////////////////////////
// const { price, inStock } = product 

// console.log(price)
// console.log(inStock)

//////////////////////////////////////////
// // JSON
//////////////////////////////////////////
// const dog = {name: 'Shark',age: 10,} // JS
// const json = JSON.stringify(dog)  // convertendo pra Json
// console.log(json)

// const obj = JSON.parse(json)  // do Json pro JS
// console.log(obj)

//////////////////////////////////////////
// // Estruturas condiconais
//////////////////////////////////////////
// const a = 10
// if (a > 8) {
//   console.log('A é maior que 8!')
// }

// const b = 'Davi'

// if (b === 'João') {
//   console.log('O nome é João!')
// } else if (b === 'Davi') {
//   console.log('O nome é Davi!')
// } else {
//   console.log('Não encontramos o nome do usuário!')
// }
// // IF ternário
// const someNumber = 14
// let testingANumber = someNumber < 20 ? 'Yes' : 'No'

// console.log(testingANumber) // yes

//////////////////////////////////////////
// // Estruturas de repetição
//////////////////////////////////////////
// const myList = [1, 2, 3, 4, 5]
// let counter = 0
// while (counter < myList.length) {
//   console.log('Imprimindo: ' + myList[counter])
//   counter++
// }

// const mySecondList = ['a', 'b', 'c', 'd', 'e']
// for (let counter = 0; counter < mySecondList.length; counter++) {
//   console.log('Imprimindo: ' + mySecondList[counter])
// }
//////////////////////////////////////////
// // array methods
//////////////////////////////////////////
//forEach
// const names = ['Davi', 'João', 'Pedro', 'Maria']

// names.forEach(function (name) {
//   console.log(`O nome é: ${name}`)
// })

// MAP 
// const modifiedNames = names.map(function (name) {
//   if (name === 'Davi') {
//     return (name = 'Sr. Davi')  // alterando Davi do array pra Sr Davi
//   } else {
//     return name
//   }
// })
// console.log(modifiedNames)

//Filter
// const bigNumbers = [1, 2, 3, 10, 50].filter((number) => {
//   return number > 5
// })
// console.log(bigNumbers) // [10, 50]

// // Reduce
// const sumAll = [10, 20, 30, 40, 50].reduce((total, number) => {
//   return total + number // pegando 10, volta e soma com 20, volta e soma com 30 ...
// })
// console.log(sumAll) // 150  - total da união

//////////////////////////////////////////
// Funções
//////////////////////////////////////////
// function minhaFuncao() {
//   console.log('Olá função!')
// }
// minhaFuncao() // mostrando 

// function nomeCompleto(nome, sobrenome) {
//   return `Olá ${nome} ${sobrenome}, como vai?`
// }
// const saudacao = nomeCompleto('Davi', 'Fer') // passando parâmetros da função (nome, sobrenome)
// console.log(saudacao)

// const primeiroNome = 'Primeiro'
// const segundoNome = 'Segundo'
// const primeiroSegundoNome = nomeCompleto(primeiroNome, segundoNome) 
// console.log(primeiroSegundoNome)

// arrow function
// const myArrowFunction = (a, b) => {
//   return a + b
// }
// console.log(myArrowFunction(2, 2))  // colocando valores nos parâmetros da arrow function 

// const mySimpleArrow = (a, b) => a + b   // simplificada
// console.log(mySimpleArrow(5, 5))

//////////////////////////////////////////
// // classes
//////////////////////////////////////////
// class Product {
//   constructor(name, price, size) {
//     this.name = name
//     this.price = price
//   }
//   productDetails() {
//     return `O nome do produto é ${this.name} e custa RS ${this.price} `
//   }
// }
// const socks = new Product('Meia branca', 5.99)
// console.log(socks.productDetails())

// Herança  // colocando um atributo específico para o objeto
// class SuperProduct extends Product {
//   constructor(name, price, size) {
//     super(name, price)
//     this.size = size
//   }
//   showAdjective(adjective){
//     return `O ${this.name} é muito ${adjective}`
//   }
// }
// const tenis = new SuperProduct('Tênis verde', 50.90, '42')
// console.log('Tipo: ' + tenis.name +'. Tamanho do tênis: ' + tenis.size)
// console.log(tenis.showAdjective('Elegante'))

//////////////////////////////////////////
// // DOM
//////////////////////////////////////////
const title = document.getElementById('title')
console.log(title)
const sameTitle = document.querySelector('#title')
console.log(sameTitle)
const texts = document.querySelectorAll('.text')
console.log(texts)
console.log(texts[1]) // selecionando elemento específico

// acessando texts com toddas as classes e alterando 
texts.forEach((textComForEach) => { 
  console.log(textComForEach.textContent.toUpperCase())
})

// manipulação de elementos
title.textContent = 'Mudei o texto'

texts[0].innerHTML = '<h3>Alteramos o HTML deste elemento</h3>'

texts[1].style.backgroundColor = 'red'  // colocando estilo

texts[2].classList.add('my-class')  // adicionando classe

texts[3].remove()

// eventos
btn.addEventListener('click', function () {
  console.log('clicou!')
})
btn.addEventListener('click', function () {
  texts[2].style.color = 'blue'
})
