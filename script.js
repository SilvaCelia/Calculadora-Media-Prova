
function notaFinal() { 
    var resultado1 = parseFloat(document.getElementById("valor1").value);
    var resultado2 = parseFloat(document.getElementById("valor2").value);
    var resultado3 = parseFloat(document.getElementById("valor3").value);
    var resultado4 = parseFloat(document.getElementById("valor4").value);   
    var resultadoFinal = (resultado1 + resultado2 + resultado3 + resultado4)/ 4;
    var elementoNotaFinal = document.getElementById("resultado");
    var resultado = "Sua média de nota é " + resultadoFinal; 
     if (resultadoFinal >=6){
       elementoNotaFinal.innerHTML = resultado + " Você foi aprovado!";
    
    } else {
      elementoNotaFinal.innerHTML = resultado + " Você não foi aprovado, tente novamente!";
    }
     
   
   }