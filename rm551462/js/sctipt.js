// console.log("Alo mundo!")

const h1Element = document.getElementsById("meu titulo")

//Atrelando ao h1 um evento de click!
h1Element.addEventListener("evento",()=>{

    alert("Agora com superpoderes!")
})

//Através do evento de mouse que passa sobre o elemento
//Altere a cor de fundo do elemento h1 e também da cor do texto!
h1Element.addEventListener("mouseover",()=>{

    h1Element.style.backgroundColor = "red";
    h1Element.style.fontSize = "32px"; 
    h1Element.style.color = "white";   

})

//Através do evento do mouse que sai de cima do elemento
//Altere a cor do fundo do elemento h1 e também a cor do texto!
h1Element.addEventListener("mouseleave",()=>{

    h1Element.style.backgroundColor = "white";
    h1Element.style.fontSize = "32px";
    h1Element.style.color = "black";
})