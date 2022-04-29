let listaDeFilmes = [
    'https://br.web.img3.acsta.net/pictures/14/08/11/13/34/537036.jpg',
    'https://img.elo7.com.br/product/original/39B7AE4/quadro-interestelar-a3-com-vidro-quadro-maritimo.jpg',
    'https://br.web.img3.acsta.net/pictures/210/140/21014024_20130619225537406.jpg',
    'https://ingresso-a.akamaihd.net/img/cinema/cartaz/6429-cartaz.jpg',
    'https://br.web.img2.acsta.net/medias/nmedia/18/87/89/23/19962617.jpg',
    'https://seuladogeek.com.br/wp-content/uploads/2022/04/Jogador-No-1.jpg'
]

let listaDeTitulos = [
    'Relatos Selvagens',
    'Interestelar',
    'Truque de Mestre',
    'Cantando na Chuva',
    'Efeito Borboleta',
    'Jogador Nº 1'
]

//!DOM - Document Object Model (é o que usaremos para acessar a página html pelo javascript)
let catalogo = document.querySelector('#catalogo') //querySelector permite que nós peguemos um elemento por id, classe e etc
let i = 0
let erro = document.querySelector('#erro')

for(i; i < listaDeFilmes.length; i++) {
    catalogo.innerHTML += `
    <div class = "filme">
        <img src=${listaDeFilmes[i]}>
        <figcaption>${listaDeTitulos[i]}</figcaption>
    </div>`
}

let filmeRepetido = true

function cadastrar() {
    let novoFilme = document.querySelector('#filme').value
    console.log(novoFilme)

    let novoTitulo = document.querySelector('#titulo').value
    console.log(novoTitulo)

    if(listaDeFilmes.includes(novoFilme) || listaDeTitulos.includes(novoTitulo)) {
        erro.innerHTML = `Filme ${novoFilme} já cadastrado`
    } else {
        listaDeFilmes.push(novoFilme)
        listaDeTitulos.push(novoTitulo)
        erro.innerHTML = ''
        //? Vamos chamar uma função para mostrar os filmes
    }
    document.querySelector('#filme').value = ''
    document.querySelector('#titulo').value = ''

}

function mostraFilme() {
    do {
        catalogo.innerHTML += `
            <div>
                <img src=${listaDeFilmes[i]} alt=${listaDeTitulos[i]}><figcaption>${listaDeTitulos[i]}
            </div>
        `
    } while (i < listaDeFilmes.length)
}