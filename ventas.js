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





