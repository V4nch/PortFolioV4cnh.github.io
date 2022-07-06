//inicio JavaScript punto 1.
var nombre;
var apellido;
var email;
var asunto;
var mensaje;

function generarFormulario() {
    let formulario = document.createElement("form");
    let titulo = document.createElement("label");
    let cajaTextNombres = document.createElement("input");
    let cajaTextApellidos = document.createElement("input");
    let cajaTextEmail = document.createElement("input");
    let cajaTextAsunto = document.createElement("input");
    let cajaTextMensaje = document.createElement("textarea");
    let boton = document.createElement("input");
    let reset = document.createElement("Input");


    formulario.setAttribute('method', "post");
    formulario.setAttribute('action', "");
    formulario.setAttribute('style', "width:300px;margin: 0px auto");


    cajaTextNombres.setAttribute('type', "text");
    cajaTextNombres.setAttribute('placeholder', "Nombres");
    cajaTextNombres.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");
    cajaTextNombres.setAttribute('id', "nombre");


    cajaTextApellidos.setAttribute('type', "text");
    cajaTextApellidos.setAttribute('placeholder', "Apellidos");
    cajaTextApellidos.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");
    cajaTextApellidos.setAttribute('id',"apellido");

    cajaTextEmail.setAttribute('type', "text");
    cajaTextEmail.setAttribute('placeholder', "Email");
    cajaTextEmail.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");
    cajaTextEmail.setAttribute('id',"email");


    cajaTextAsunto.setAttribute('type', "text");
    cajaTextAsunto.setAttribute('placeholder', "Asunto");
    cajaTextAsunto.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");
    cajaTextAsunto.setAttribute('id',"asunto");


    cajaTextMensaje.setAttribute('placeholder', "Mensaje");
    cajaTextMensaje.setAttribute('style', "width:100%;height:200px;margin: 10px 0px;padding: 5px");
    cajaTextMensaje.setAttribute('id', "mensaje");

    boton.setAttribute('type', "button");
    boton.setAttribute('value', "Enviar");
    boton.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");
    boton.setAttribute('onclick','imprimir()');
    boton.setAttribute('onload', "alert('Se envio el mensaje')");

    reset.setAttribute('type', "reset");
    reset.setAttribute('value', "reset");
    reset.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");
    reset.setAttribute('onclick', "reset");


    titulo.innerHTML = '<h1>Contacto</h1>';
    formulario.appendChild(titulo);
    formulario.appendChild(cajaTextNombres);
    formulario.appendChild(cajaTextApellidos);
    formulario.appendChild(cajaTextEmail);
    formulario.appendChild(cajaTextAsunto);
    formulario.appendChild(cajaTextMensaje);
    formulario.appendChild(boton);
    formulario.appendChild(reset);

    document.getElementById('contenidoFormulario').appendChild(formulario);
    
}
function imprimir(){
    
    var nombre = document.querySelector("#nombre");
    var apellido = document.querySelector("#apellido");
    var email = document.querySelector("#email");
    var asunto = document.querySelector("#asunto");
    var mensaje = document.querySelector("#mensaje");

    console.log("algo");
    if (nombre.value.length==0 || apellido.value.length==0 || email.value.length==0 || asunto.value.length==0 || mensaje.value.length==0) {
        alert("Se solicitar llenar todos los campos");
    }else{
        console.log(nombre.value);
        console.log(apellido.value);
        console.log(email.value);
        console.log(asunto.value);
        console.log(mensaje.value);
        

    }
    
}


//Fin java scripto punto 1


// Aquí inicia el java Script del punto 2
const ejecutar = () => {
    let element = document.querySelector('#temasFrutas');
    let cuerpo = document.getElementById('Lista')
    switch (Number(element.value)) {
        case 1:
            loadFilterQuitar();


            break
        case 2:
            loadFilter();
            break
        case 3:
            loadFilterImpar();

            break
        default:
            console.log(element.value);

    }
}
function loadFilter() {
    var element = document.getElementById('Lista');
    let par = document.querySelector('#frutas');
    var children = element.children;
    var filtered = [];
    par.classList.remove("frutas");

    for (var i = 0; i < children.length; i++) {
        filtered.push(children[i].textContent);
        if (i%2!=0) {
            children[i].classList.remove("frutas");
            children[i].classList.add("sogeking");
            children[i].classList.remove("noShimate");
        }
        if (i%2==0) {
            children[i].classList.remove("frutas");
            children[i].classList.remove("sogeking");
        }
    }
  console.log(filtered);
}
function loadFilterImpar() {
    var element = document.getElementById('Lista');
    let par = document.querySelector('#frutas');
    var children = element.children;
    var filtered = [];
    par.classList.remove("frutas");

    for (var i = 0; i < children.length; i++) {
        filtered.push(children[i].textContent);
        if (i%2==0) {
            children[i].classList.remove("frutas");
            children[i].classList.add("sogeking");

        }
        if (i%2!=0) {
            children[i].classList.remove("frutas");
            children[i].classList.remove("sogeking");
        }
    }
  console.log(filtered);
}
function loadFilterQuitar() {
    var element = document.getElementById('Lista');
    let par = document.querySelector('#frutas');
    var children = element.children;
    var filtered = [];
    par.classList.remove("frutas");

    for (var i = 0; i < children.length; i++) {
        filtered.push(children[i].textContent);
            children[i].classList.remove("sogeking");
    }

  console.log(filtered);
}
//Hasta aquí vine el javaScript del punto 2.