function recuperaTexto(idCompontente){
     let componente = document.getElementById(idCompontente);
     let valor = componente.value;
     return valor;
}
function recuperarFloat(idcomponten){
     let valorTexto =  recuperaTexto(idcomponten);
     let valorfloar = parseFloat(valorTexto);
     return valorfloar;
}

function cambiarTexto(idTexto, valor){
    let spTexto = document.getElementById(idTexto);
    spTexto.textContent = valor;
}