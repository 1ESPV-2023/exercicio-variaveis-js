const h1Element = document.getElementById("meu-titulo");

/*
Através do evento de mouse que passa sobre o elemento altere a cor de fundo do 
elemento h1 e também a cor do texto!
*/
h1Element.addEventListener("mouseover",()=>{
    h1Element.style.backgroundColor = "purple";
    h1Element.style.fontSize = "50px";
    h1Element.style.color = "white";
})
h1Element.addEventListener("mouseleave",()=>{
    h1Element.style.backgroundColor = "white";
    h1Element.style.fontSize = "32px";
    h1Element.style.color = "black";
})

//OPERADOR TERNÁRIO
//Realizar uma operação de paridade ultilizando o operador ( % ) módulo.

let num1 = 10;
let num2 = 5;
let resultado = !(10%5) ? "PAR" : "IMPAR";
//Apresentando o resultado com interpolação!
console.log(O numero ${num1} é ${resultado}.)