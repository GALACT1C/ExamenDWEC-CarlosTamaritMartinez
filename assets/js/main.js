document.addEventListener('DOMContentLoaded', () => {

    
    const capa = document.getElementById("buttons-container");
    document.body.appendChild(capa);
    capa.style.display = 'flex';
    capa.style.justifyContent = 'center';
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const span1 = document.createElement('span');

    document.button1.innerText("Contar Palabras");
    document.button2.innerText("Restablecer");
    
    capa.appendChild(button1);
    capa.appendChild(button2);
    capa.appendChild(span1);

    button1.addEventListener('click', () => {
        contarPalabras();
    });


    function contarPalabras(){
        var texto = document.getElementById("text-container").value;
        texto = texto.replace (/\r?\n/g," ");
        texto = texto.replace (/[ ]+/g," ");
        texto = texto.replace (/^ /,"");
        texto = texto.replace (/ $/,"");
        var textoTroceado = texto.split (" ");
        var numeroPalabras = textoTroceado.length;
        document.getElementById("span").innerHTML = numeroPalabras;
    }
})