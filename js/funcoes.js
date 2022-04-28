//!esta é uma função normal
// let a = Math.floor(Math.random() * 1000)
// function minhaPrimeiraFuncao() {
//     let b = Math.floor(Math.random() * 1000)  // floor arredonda os números
//     if(a > b) {
//         console.log(`${a} - ${b} = ${a - b}`)
//     } else {
//         console.log(`${a} + ${b} = ${a + b}`)
//     }
//     console.log('Estou executanto esta função!')
//     return
// }
// minhaPrimeiraFuncao()

//!esta é uma função anônima armazenada em uma constante
// const minhaSegundaFuncao = function() {
//     return 'Escrevendo minha função anônima!'
// }

// console.log(minhaSegundaFuncao());

//!esta é uma arrow function, ela pode ser uma função normal ou anônima, mas se receber um parâmetro, é arrow function
const t = _ = 'Esta é uma arrow function'

const a = (nome) => {
    return `Olá ${nome}, esta é uma arrow function`
}
console.log(a('Rose'))

function b(nome) {
    return `Esta é uma arrow function`
}

const c = function(nome) {
    return `Esta é uma arrow function`
}
