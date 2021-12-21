var decimal=document.getElementById("decimal");
var binario=document.getElementById("binario");
var bin1=document.getElementById("bin1");
var bin2=document.getElementById("bin2");
var bin3=document.getElementById("bin3");
var formError=document.getElementById("formError");
var operaciones=document.getElementById("operaciones");
var texto_libre=document.getElementById("texto_libre");
var binario_resultado=document.getElementById("binario_resultado");

function validarBinarios(e)
{
  var code=e.which;
  if(code==48||code==49)
  {
    return true;
  }
  else
  {
    return false;
  }
}
//bin3.addEventListener("cut",validarResultadoBinario);
//bin3.addEventListener("paste",validarResultadoBinario);
bin3.addEventListener("contextmenu",validarResultadoBinario);
function validarResultadoBinario(e)
{
  e.preventDefault();
  return false;
}

binario_resultado.addEventListener("contextmenu",validarResultadoBinario2);
function validarResultadoBinario2(e)
{
  e.preventDefault();
  return false;
}

function validarBinarios2(e)
{
  var code=e.which;
  if(code==48||code==49)
  {
    return true;
  }
  else {
    return false;
  }
}

function validarDecimal(e)
{
  var code=e.which;
  if(code>=48 && code<=57)
  {
    return true;
  }
  else
  {
    return false;
  }
}

decimal.addEventListener("keyup",convertirAbinario);
function convertirAbinario()
{
  var ancho=decimal.value.length;
  var ancho1=ancho;
  var error=0;
  while(ancho1>0)
  {
    ancho1-=1;
    var data=decimal.value.substring(ancho1,ancho1+1);

    if(isNaN(data)||data==" ")
    {
      error=1;
      break;
    }
  }
  if(error==1)
  {
    decimal.style.backgroundColor="#990000";
    decimal.style.color = "#FFFFFF";
    binario.value="";
  }
  else
  {
    decimal.style.backgroundColor="#ffffff";
    decimal.style.color = "#000000";

    if(ancho>=1)
    {
      var valorDecimal=decimal.value;
      if(valorDecimal<1)
      {
      }
      else
      {
        var valorD=valorDecimal;
        var num;
        var valorB=[];
        while(valorD>=1)
        {
          if(valorD%2==0)
          {
            num=0;
          }
          else
          {
            num=1;
          }
          valorD=parseInt(valorD/2);
          valorB.push(num);
        }
        var largo=valorB.length;
        var codigoBinario;
        while(largo>=1)
        {
          largo-=1;
          if(codigoBinario!=undefined)
          {
            codigoBinario=codigoBinario+""+valorB[largo];
          }
          else
          {
            codigoBinario=valorB[largo];
          }
        }
        binario.value=codigoBinario;
      }
    }
    else
    {
      binario.value="";
    }
  }

}
binario.addEventListener("keyup",convertirAdecimal);

function convertirAdecimal()
{
  var valorBin=binario.value;
  var divValores;
  var largo=valorBin.length;
  var iterador=0;
  var nDecimal=0;
  // valida el pegado de valores distintos a 0 y 1
  var ancho1=largo;
  var error=0;
  while(ancho1>0)
  {
    ancho1-=1;
    var data=binario.value.substring(ancho1,ancho1+1);

    if((data!=1 && data!=0) ||data==" ")
    {
      error=1;
      break;
    }
  }
  if(error==1)
  {
    binario.style.backgroundColor="#990000";
    binario.style.color = "#FFFFFF";
    decimal.value="";
  }
  else
  {
    binario.style.backgroundColor="#ffffff";
    binario.style.color = "#000000";
    if(valorBin<1)
    {
      decimal.value="";
    }
    else
    {
      while(largo>0)
      {
        largo-=1;
        divValores=valorBin.substring(largo,largo+1);
        if(divValores==1)
        {
          nDecimal+=2**iterador;
        }
        iterador+=1;
      }
      decimal.value=nDecimal;
    }
  }
}

