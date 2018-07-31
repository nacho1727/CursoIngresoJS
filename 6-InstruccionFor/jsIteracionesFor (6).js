function mostrar()
{
    var num, contadorpares=0;
    num=prompt("ingrese numero");
    num=parseInt(num);
    for(j=1; j<=num; j++ ){
        if(j/2==0){
            console.log(j);
            contadorpares++;
        }
    }




}//FIN DE LA FUNCIÓN