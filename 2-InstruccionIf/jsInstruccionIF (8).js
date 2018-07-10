function mostrar()
{
    var edad, estadoCivil;
    edad=document.getElementById("edad").value;
    estadoCivil=document.getElementById("estadoCivil").value;
//tomo la edad  
if(edad>17 && estadoCivil=="Soltero"){
    alert("es soltero y NO es menor")
}

}//FIN DE LA FUNCIÓN