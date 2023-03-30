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

h1Element.addEventListener("mouseleave", ()=>{
    h1Element.style.backgroundColor = "white";
    h1Element.style.fontSize = "32px";
    h1Element.style.color = "black";

})