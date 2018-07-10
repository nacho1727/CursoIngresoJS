function mostrar()
{ 
    var precio, descuento, precioDescuento, iva;
    precio=prompt("ingrese el precio del producto");
    descuento=prompt("ingrese el descuento");
    precioDescuento=precio-descuento/100*precio;
    iva=21/100*precioDescuento+precioDescuento;
    alert("el descuento es de %"+descuento+ " su descuento con el precio es de $" +precioDescuento+ " su IVA es del %21");
    document.getElementById("elPrecioFinal").value=iva;



}
