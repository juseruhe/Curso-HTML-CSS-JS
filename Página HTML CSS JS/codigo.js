$(function() {
    // Load the Miniml theme
    Galleria.loadTheme('galleria.miniml.js');

    // Initialize Galleria
    Galleria.run('.galleria');
});



function validar(forma){
    console.log(" ");
    console.log("Validando Formulario........................");
 var usuario = forma.usuario;
 var apellido = forma.apellido;
 var telefono = forma.telefono;
 var correo = forma.correo;
 var contrasena = forma.contrasena;
 





 console.log("El Usuario es  " + usuario.value+" ,el Apellido es " + apellido.value+ 
 "  ,el Teléfono es  " + telefono.value + " ,el Correo es  " + correo.value+
 " ,la Contrasena es  " + contrasena.value+ "  .\n"+ 
 "Participando Sorteo de Camiseta de América de Cali");



 if(usuario.value=="" || usuario.value=="Escribe Nombres"
 ){
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

    else if (telefono.value=="" || telefono.value=="Escribe Apellidos")
    {
       alert("Debe Escribir un Teléfono");
       telefono.focus();
       telefono.select();
       }


       else if (correo.value=="" || correo.value=="Escribe Apellidos")
 {
    alert("Debe Escribir un Correo");
    correo.focus();
    correo.select();
    }


    else if (contrasena.value=="" || contrasena.value=="Escribe Apellidos")
 {
    alert("Debe Escribir una Contraseña");
    contrasena.focus();
    contrasena.select();
    }













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