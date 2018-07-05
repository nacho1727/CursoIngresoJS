/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var n1, n2,resultado;
    n1=document.getElementById("numeroUno").value;//2
    n2=document.getElementById("numeroDos").value;//2
    n1=parseInt(n1);
    n2=parseInt(n2);
    resultado=n1 + n2;
    alert("la suma es"+resultado);

}

