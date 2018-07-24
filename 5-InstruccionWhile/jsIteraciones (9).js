function mostrar()
{

	var contador=0;
	var numero
	var max;
	var min;
	var bandera=true
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt("ingrese su numero");
		nuemro=parseInt(numero)
		if(bandera){
			bandera=false;
			max=numero
			min=numero
		}
		if(nuemro>max)
			max=numero
		if(numero<min)
			min=numero
		respuesta=prompt("Escriba NO para no segui de lo contrario solo presione ACEPTAR")

}

	document.getElementById("maximo").value=max
	document.getElementById("minimo").value=min;




}//FIN DE LA FUNCIÓN