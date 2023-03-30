//var h1Element = document.getElementById("meu-titulo");

//Atrelando ao h1 um evento de click

//h1Element.addEventListener("click", ()=>{
 //   alert("Hello World");

//});

//Através do evento de mouse que passa sobre o elemento
//Altere a cor de fundo do elemento h1 e também a cor do texto!

const h1Element = document.getElementById("meu-titulo");

h1Element.addEventListener("mouseover", ()=>{

    h1Element.style.backgroundColor = "red";
    
    
});

