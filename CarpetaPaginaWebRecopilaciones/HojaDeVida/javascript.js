
// function cambioEstilo(x) {
//     var body = document.getElementById("body");
//        body.style.backgroundColor = x.value;
//        console.log(x);


//     }


const ejecutar = () => {
    let element = document.querySelector('#TemasCV');
    let cuerpo = document.querySelector('#body')
    let foto = document.querySelector('#FotoHojaDeVida');
    switch (Number(element.value)){
        case 1:
            cuerpo.classList.remove("estilo1");
            cuerpo.classList.remove("estilo2");
            cuerpo.classList.remove("estilo3");
            cuerpo.classList.add("body");
            foto.classList.remove("estiloFoto1");
            foto.classList.remove("estiloFoto2");
            foto.classList.remove("estiloFoto2");
            foto.classList.add("FotoHojaDeVida");
            console.log(foto);
            console.log(element.value);
            break
        case 2:
            cuerpo.classList.remove("body");
            cuerpo.classList.remove("estilo2");
            cuerpo.classList.remove("estilo3");
            cuerpo.classList.add("estilo1");
            foto.classList.remove("FotoHojaDeVida");
            foto.classList.remove("estiloFoto2");
            foto.classList.remove("estiloFoto3");
            foto.classList.add("estiloFoto1");
            console.log(cuerpo);
            break
        case 3:
            cuerpo.classList.remove("estilo1");
            cuerpo.classList.remove("body");
            cuerpo.classList.remove("estilo3");
            cuerpo.classList.add("estilo2");
            foto.classList.remove("estiloFoto3");
            foto.classList.remove("FotoHojaDeVida");
            foto.classList.remove("estiloFoto1");
            foto.classList.add("estiloFoto2");
            console.log(cuerpo);
            break
            case 4:
                cuerpo.classList.remove("estilo2");
                cuerpo.classList.remove("estilo1");
                cuerpo.classList.remove("body");
                cuerpo.classList.add("estilo3");
                foto.classList.remove("estiloFoto2");
                foto.classList.remove("FotoHojaDeVida");
                foto.classList.remove("estiloFoto1");
                foto.classList.add("estiloFoto3");
                console.log(cuerpo);
                break
        default:
            console.log(element.value);

    }
}