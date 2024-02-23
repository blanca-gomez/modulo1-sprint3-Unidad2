 // Aquí tu código
 //Obtengo los elementos HTML. Al ser ID empleo el metodo getElementById
const pulse = document.getElementById('agregar');
const lista = document.getElementById('lista');

//Realizo un evento de click al pusar el botón con el Id 'agregar'. Lo he guardado en la variable pulse
pulse.addEventListener('click', function() {
    //al pulsar aparece un prompt, y lo que el usuario introduzca se guardará en la variable agregarElemento
    const agregarElemento = prompt('Introduce un elemento');
    //Creamos un nuevo elemento con la propiedad createElement, con cada elemento que el usuario introduzca por consola
    //y se almacena en la variable nuevoElemento
    const nuevoElemento = document.createElement(agregarElemento);
    //agregamos el nuevo elemento a la variable lista con el método appendChild
    lista.appendChild(nuevoElemento);
    console.log(lista);
});
