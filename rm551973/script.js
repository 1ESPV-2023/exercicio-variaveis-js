const h1Elemnt = document.getElementById("meu-titulo");

h1Elemnt.addEventListener("mouseover",()=>{
    h1Elemnt.style.color = "white";
    h1Elemnt.style.backgroundColor = "red";
    h1Elemnt.style.transition = "background-color 0.8s ease-in-out";
});

h1Elemnt.addEventListener("mouseleave",()=>{
    h1Elemnt.style.color = "black";
    h1Elemnt.style.backgroundColor = "white";
    h1Elemnt.style.transition = "background-color 0.4s ease-in-out";
});


let num1 = 10;
let num2 = 5;

resultado = !(num1%num2) ? "par" : "impar";

console.log(`o numero ${num1} é ${resultado}`)

