		//Declaração de variáveis
        var operandoA;
        var operandoB;
        var operador = "";
        
        //Função para limpar a calculadora
        
        function limpar() {
          operandoA = 0;
          operandoB = 0;
          operador = "";
          
        }
        
        //Função para somar dois números
        function somar() {
          operandoA= parseInt(document.getElementById("operandoA").value);
          operandoB= parseInt(document.getElementById("operandoB").value);
          resultado = operandoA + operandoB;
          mostrarResultado(resultado);
        
        }
        
        //Função para subtrair dois números
        function subtrair() {
          operandoA= parseInt(document.getElementById("operandoA").value);
          operandoB= parseInt(document.getElementById("operandoB").value);
          resultado = operandoA - operandoB;
          mostrarResultado(resultado);
        
        }
        
        //Função para multiplicar dois números
        function multiplicar() {
          operandoA= parseInt(document.getElementById(" operandoA").value);
          operandoB= parseInt(document.getElementById(" operandoB").value);
          resultado = operandoA * operandoB;
          mostrarResultado(resultado);
          
        }
        
        //Função para dividir dois números
        function dividir() {
          operandoA= parseInt(document.getElementById(" operandoA").value);
          operandoB= parseInt(document.getElementById(" operandoB").value);
          if (operandoB === 0) {
            alert("Divisão por zero não é permitida.");
          } else {
            resultado = operandoA / operandoB;
            mostrarResultado(resultado);
          }
        }
        
        //Função para mostrar o resultado
        function mostrarResultado(resultado) {
          document.getElementById("resultado").textContent = resultado;
        }
        
        //Eventos de clique nos botões
        document.getElementById("limpar").addEventListener("click", limpar);
        document.getElementById("somar").addEventListener("click", somar);
        document.getElementById("subtrair").addEventListener("click", subtrair);
        document.getElementById("multiplicar").addEventListener("click", multiplicar);
        document.getElementById("dividir").addEventListener("click", dividir);
            