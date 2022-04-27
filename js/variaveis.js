// É a forma de se comentar em linha no js

// var, let, const
// var e let são variáveis (var é mais abrangente que let) e const é constante

// number, string, booleano, array, objeto

var nums = [1, 3.4, 0.6]
var texts = ['1', "1", "Gags", 'Bia', `A crase é usada pra interpolar: ${nums}`]

var bool = [true, false]

var obj = {
    nome: 'Valério',
    idade: 43,
    cidade: 'Rio de Janeiro',
    profissao: 'Desenvolvedor'
}

let avanade = [
    {
        nome: 'Victor',
        idade: 26,
        cidade: 'São Paulo',
    },
    {
        nome: 'Allyson',
        idade: 19,
        cidade: 'Franco da Rocha'
    },
    {
        nome: 'Ranna',
        idade: 19,
        cidade: 'São Paulo'
    }

]
console.log(avanade[1].cidade);

var a

let b

const c = 5;