bin1.addEventListener("keyup",operacionesBinario);
bin2.addEventListener("keyup",operacionesBinario);
operaciones.addEventListener("change",operacionesBinario);
function operacionesBinario()
{
 var binarioUno=bin1.value;
 var binarioDos=bin2.value;
 var anchoBin1=binarioUno.length;
 var anchoBin2=binarioDos.length;
 var recorridoBit1;
 var recorridoBit2;
 var resultado1;
 var resultado2;
 var acarreo=0;
 var resultadoOperacion;
 var tipoDeOperacion=operaciones[operaciones.selectedIndex].text;

 // valida el pegado de valores distintos a 0 y 1
 var ancho1=anchoBin1;
 var ancho2=anchoBin2;
 var error=0;
 var error2=0;
 while(ancho1>0)
 {
   ancho1-=1;
   var data=binarioUno.substring(ancho1,ancho1+1);

   if((data!=1 && data!=0)||data==" ")
   {
     error=1;
     break;
   }
 }
 while(ancho2>0)
 {
   ancho2-=1;
   var data=binarioDos.substring(ancho2,ancho2+1);

   if((data!=1 && data!=0)||data==" ")
   {
     error2=1;
     break;
   }
 }
 if(error==1||error2==1)
 {
   if(error==1)
   {
     bin1.style.backgroundColor="#990000";
     bin1.style.color = "#FFFFFF";
   }
   if(error2==1)
   {
     bin2.style.backgroundColor="#990000";
     bin2.style.color = "#FFFFFF";
   }
    bin3.value="";
 }
 else
 {
   if(error!=1)
   {
     bin1.style.backgroundColor="#ffffff";
     bin1.style.color = "#000000";
   }
   if(error2!=1)
   {
     bin2.style.backgroundColor="#ffffff";
     bin2.style.color = "#000000";
   }
   if(binarioUno==""||binarioDos=="")
   {
     bin3.value="";
     bin3.style.backgroundColor="#990000";
     bin3.style.color = "#ffffff";
   }
   if(binarioUno<1||binarioDos<1)
   {
     bin3.value="";
   }
   if(binarioUno<1&&binarioDos<1)
   {
     //bin3.value="";
   }
   else if(binarioUno>=1&&binarioDos>=1)
   {
     bin3.style.backgroundColor="#ffffff";
     bin3.style.color = "#000000";
     if(tipoDeOperacion=="")
     {
     }
     else
     {
       if(tipoDeOperacion=="Suma(+)")
       {
         if(anchoBin1>=anchoBin2)
         {
           var diferencia=anchoBin1-anchoBin2;
           while(diferencia>0)
           {
              diferencia-=1;
              binarioDos=0+""+binarioDos;
           }
         }
         else
         {
           var diferencia=anchoBin2-anchoBin1;
           while(diferencia>0)
           {
              diferencia-=1;
              binarioUno=0+""+binarioUno;
           }
         }
         anchoBin1=binarioUno.length;

         while(anchoBin1>0)
         {
           anchoBin1-=1;
           recorridoBit1=parseInt(binarioUno.substring(anchoBin1,anchoBin1+1));
           recorridoBit2=parseInt(binarioDos.substring(anchoBin1,anchoBin1+1));

          if(acarreo==1&&recorridoBit1==1)
           {
             resultado1=0;
             acarreo=1;
           }
           else
           {
              resultado1=acarreo+recorridoBit1;
              acarreo=0;
           }
           if(resultado1==1&&recorridoBit2==1)
           {
             resultado2=0;
             acarreo=1;
           }
           else
           {
              resultado2=resultado1+recorridoBit2;
           }
           if(resultadoOperacion===undefined)
           {
             resultadoOperacion=resultado2;
           }
           else
           {
            resultadoOperacion=resultado2+""+resultadoOperacion;
           }

         }
         if(acarreo==1)
         {
           resultadoOperacion=1+""+resultadoOperacion;
         }
         bin3.value=resultadoOperacion;
       }
       if(tipoDeOperacion=="Resta(-)")
       {
         var newValorBin2;
         var newAnchoBin1;
         var newAnchoBin2;
         var iterador;
         var dif;
         var itera2;
         var complementoaDos;
         var signo;
         if(anchoBin1>=anchoBin2)
         {
           dif=anchoBin1-anchoBin2;
           while(dif>0)
           {
              dif-=1;
              binarioDos=0+""+binarioDos;
           }
         }
         else
         {
           dif=anchoBin2-anchoBin1;
           while(dif>0)
           {
              dif-=1;
              binarioUno=0+""+binarioUno;
           }
         }
         //pasar a complemento de 2
         if(binarioUno>=binarioDos)
         {
           newAnchoBin=binarioDos.length;
           numBinario=binarioDos;
           segundoNumBinario=binarioUno;
           signo=1;
         }
         else
         {
           newAnchoBin=binarioUno.length;
           numBinario=binarioUno;
           segundoNumBinario=binarioDos;
           signo=0;
         }
         iterador=numBinario.lastIndexOf(1);
         if(iterador==0)
         {
           complementoaDos=numBinario.substring(iterador,newAnchoBin);
         }
         while(iterador>0)
         {
           iterador-=1;
           itera2=numBinario.substring(iterador,iterador+1);
           if(itera2==1)
           {
             itera2=0;
           }
           else
           {
            itera2=1;
           }
           if(complementoaDos==undefined)
           {
             complementoaDos=itera2+""+numBinario.substring(iterador+1,newAnchoBin);
           }
           else
           {
             complementoaDos=itera2+""+complementoaDos;
             console.log(complementoaDos);
           }
         }
         //sumar
         while(newAnchoBin>0)
         {
           newAnchoBin-=1;
           recorridoBit1=parseInt(segundoNumBinario.substring(newAnchoBin,newAnchoBin+1));
           recorridoBit2=parseInt(complementoaDos.substring(newAnchoBin,newAnchoBin+1));

          if(acarreo==1&&recorridoBit1==1)
           {
             resultado1=0;
             acarreo=1;
           }
           else
           {
              resultado1=acarreo+recorridoBit1;
              acarreo=0;
           }
           if(resultado1==1&&recorridoBit2==1)
           {
             resultado2=0;
             acarreo=1;
           }
           else
           {
              resultado2=resultado1+recorridoBit2;
           }
           if(resultadoOperacion===undefined)
           {
             resultadoOperacion=resultado2;
           }
           else
           {
            resultadoOperacion=resultado2+""+resultadoOperacion;
           }
         }
         //fin Suma
         if(signo==0)
         {
           resultadoOperacion="-"+""+resultadoOperacion;
         }
         bin3.value=resultadoOperacion;
       }
        if(tipoDeOperacion=="Multiplicación(*)")
        {
          var valorSuperior;
          var valorInferior;
          var extrae1;
          var extrae2;
          var resultados=[];
          var iteracion1;
          var iteracion2;
          var ciclo;
          var ciclo2;
          if(anchoBin1>=anchoBin2)
          {
            valorSuperior=binarioUno;
            valorInferior=binarioDos;
            iteracion1=anchoBin2;
            iteracion2=anchoBin1;
          }
          else
          {
            valorSuperior=binarioDos;
            valorInferior=binarioUno;
            iteracion1=anchoBin1;
            iteracion2=anchoBin2;
          }
          ciclo=iteracion1;
          while(ciclo>0)
          {
            if(ciclo<iteracion1)
            {
                for(var i=0;i<(iteracion1-ciclo);i++)
                {
                  resultados.unshift(0);
                }
            }
            ciclo-=1;
            extrae1=parseInt(valorInferior.substring(ciclo,ciclo+1));
            ciclo2=iteracion2;
            while(ciclo2>0)
            {
              ciclo2-=1;
              extrae2=parseInt(valorSuperior.substring(ciclo2,ciclo2+1));
              resultados.unshift(extrae2*extrae1);
            }
            // bucles
            if(ciclo+1==iteracion1)
            {
              if(ciclo<1)
              {
                console.log("si");
              }
              else
              {
                console.log("no");
                for(var i=0;i<ciclo;i++)
                {

                  resultados.unshift(0);
                }
              }
            }
            else
            {
              if(ciclo<1)
              {
              }
              else
              {
                for(var i=0;i<ciclo;i++)
                {
                  resultados.unshift(0);
                }
              }
            }
            //fin bucles
          }
          //sumar
          if(iteracion1==1)
          {
            var bucleInicial=resultados.length;
            var result1;
            while(bucleInicial>0)
            {
              bucleInicial-=1;
              if(result1==undefined)
              {
                result1=resultados[bucleInicial];
              }
              else
              {
                result1=resultados[bucleInicial]+""+result1;
              }
            }
            bin3.value=result1;
          }
          else
          {
            var anchura=resultados.length;
          //  var anchura2=((resultados.length)/iteracion1)-2;
            var nuevaAnchura=(resultados.length)/iteracion1;
            var nuevaAnchura2=nuevaAnchura*(iteracion1-1);
            while(anchura>(nuevaAnchura*(iteracion1-1)))
            {
              anchura-=1;
              nuevaAnchura2-=1;
              recorridoBit1=parseInt(resultados[anchura]);
              recorridoBit2=parseInt(resultados[nuevaAnchura2]);

             if(acarreo==1&&recorridoBit1==1)
              {
                resultado1=0;
                acarreo=1;
              }
              else
              {
                 resultado1=acarreo+recorridoBit1;
                 acarreo=0;
              }
              if(resultado1==1&&recorridoBit2==1)
              {
                resultado2=0;
                acarreo=1;
              }
              else
              {
                 resultado2=resultado1+recorridoBit2;
              }
              if(resultadoOperacion===undefined)
              {
                resultadoOperacion=resultado2;
              }
              else
              {
               resultadoOperacion=resultado2+""+resultadoOperacion;
              }
            }
            if(acarreo==1)
            {
              resultadoOperacion=1+""+resultadoOperacion;
            }
            var anchura2=iteracion1-2;
            while(anchura2>0)
            {
              console.log(anchura2);
              var anchuraResult=resultadoOperacion.length;
                console.log(resultadoOperacion);
              console.log(nuevaAnchura);
              console.log(resultados.length);
              var nuevaAnchura3=nuevaAnchura*(anchura2);
              var nuevaAnchura4=nuevaAnchura*(anchura2-1);
              var recorreCiclo=nuevaAnchura3;
              var res2;
              var dif;
              var resultadoOperacion2;
              acarreo=0;
              while(recorreCiclo>nuevaAnchura4)
              {
                recorreCiclo-=1;
                if(res2==undefined)
                {
                  res2=resultados[recorreCiclo];
                  console.log(resultados[0]);
                }
                else
                {
                    res2=resultados[recorreCiclo]+""+res2;
                }
                console.log(res2);

              }
              if(anchuraResult>nuevaAnchura)
              {
                dif=anchuraResult-nuevaAnchura;
                while(dif>0)
                {
                  dif-=1;
                  res2=0+""+res2;
                }
              }
              console.log(res2);

              while(anchuraResult>0)
              {
                anchuraResult-=1;
                recorridoBit1=parseInt(resultadoOperacion.substring(anchuraResult,anchuraResult+1));
                recorridoBit2=parseInt(res2.substring(anchuraResult,anchuraResult+1));
                if(acarreo==1&&recorridoBit1==1)
                 {
                   resultado1=0;
                   acarreo=1;
                 }
                 else
                 {
                    resultado1=acarreo+recorridoBit1;
                    acarreo=0;
                 }
                 if(resultado1==1&&recorridoBit2==1)
                 {
                   resultado2=0;
                   acarreo=1;
                 }
                 else
                 {
                    resultado2=resultado1+recorridoBit2;
                 }
                 if(resultadoOperacion2===undefined)
                 {
                   resultadoOperacion2=resultado2;
                 }
                 else
                 {
                  resultadoOperacion2=resultado2+""+resultadoOperacion2;
                 }
              }
              if(acarreo==1)
              {
                resultadoOperacion=1+""+resultadoOperacion2;
              }
              else
              {
              resultadoOperacion=resultadoOperacion2;
              }
              anchura2-=1;
            }
            bin3.value=resultadoOperacion;
            //fin Suma
          }
        }
        if(tipoDeOperacion=="División(/)")
        {
          var variableUno=convertiraNumDecimal(binarioUno,anchoBin1);
          var variableDos=convertiraNumDecimal(binarioDos,anchoBin2);
          var resultadoEnDecimal=variableUno/variableDos;
          var ubicacionDelPunto;
          var resultadoDelPunto;
          var anchoResultadoEnDecimal=resultadoEnDecimal.length;
          var cadenaResultadoEnDecimal=resultadoEnDecimal.toString();
          var resultadoFinal;
            if(resultadoEnDecimal%1==0)
            {
              resultadoFinal=convertiraNumBinario(resultadoEnDecimal);
              bin3.value=resultadoFinal;
            }
            else
            {

            ubicacionDelPunto=cadenaResultadoEnDecimal.indexOf(".");
            resultadoDelPunto=cadenaResultadoEnDecimal.substring(ubicacionDelPunto+1,anchoResultadoEnDecimal);
            resultadoAntesDelPunto=parseInt(resultadoEnDecimal);

            resultadoFinal=convertiraNumBinario(resultadoAntesDelPunto)+"."+convertiraNumBinario2(resultadoDelPunto);
            bin3.value=resultadoFinal;
            }
          }
          //fin de la operacion division
          if(tipoDeOperacion=="Mover Bits a la izq(<<)")
          {
            if(binarioUno>=1&&binarioDos>=1)
            {
              var numBinar=convertiraNumDecimal(binarioUno,anchoBin1);
              var numBinar2=convertiraNumDecimal(binarioDos,anchoBin2);
              var resultado=numBinar;
              for(var i=0;i<numBinar2;i++)
              {
                resultado=(resultado*2);
              }
              console.log(resultado);
              if(resultado<=9999999999999)
              {
                resultado=convertiraNumBinario(resultado);
                bin3.value=resultado;
              }
              else
              {
                bin3.value="Hasta el infinito y más allá";
              }
            }
          }
          //fin desplazamiento bits a la izquierda
          if(tipoDeOperacion=="Mover Bits a la dere(>>)")
          {
            if(binarioUno>=1&&binarioDos>=1)
            {
              var numBinar=convertiraNumDecimal(binarioUno,anchoBin1);
              var numBinar2=convertiraNumDecimal(binarioDos,anchoBin2);
              var resultado=numBinar;
              for(var i=0;i<numBinar2;i++)
              {
                  resultado=(resultado/2);
                  if(resultado<1)
                  {
                    resultado=0;
                    break;
                  }
              }
              if(resultado<1)
              {
                  bin3.value=0;
              }
              else {
                resultado=convertiraNumBinario(resultado);
                bin3.value=resultado;
              }
            }
          }
          //fin desplazamiento bits a la derecha
        }
     }
   }
 }

