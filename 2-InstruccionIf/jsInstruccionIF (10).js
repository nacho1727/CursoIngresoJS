function mostrar()
{
	var nota;
	nota=parseInt(Math.random (10)*(11-1))+1;
	if(nota>=9){
		alert(" Exelente " +nota)
	} else{
		if(nota<4){
			alert("Vamos, la proxima se puede " +nota)
		}else{
			alert("Aprobó " +nota)
		}
	}
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN