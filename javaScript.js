var num1=Number(prompt("Ingrese un numero")) //Se ingrasa un numero
if (num1 >= 0) //Validamos si es entero positivo
 {
   const myFunction = () => {
            contador = 1;
            while (contador <= num1) //
             {//Generamos las tablas
                document.write("<div>  <h2>Aprende la tabla del : " + contador + "</h2>");
                //generamos las operaciones
                for (let i = 0; i <= 10; i++) {
                    let multiplicacion = i * contador;
                    //Numero par o impar 
                    (multiplicacion%2 == 0)? document.write("<h3  >" + contador + " * " + i + " = " + multiplicacion + "   Es Par</h2>"):document.write(" <h4 >" + contador + " * " + i + " = " + multiplicacion + "   Es Impar</h2>");

                }
                document.write("</div>") //termina tabla
                contador++;
            }
        }
        myFunction()
    } else {
        document.write("Escribe un numero entero positivo");//
    }
