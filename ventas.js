// CONSTANTE
const VENTAS_BASE = 10;

// FUNCIÓN QUE CALCULA LA COMISIÓN
function calcularComision(numeroVentas, precioProducto) {

    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }

    return comision;
}


// FUNCIÓN PRINCIPAL
function calcular() {

    // ====== CAPTURAR COMPONENTES ======

    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");


    // ====== FORMA 1 (PASO A PASO) ======
    // aquí explicas esto en clase

    let sueldoBaseStr = componenteSueldoBase.value;
    let ventasStr = componenteVentas.value;
    let precioStr = componentePrecio.value;

    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseInt(ventasStr);
    let precioProducto = parseFloat(precioStr);


    /*
    🔥 EXPLICACIÓN IMPORTANTE PARA DIAPOS:
    
    componenteSueldoBase.value devuelve un TEXTO (string)
    
    Ejemplo:
    "500"
    
    Pero nosotros necesitamos un número para hacer cálculos
    
    Por eso usamos:
    parseFloat()
    
    Entonces:
    let sueldoBase = parseFloat(sueldoBaseStr);
    
    🔥 FORMA OPTIMIZADA (la explicas después):
    
    En lugar de hacer esto en dos pasos:
    let sueldoBaseStr = componenteSueldoBase.value;
    let sueldoBase = parseFloat(sueldoBaseStr);
    
    Podemos hacer directo:
    
    let sueldoBase = parseFloat(componenteSueldoBase.value);
    
    👉 Más corto, mismo resultado
    */


    // ====== CALCULAR COMISIÓN ======

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;


    // ====== MOSTRAR RESULTADOS ======

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}