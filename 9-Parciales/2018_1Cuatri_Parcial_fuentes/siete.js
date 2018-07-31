function mostrar()
{
    var sexo, edad, max=100, min=0,
    var mayoredad=0; menoredad=0; sexomasc=0;sexofem=0; mascmayor=0; contador=0; 
    var respuesta="si"
    
    while(respuesta!="no"){

    edad=prompt("ingrese una edad entre 0 y 100");
    
    while(isNaN(edad) || edad<0 || edad>100){
            edad=prompt("ingrese una edad valida");
            edad=parseInt(edad);
            }
   sexo=prompt("ingrese el sexo");
    while(sexo!="m" && sexo!="f"){
        sexo=prompt("ingrese un sexo valido como F o M");
    }
    contador++
    respuesta=prompt("desea seguir ingresando datos???")
    

    if(edad>18){
        mayoredad++;
    }else{
        menoredad++;
    }
    if(sexo=="m" && edad>18 ){
        sexomasc++;
        mascmayor++;
    }else{
        sexofem++;
    }
    }
    document.write(
        "cantidad de mujeres="+ sexofem + "<br>" +
        "cantidad de hombres="+ sexomasc + "<br>"+
        "cantidad de mayores de edad="+ mayoredad +"<br>"+
        "cantidad de menor de edad=" + menoredad+ "<br>"+
        "cantidada de hombres mayores de edad"+ mascmayor

    );

    

    
            
    

}
