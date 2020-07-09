$(function() {
    // Load the Miniml theme
    Galleria.loadTheme('galleria.miniml.js');

    // Initialize Galleria
    Galleria.run('.galleria');
});



function validar(forma){
    // Imprimiendo datos de Inicio
    console.log(" ");
    console.log("Validando Formulario........................");

// Asignando Variables
 var usuario = forma.usuario;
 var apellido = forma.apellido;
 var telefono = forma.telefono;
 var correo = forma.correo;
 var contrasena = forma.contrasena;
 




// Imprime los datos Insertados
 console.log("El Usuario es  " + usuario.value+" ,el Apellido es " + apellido.value+ 
 "  ,el Teléfono es  " + telefono.value + " ,el Correo es  " + correo.value+
 " ,la Contrasena es  " + contrasena.value+ "  .\n"+ 
 "Participando Sorteo de Camiseta de América de Cali");


// Si no ingresa datos/ focus y alert
 if(usuario.value=="" || usuario.value=="Escribe Nombres")
 {
 alert("Debe Escribir un nombre");
 usuario.focus();
 usuario.select();
 }

 else if (apellido.value=="" || apellido.value=="Escribe Apellidos")
 {
    alert("Debe Escribir un Apellido");
    apellido.focus();
    apellido.select();
    }

    else if (telefono.value=="" || telefono.value=="Escribe Telefono")
    {
       alert("Debe Escribir un Teléfono");
       telefono.focus();
       telefono.select();
       }


       else if (correo.value=="" || correo.value=="Escribe Correo")
 {
    alert("Debe Escribir un Correo");
    correo.focus();
    correo.select();
    }


    else if (contrasena.value=="" || contrasena.value=="Escribe Contrasena")
 {
    alert("Debe Escribir una Contraseña");
    contrasena.focus();
    contrasena.select();
    }












// Equipos chequeados y no chequeados
var equipo = forma.equipo;
var checkseleccionado= false;


for(var i=0; i< equipo.length;i++){
    if(equipo[i].checked) {
        checkseleccionado=true;
    }
}
 
if(!checkseleccionado){
    alert("Debe Elegir un equipo");
    return false;
}
 
return false;
 }