$(document).ready(function() {
    var listadoPersonajes= "No tengo el dato"
    $.ajax({
        
        url: "https://pokeapi.co/api/v2/pokemon", //url a la que hacemos peticion(O invocamos) y methon segun sea por ejemplo GET para obetener
        method:"GET",
    }).done(function (data) {
        
        /*JSON.parse() toma como entrada el texto en JSON que me llega  del servidor 
        y lo convierte a un objeto*/
        
        var json = JSON.parse(data);
        $("#data-content").html(listadoPersonajes);
        
        /*Lo que se programa dentro de esta función 
        será ejecutado cuando se haya resuelto la petición asíncrona,
        es decir, cuando llegue la respuesta al servidor. */
    });

   
});