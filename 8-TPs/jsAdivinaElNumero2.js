/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0

function comenzar()
{
	numeroSecreto=Math.floor(Math.random(10)*(11-1)+1);
	console.log(numeroSecreto);
	contadorIntentos=0;
	//Genero el número RANDOM entre 1 y 100
	 
	

}

function verificar()
{
	console.log(111)
	var numero;
	numero=document.getElementById("numero").value;
	numero=parseInt(numero)
	contadorIntentos=contadorIntentos+1
	contadorIntentos=parseInt(contadorIntentos)
	document.getElementById("intentos").value=contadorIntentos
	if(numero==numeroSecreto && contadorIntentos==1){
		alert("usted es psiquico")
	}else if(numero==numeroSecreto && contadorIntentos==2){
		alert("exelente percepción")
	}else if(numero==numeroSecreto && contadorIntentos==3){
		alert("esto es suerte")
	}else if(numero==numeroSecreto && contadorIntentos==4){
		alert("exelente tecnica")
	}else if(numero==numeroSecreto && contadorIntentos==5){
		alert("usted esta en la media")
	}else if(numero==numeroSecreto && contadorIntentos>5){
		alert("falta tecnica")
	}else if(numero==numeroSecreto && contadorIntentos>10){
		alert("usted es un afortunado en el amor")
	}	
}