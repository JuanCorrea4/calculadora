let suma = document.getElementById("suma").ariaDisabled ="true"
let resta = document.getElementById("resta").ariaDisabled ="true"
let multiplicacion = document.getElementById("multiplicacion").ariaDisabled ="true"
let division = document.getElementById("division").ariaDisabled ="true"
function numeros (numero){
  document.getElementById("pantalla").value+=numero
    let operacion = document.getElementById("pantalla").value 
      operacion = operacion.chatAt(operacion.length - 1)
        if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && (numero == "+" || numero == "-" || numero == "*" || numero == "/")){
        }
          else {
            document.getElementById("pantalla").value += numero
          }
  }
    function borr (){
      document.getElementById("pantalla").value=""
    }
      function resultado (){
        let result = document.getElementById("pantalla").value
        document.getElementById("pantalla").value = innerHTML = (eval(result))
      }
