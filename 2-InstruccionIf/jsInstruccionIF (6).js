function mostrar()
{
    var edad;
    edad=document.getElementById("edad").value;
//tomo la edad  
if(edad>=18){
    alert("usted es mayor de edad")
}else{
    if(edad<13){
        alert("es un niño")
    }else{
        alert("es un adolescente")
    }
}




}//FIN DE LA FUNCIÓN