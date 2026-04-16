const VENTAS_BASE = 5;


function calcularComision(numeroventas, precioProducto){
  let camision=0;
  if (numeroventas > VENTAS_BASE){
    let ventasExtra = numeroventas -VENTAS_BASE;
    camision = ventasExtra * (precioProducto * 0.10);
  }
  return camision;
}

function calcular(){
    //recuperamos propiedades de las cajas de texto
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let ventas = recuperarFloat("txtVentas");
    let precio = recuperarFloat("txtPrecio"); 


    let comision = calcularComision(ventas, precio);
    let total = sueldoBase + comision;
    

    cambiarTexto("spSueldoBase",sueldoBase);
    cambiarTexto("spComision",comision);
    cambiarTexto("spTotal",total);
 
}

function validarNumero(input, idError) {
    let valor = input.value.trim();
    let mensaje = "";
    let regex = /^[0-9]+$/;

    if (valor === "") {
        mensaje = "Este campo no puede estar vacío";
    } else if (!regex.test(valor)) {
        mensaje = "Solo se permiten números";
    } else if (valor.length > 5) {
        mensaje = "Máximo 5 dígitos permitidos";
    }

    let errorElemento = document.getElementById(idError);

    if (mensaje !== "") {
        errorElemento.textContent = mensaje;

        // efecto de vibración
        input.classList.add("input-error");
        setTimeout(() => {
            input.classList.remove("input-error");
        }, 300);

    } else {
        errorElemento.textContent = "";
    }
}





