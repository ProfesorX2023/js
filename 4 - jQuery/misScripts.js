$(document).ready(function() {
    // Espera a que el DOM esté completamente cargado antes de ejecutar el código dentro de esta función.

    $("button").click(function() {
        // Selecciona todos los elementos <button> y establece una función que se ejecutará cuando se haga clic en cualquiera de ellos.

        let valorInput = $("input").val();
        // Obtiene el valor del elemento de entrada de texto y lo almacena en la variable 'valorInput'.

        alert("El input dice " + valorInput);
        // Muestra una ventana emergente (alert) con un mensaje que incluye el valor del input.
    })
})