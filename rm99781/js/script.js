const h1Element = document.getElementById("meu-titulo");

//Atrelando ao h1 um evento de click

h1Element.addEventListener("click", ()=>{
    alert("Hello World");

});

//Através do evento de mouse que passa sobre o elemento
//Altere a cor de fundo do elemento h1 e também a cor do texto!


h1Element.addEventListener("mouseover", ()=>{

    h1Element.style.backgroundColor = "red";
    h1Element.style.fontSize = "64px";
    h1Element.style.color = "white";

});

//Quando o mouse sai do bloco, volta ao default
h1Element.addEventListener("mouseleave",()=>{
    h1Element.style.backgroundColor = "White";
    h1Element.style.fontSize = "32px";
    h1Element.style.color = "black";
});


//Operador ternário (?)




