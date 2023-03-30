//alert('TESTE DE INICIO')

/*const nome1 = 'Mario';
var nome = "João";
if (nome != ""){
    let nome = Maria;
}
Hoisting

nome = joão;
console.log(nome)
var nome*/

// Recuperando o elemento h1 através do id e colocando em uma constante
const h1element = document.getElementById('meu-titulo')

// Escutando o evento de click no elemtno h1 com a função
// addeventListener
// h1element.addEventListener("click",()=>{ 
//     alert('Agora com super-poderes!')
// })

h1element.addEventListener("mouseover",()=>{ 
   h1element.style.backgroundColor = "red";
   h1element.style.fontSize = "50px";
   h1element.style.color = "blue";
})

h1element.addEventListener("mouseleave",()=>{ 
    h1element.style.backgroundColor = "white";
   h1element.style.fontSize = "32px";
   h1element.style.color = "black";
})
 

//30-03-23
