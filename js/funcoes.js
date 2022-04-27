let a = Math.floor(Math.random() * 1000)
function minhaPrimeiraFuncao() {
    let b = Math.floor(Math.random() * 1000)  // floor arredonda os números
    if(a > b) {
        return `${a} - ${b} = ${a - b}`
    } else {
        return `${a} + ${b} = ${a + b}`
    }
}
console.log(minhaPrimeiraFuncao())