// Definición de la función obtenerInformacion
function obtenerInformacion() {
    // Utilizando la biblioteca Axios para hacer una solicitud GET a la URL proporcionada
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(respuesta) {
        // Obteniendo la referencia al elemento con id 'listaInformacion' en el DOM
        let listaInformacion = document.getElementById('listaInformacion');

        // Iterando a través de los elementos en la respuesta del servidor
        for(let i=0; i < respuesta.data.length; i++) {
            // Creando un nuevo elemento de lista ('li') para cada elemento en la respuesta
            let itemLista = document.createElement('li');
            
            // Estableciendo el texto del elemento de lista con el título del elemento en la respuesta
            itemLista.innerText = respuesta.data[i].title;
            
            // Agregando el elemento de lista al elemento con id 'listaInformacion' en el DOM
            listaInformacion.appendChild(itemLista);
        }
    })
    .catch(function(error) {
        // Manejando errores: Imprimiendo el error en la consola si la solicitud falla
        console.log(error);
    })
}
