
function mostrar()
{
    var base, altura, area, perimetro;
    base=prompt("ingrese base");
    altura=prompt("ingrese altura");
    base=parseInt(base);
    altura=parseInt(altura);
    area=base*altura/2
    perimetro=base*3
    alert("el perimetro es de " +perimetro+ " y el area de " +area)

}
