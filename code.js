function enviar()
{
    var nombre = document.getElementById("txt-nombre").value;
    var apellido = document.getElementById("txt-apellido").value;
    
    if(nombre && apellido && verificarCorreo())
    {
        alert("¡Muchas gracias " + nombre + " " + apellido + " su mensaje se ha enviado correctamente");
    }
    else
    {   
        alert("Por favor, complete correctamente los campos solicitados")
    }
}

function verificarCorreo()
{
    var correo = document.getElementById("correo").value;

    if(!correo.includes("@"))
    {
        return false;
    }

    return true;
}