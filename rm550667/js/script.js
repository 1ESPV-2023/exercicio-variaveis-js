console.log('Alô galera da bagunça')

const h1Element = document.getElementById('Batata Gigante');

//Atrelando um evento de click ao h1
// h1Element.addEventListener('click',()=>{
//    alert('Agora com mais batata')
//})
h1Element.addEventListener('mouseover',()=>{
    h1Element.style.backgroundColor = 'red';
    h1Element.style.color = 'blue';
    h1Element.style.fontSize = '64px'
})
h1Element.addEventListener('mouseleave',()=>{
    h1Element.style.backgroundColor = 'white';
    h1Element.style.color = 'black';
    h1Element.style.fontSize = '32px'
})

//OPERADOR TERNÁRIO (?????????)
//Realizar uma operação de paridade utilizando o operador módulo (%)
let num1 = 10;
let num2 = 5;

let resultado = !(10%5) ? 'PAR' : 'IMPAR';
//Apresentando o resultado com interpolação
console.log (`O número é ${num1} é ${resultado}.`)