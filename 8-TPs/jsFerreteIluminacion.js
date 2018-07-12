/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var lampara, valorLampara, marca, precioDescuento;
    var descuento50, descuento40, descuento30, descuento25, descuento20, descuento15, descuento10, descuento5, impuesto;
    lampara=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;
    precioDescuento=document.getElementById("precioDescuento").value;
    precioDescuento=parseInt(precioDescuento)
    valorLampara=lampara*35;
    lampara=parseInt(lampara);
    descuento50=-(50/100*valorLampara-valorLampara);
    descuento40=-(40/100*valorLampara-valorLampara);
    descuento30=-(30/100*valorLampara-valorLampara);
    descuento25=-(25/100*valorLampara-valorLampara);
    descuento20=-(20/100*valorLampara-valorLampara);
    descuento15=-(15/100*valorLampara-valorLampara);
    descuento10=-(10/100*valorLampara-valorLampara);
    descuento5=-(5/100*valorLampara-valorLampara);
    impuesto=10/100*precioDescuento+precioDescuento
    if(lampara>=6||marca){
        document.getElementById("precioDescuento").value=descuento50;
    }else{
        if(lampara==5 && marca=="ArgentinaLuz"){
            document.getElementById("precioDescuento").value=descuento40
        }else{
            if(lampara==5||marca){
                document.getElementById("precioDescuento").value=descuento30
            }else{
                if(lampara==4 && (marca=="ArgentinaLuz"||marca=="FelipeLamparas")){
                    document.getElementById("precioDescuento").value=descuento25
                }else{
                    if(lampara==4 || marca){
                        document.getElementById("precioDescuento").value=descuento20
                    }else{
                        if(lampara==3 && marca=="ArgentinaLuz"){
                        document.getElementById("precioDescuento").value=descuento15
                    }else{
                        if(lampara==3 && marca=="FelipeLamparas"){
                            document.getElementById("precioDescuento").value=descuento10
                        }else{
                            if(lampara==3 && marca){
                                document.getElementById("precioDescuento").value=descuento5
                            }
                        }
                    }
                }
            }
        }
    }
    }
    if(precioDescuento>120){
    alert("IIBB usted pago " + impuesto)
    }
}