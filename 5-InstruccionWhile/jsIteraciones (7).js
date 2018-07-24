function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num;
	while(respuesta=="si"){
		contador++;
		num=prompt("ingrese numero y escriba si para finalizar")
		num=parseInt(num)
		acumulador=acumulador+num
		respuesta=prompt("ingrese si para continuar o no ingrese nada para calcular")
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN