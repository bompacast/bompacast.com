function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML='';
    textoArray.forEach(function(letra,i){
        setTimeout(function(){
            elemento.innerHTML += letra;
        },90*i)
    });
}
typeWrite(document.getElementById('titulo'));