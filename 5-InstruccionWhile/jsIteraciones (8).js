function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';
	while(respuesta=="si"){
		numero=prompt("ingrese numero");
		numero=parseInt(numero)
		if(numero>0){
			positivo=positivo+numero
		}else if(numero<0){
			negativo=negativo*numero
		}
		respuesta=prompt("ingrese si para continuar para hacer calculos solo aceptar")
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN