// console.log("Santos")

const h1Element = document.getElementById('santastico');

// h1Element.addEventListener("click",() =>
// alert("Não entendo nada")

h1Element.addEventListener("mouseover",()=>{
    h1Element.style.backgroundColor = "purple";
    h1Element.style.fontSize = "40px";
    h1Element.style.color = "black"
})

h1Element.addEventListener("mouseleave",()=>{
    h1Element.style.backgroundColor = "white";
    h1Element.style.fontSize = "32px";
    h1Element.style.color = "black"
})