function convertiraNumDecimal(num,ancho)
{
  var i=0;
  var numDecimal=0;
  var caracter;
  if(num>0)
  {
    while(ancho>0)
    {
      ancho-=1;
      caracter=num.substring(ancho,ancho+1);
      if(caracter==1)
      {

        numDecimal+=2**i;
      }
      i+=1;
    }
    return numDecimal;
  }
  else
  {
    bin3.value="";
  }
}

function convertiraNumBinario(decimal)
{
  var valorDecimal=String(decimal);
  var ancho=valorDecimal.length;
  var valorD=parseInt(valorDecimal);
  var num;
  var valorB=[];
  var codigoBinario;
  var caracterNum;
  if(ancho>=1)
  {
    if(valorDecimal<1)
    {
      bin3.value="";
    }
    else
    {
        while(valorD>=1)
        {
          if(valorD%2==0)
          {
            num=0;
          }
          else
          {
            num=1;
          }
          valorD=parseInt(valorD/2);
          valorB.push(num);
        }
        var largo=valorB.length;
        while(largo>=1)
        {
          largo-=1;
          if(codigoBinario!=undefined)
          {
            codigoBinario=codigoBinario+""+valorB[largo];
          }
          else
          {
            codigoBinario=valorB[largo];
          }
        }
        var anchuraFinal=codigoBinario.length;
        if(anchuraFinal<8)
        {
          var diferencia=8-anchuraFinal;
          var repetir=0;
          while(repetir<diferencia)
          {
            repetir+=1;
            codigoBinario=0+""+codigoBinario;
          }
        }
        return codigoBinario;
    }
  }
  else
  {
    bin3.value="";
  }
}
//fin de binario
function convertiraNumBinario2(decimal)
{
  var valorDecimal=0+"."+String(decimal);
  var ancho=valorDecimal.length;
  var valorD=parseFloat(valorDecimal);
  var num;
  var valorB=[];
  var codigoBinario;
  var ancho2;
  if(ancho>=1)
  {
    if(valorD<=0)
    {
    }
    else
    {
        while(valorD<1)
        {
          valorD=(valorD*2);
          num=parseInt(valorD);
          valorB.push(num);
        }
        if(valorD==1)
        {
        }
        else
        {
          valorD=valorD.toString();
          ancho2=valorD.length;
          var indice=valorD.indexOf(".");
          var decimales=valorD.substring(indice+1,ancho2);
          valorD=parseFloat(0+"."+decimales);

          while(valorD<1)
          {
            valorD=(valorD*2);
            num=parseInt(valorD);
            valorB.push(num);
          }
        }
        var largo=valorB.length;
        var iteracion=0;
        while(iteracion<largo)
        {
          if(codigoBinario!=undefined)
          {
            codigoBinario=valorB[iteracion]+""+codigoBinario;
          }
          else
          {
            codigoBinario=valorB[iteracion];
          }
          iteracion+=1;
        }
        return codigoBinario;
    }
  }

}
//fin de binario con .0000

