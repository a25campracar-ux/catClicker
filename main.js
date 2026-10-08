// let cont=0;
// let cont2=0;
// const img1 = document.getElementById("gato1");
// const img2 = document.getElementById("gato2");
// img1.addEventListener("click", function(){
//     cont++;
//     document.getElementById("clicks1").innerHTML=cont;
// })
// img2.addEventListener("click", function(){
//     cont2++;
//     document.getElementById("clicks2").innerHTML=cont2;
// });

const gatos = ['Felipe', 'Mariano', 'Rodolfo', 'Emilio', 'Daniel'];
const imagenes = ['img/gato1.jpg', 'img/gato2.jpg', 'img/gato3.jpg', 'img/gato4.jpg', 'img/gato5.jpg'];
const contadores = new Array(gatos.length).fill(0);
let gatoActual = -1;

const lista = document.getElementById("lista");

for (let i = 0; i < gatos.length; i++) {
    // Añadir nombre del gato
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = gatos[i];
    nuevoItem.addEventListener('click', function(){
        gatoActual = i;
        mostrar(i);
    });
    
    lista.appendChild(nuevoItem);
}

const img = document.getElementById('imgGato');
img.addEventListener('click', function(){
    if (gatoActual !== -1) {
        contadores[gatoActual]++;
        document.getElementById("clicks").textContent = contadores[gatoActual];
    }    
})

function mostrar(posicion) {
    img.src = imagenes[posicion];

    document.getElementById('nombreGato').textContent = gatos[posicion];
    document.getElementById('clicks').textContent = contadores[posicion];
}
