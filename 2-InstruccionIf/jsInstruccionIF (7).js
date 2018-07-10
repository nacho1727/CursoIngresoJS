function mostrar()
{
    var estadoCivil, edad;
    estadoCivil=document.getElementById("estadoCivil").value;
    edad=document.getElementById("edad").value;

//tomo la edad  
if(edad<18 && estadoCivil != "Soltero"){
    alert("es muy pequeño para No ser soltero")
}

	


}//FIN DE LA FUNCIÓN