// convertir texto a numero binario
texto_libre.addEventListener("keyup",deTextaBinario)
function  deTextaBinario()
{
  var caracter=texto_libre.value;
  var ancho=caracter.length;
  var uniCode;
  var i=0;
  var binario;
  var resultado;

    if(ancho<1)
    {
      binario_resultado.value="";
      texto_libre.style.backgroundColor="#990000";
      texto_libre.style.color = "#FFFFFF";
    }
    else
    {
      while(i<ancho)
      {
        uniCode=caracter.charCodeAt(i);
        if(uniCode>=32&&uniCode<=127)
        {
          texto_libre.style.backgroundColor="#ffffff";
          texto_libre.style.color = "#000000";
          binario_resultado.style.backgroundColor="#ffffff";
          binario_resultado.style.color = "#000000";
          binario=convertiraNumBinario(uniCode);
          if(resultado==undefined)
          {
            resultado=binario;
            binario_resultado.value=resultado;
          }
          else
          {
            resultado=resultado+""+binario
            binario_resultado.value=resultado;
          }
        }
        else
        {
          binario_resultado.value="No encontramos el caracter "+String.fromCharCode(uniCode);
          texto_libre.style.backgroundColor="#990000";
          texto_libre.style.color = "#FFFFFF";
          break;
        }
          i+=1;
      }
    }
}

