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
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componeteVentas = document.getElementById("txtVentas");
    let componetePrecio = document.getElementById("txtPrecio");

    //recuperamos el valor de las cajas de texto 
    let sueldoBaseStr = componenteSueldoBase.value;
    let VentasStr = componeteVentas.value;
    let PrecioStr = componetePrecio.value;

     // convertimos el texto a numero 
    let sueldoBase = parseFloat(sueldoBaseStr);
    let ventas = parseFloat(VentasStr);
    let precio = parseFloat(PrecioStr);

    let comision = calcularComision(ventas, precio);
    let total = sueldoBase + comision;
    
    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");
    
    spSueldoBase.textContent= sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}





