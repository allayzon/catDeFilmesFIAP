//! Laços de repetição são: For, While, Do ... While

//* Vamos construir um loop para fazer as tabuadas

// let a = 0
// console.log(a = 0 + 1) // a = 1
// console.log(a = a + 1) // a = 1 + 1 = 2
// console.log(a += 1) // a = 2 + 1 = 3
// console.log(++a); // a = 3 + 1 = 4

// for (let i = 0; i <= 10; i++) {
//     console.log(`A tabuada do ${i} é:`);
//     for(let j = 0; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

//* Construindo um loop while

let a = 0

while (a < 3) {
    console.log('Bom dia do laço while!');
    a++
}

do {
    console.log('Bom dia do laço do ... while!');
    a++;
} while (a > 0)