binario_resultado.addEventListener("keyup",deBinarioaText);
function deBinarioaText()
{
  var valorBin=binario_resultado.value;
  var largo=valorBin.length;
  var ancho1=largo;
  var error=0;
  var caja=[];
  var result;
  // valida el pegado de valores distintos a 0 y 1
  while(ancho1>0)
  {
    ancho1-=1;
    var data=binario_resultado.value.substring(ancho1,ancho1+1);

    if((data!=1 && data!=0)||data==" ")
    {
      error=1;
      break;
    }
  }
  if(error==1)
  {
    binario_resultado.style.backgroundColor="#990000";
    binario_resultado.style.color = "#FFFFFF";
    texto_libre.value="";
  }
  else
  {
    binario_resultado.style.backgroundColor="#ffffff";
    binario_resultado.style.color = "#000000";
    if(largo<1)
    {
      texto_libre.value="";
      binario_resultado.style.backgroundColor="#990000";
      binario_resultado.style.color = "#FFFFFF";
    }
    else
    {
      var divisiones=parseInt(largo/8);
      var i=0;
      while(i<divisiones)
      {
        var trocear=binario_resultado.value.substring((8*i),8*(i+1));
        caja.push(trocear);
        i+=1;
      }
      var anchoCaja=caja.length;
      var i2=0;
      while(i2<anchoCaja)
      {
        var codigoDecimal=convertiraNumDecimal(caja[i2],8);
        if(codigoDecimal>=32&&codigoDecimal<=127)
        {
          binario_resultado.style.backgroundColor="#ffffff";
          binario_resultado.style.color = "#000000";
          texto_libre.style.backgroundColor="#ffffff";
          texto_libre.style.color = "#000000";
          var texto=String.fromCharCode(codigoDecimal);
          if(result==undefined)
          {
            result=texto;
            texto_libre.value=result;
          }
          else
          {
            result=result+""+texto;
            texto_libre.value=result;
          }
        }
        else
        {
          texto_libre.value="No se encontró la letra para el UNICODE "+codigoDecimal;
          binario_resultado.style.backgroundColor="#990000";
          binario_resultado.style.color = "#FFFFFF";
          break;
        }
        i2+=1;
      }
    }
  }
}
