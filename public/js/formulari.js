



function calcular() {
    var escenas = document.getElementById('escenas');
    var valor1 = parseInt(escenas.value);
    var multiplicador = escenas.options[escenas.selectedIndex].text.substring(0, 1);
    

    let montaje = document.getElementById('montaje').value;
    var valor2 = parseInt(montaje);

    let origianles = document.getElementById('originales').value;
    var valor3 = parseInt(origianles);

    let videobook = document.getElementById('videobook').value;
    var valor4 = parseInt(videobook);

    let lugar = document.getElementById('lugar').value;
    var valor5 = parseInt(lugar);

    var suma = valor1 + (multiplicador * valor2) + valor3 + valor4 + valor5;

    if (isNaN(suma)) {
        alert("Has dejado alguna pregunta por responder.");
        return;
    } else {
        //alert("Suma total " + suma);
        
        function mostrarMensaje(mensaje) {
            Swal.fire({
                title: 'Mensaje enviado!',
                text: mensaje,
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }

        
        mostrarMensaje('Suma total ' + suma +'€');
    }

    document.getElementById("suma").value = suma;
}