document.addEventListener('DOMContentLoaded', () => {
    const capa = document.getElementById("buttons-container");
    document.body.appendChild(capa);
    capa.style.display = 'flex';
    capa.style.justifyContent = 'center';
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const span1 = document.createElement('span');

    document.button1.id="button1";
    document.button2.id="button2";
    document.span1.id="span1";

    document.getElementById("text-container").style.color = "blue";
    document.getElementById("text-container").style.fontFamily = "Arial";
    document.getElementById("text-container").style.fontSize = "larger";

    document.getElementById("button1").innerHTML = "Contar Palabras";
    document.getElementById("button2").innerHTML = "Restablecer";

    document.getElementById("text-container").style.fontSize = "14";
    document.getElementById("text-container").style.fontStyle = "bold";
    document.getElementById("text-container").style.backgroundColor = "lime";
    
    capa.appendChild(button1);
    capa.appendChild(button2);
    capa.appendChild(span1);

    button1.addEventListener('click', () => {
        contarPalabras();
    });
    button2.addEventListener('click', () => {
        span1.innerHTML=" ";
    });

    function contarPalabras(){
        var texto = document.getElementById("text-container").value;
        texto = texto.replace (/\r?\n/g," ");
        texto = texto.replace (/[ ]+/g," ");
        texto = texto.replace (/^ /,"");
        texto = texto.replace (/ $/,"");
        var textoTroceado = texto.split (" ");
        var numeroPalabras = textoTroceado.length;
        document.getElementById("span1").innerHTML = numeroPalabras;
    }



    const capa3 = document.getElementById("result-container");
    document.body.appendChild(capa3);
    const objeto = document.getElementsByClassName("fields-container");
    const boton = document.getElementByClassName("form-actions");

    capa3.appendChild(objeto);
    capa3.appendChild(boton);

    boton.addEventListener('click', () => {
        var miJSON = JSON.stringify(objeto);
        document.getElementById("json-result").innerHTML = miJSON;
    });
})