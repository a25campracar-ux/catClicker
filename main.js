
// const gatos = ['Felipe', 'Mariano', 'Rodolfo', 'Emilio', 'Daniel'];
// const imagenes = ['img/gato1.jpg', 'img/gato2.jpg', 'img/gato3.jpg', 'img/gato4.jpg', 'img/gato5.jpg'];
// const contadores = new Array(gatos.length).fill(0);
// let gatoActual = -1;

 let model = {
    init: function () {
        this.data = {
            gatoSeleccionado: 0,
            gatos: [
                { nombre: "Felipe", content: "lorem", image: "img/gato1.jpg", clicks: 0 },
                { nombre: "Mariano", content: "lorem2", image: "img/gato2.jpg", clicks: 0 },
                { nombre: "Rodolfo", content: "lorem3", image: "img/gato3.jpg",clicks: 0 },
                { nombre: "Emilio", content: "lorem4", image: "img/gato4.jpg", clicks: 0 },
                { nombre: "Daniel", content: "lorem5", image: "img/gato5.jpg", clicks: 0 }
            ]
        };
    },

    getGatos: function () {
        return this.data.gatos;
    },

    getGatoActual: function () {
        return this.data.gatos[this.data.gatoSeleccionado];
    },

    setGatoActual: function(posicion) {
        this.data.gatoSeleccionado = posicion;
    },

    sumarClick: function() {
        this.getGatoActual().clicks++;
    }
};

//CONTROLADOR

let controller = {
    getGatos: function () {
        return model.getGatos();
    },

    getGatoActual: function () {
        return model.getGatoActual();
    },

    seleccionarGato: function (posicion) {
        model.setGatoActual(posicion);
        view.renderGato();
    },

    sumarClick: function () {
        model.sumarClick;
        view.renderClick();
    },
    
    init: function() {
        model.init();
        view.init();
    }
};

const lista = document.getElementById("lista");

// Recorre la lista y selecciona un gato
for (let i = 0; i < data.gatos.length; i++) {
    // Añadir nombre del gato
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = data.gatos[i].nombre;
    nuevoItem.addEventListener('click', function(){
        data.gatoSeleccionado = i;
        mostrar(data.gatoSeleccionado);
    });
    
    lista.appendChild(nuevoItem);
}

//
const img = document.getElementById('imgGato');
img.addEventListener('click', function(){
    if (data.gatoSeleccionado !== -1) {
        data.gatos[data.gatoSeleccionado].clicks++;
        document.getElementById("clicks").textContent = data.gatos[data.gatoSeleccionado].clicks;
    }    
})

function mostrar(posicion) {
    img.src = data.gatos[posicion].image;

    document.getElementById('nombreGato').textContent = data.gatos[posicion].nombre;
    document.getElementById('clicks').textContent = data.gatos[posicion].clicks;
}

