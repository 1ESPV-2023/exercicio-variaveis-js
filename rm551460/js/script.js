// conle.log("Alô mundo!")

const h1Element = document.getElementById("meu-titulo")

//Atrelando ao h1 um event de click!
h1Element.addEventListener("click", ()=>{
    alert("Agora com superpoderes!")
})

//Através do enveto de mouse que passa sobre o elemento 
//Altere a cor de fundo do elemento h1 a cor do texto!

h1Element.addEventListener("mouseover", ()=>{
    h1Element.style.backgroundColor = "red";
    h1Element.style.fontSize = "32px";
    h1Element.style.color = "white";

})

// no código abaixo é quando tirar o mouse de cima do texto e ele muda de cor
h1Element.addEventListener("mouseleave", ()=>{
    h1Element.style.backgroundColor = "white";
    h1Element.style.fontSize = "32px";
    h1Element.style.color = "black";

})



// OPERADR TERNÁRIO ( ? ) VAMOS MOSTRAR SE UM NUMERO É PAR OU IMPAR

let num1 = 10;
let mum2 = 5;

let resultado = !(10%5) ? "PAR" : "IMPAR";
//Apresentando o resultado com interpolação!
console.log(`O número ${num1} é ${resultado}.`)

