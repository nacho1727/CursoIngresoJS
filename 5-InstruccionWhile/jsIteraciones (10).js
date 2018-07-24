function mostrar()
{

	var contador=0;
	var contador0
	var negativo, contadorN
	var positivo,contadorP
	var pares
	var prompos, promneg
	var diferencia
	var num
	var mensaje
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		num=prompt("ingrese numero")
		num=parseInt(num);
		while(isNaN(num)){
			num=prompt("ingrese numero")
			num=parseInt(num);
		}
		if(num<0){
			negativo+=num//1
			contadorN++;//4
		}else if(num>0){
			positivo+=num//
			contadorP++;
		}else 
			contador0++
		if(num%2==0){
			pares++;
		}
		prompos=negativo/contadorP
		promneg=positivo/contadorN
		diferencia=contadorP-contadorN
		if(diferencia>0){
			mensaje="hay mas nº positivos" + diferencia
		}else if(diferencia==0){
			mensaje="misma cantidad"

		}else
		mensaje="hay mas nº negativos" + (diferencia*-1)
		document.write(prompos) + "<br>" + document.write(promneg) + "<br>" 

		

	}
		
	




}//FIN DE LA FUNCIÓN