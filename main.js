//obtener id retornando el objeto mediante una funcion flecha o arrow function
let id = name => document.getElementById(name);

//Evento click en el contenedor para hacer elcambio de clases / estilos
id('container').addEventListener('click', () => {
    if (id('container').getAttribute('class') == 'container') {
        id('container').setAttribute('class', 'container1')
        id('figura').setAttribute('class', 'luna')
        id('cielo').setAttribute('class', 'figuras-de-luna')
    } else {
        id('container').setAttribute('class', 'container')
        id('figura').setAttribute('class', 'sol')
        id('cielo').setAttribute('class', 'nube')
    }
})