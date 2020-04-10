
scriptAsincrono = function(){
    let n1 = parseInt(prompt("Ingrese un número"));
        
    if (isNaN(n1)){
            alert("Ingrese un número correctamente");
        }
    else{ 
        
        let n2 = prompt("Elija la función"),
        
            cuadrado = (n1) => n1*n1,
            
            raiz = (n1) => Math.sqrt(n1),
            
            primo = function (n1) {
                let res=0;
    
                for (let i=2 ; i<n1 ; i++ ){
                    if ( n1%i == 0 ){
                        res ++;
                    }
                }
                console.log(res);
                    if (res!=0){
                        return n1+" no es número primo";
                    }    
                    else if (res==0){
                        return n1+" es número primo";
                    }
            },
    
            factorial = function (n1) {
                if (n1===0){
                    return "Factorial de "+n1+" =\n1";
                }
                else {
                    let res=1;
                    for ( let i=n1 ; i>1 ; i--) {
                        res=res*i;
                    }
                    return "Factorial de "+n1+" =\n"+res;
                }
            }
            
            calc = function (n1,callback){
                if (typeof callback === 'function'){     // Verifico que el callback sea una función 
                return callback(n1);    
                }
                else{
                    alert("Elija una funcion");
                }
            }
    
            switch (n2){
                case "raiz":
                    alert("La raiz de "+n1+" es:\n"+calc(n1,raiz));
                    break;
                case "cuadrado":
                    alert("El cuadrado de "+n1+" es:\n"+calc(n1,cuadrado));
                    break;
                case "primo":
                    alert(calc(n1,primo));
                    break;
                case "factorial":
                    alert(calc(n1,factorial));
                    break;     
                default: alert("Ingrese una función correcta");           
            }
    }
}

arrayAsincrono = function () {
    let n, arr = [];

    do {
        n = prompt("OPCIONES:\na) Agregar un elemento al final\nb) Agregar un elemento al final\nc) Eliminar último elemento\nd) Salir");

        let adelante = (n1) => arr.unshift(n1),
    
            atras = (n1) => arr.push(n1);
    
            elementosArray = function (n1,callback) {
                if (typeof callback === 'function') {
                    return callback(n1);
                }
                else{
                    alert("Elija una funcion");
                }
            }

        switch (n) {
            case "a":
                let m = prompt("Ingrese un elemento");    
                elementosArray (m,adelante);
                alert(arr.join(" | "));
                break;

            case "b":
                let o = prompt("Ingrese un elemento");
                elementosArray (o,atras);
                alert(arr.join(" | "));
                break;
                
            case "c":
                elementosArray(n, funtion = () => arr.pop());
                alert(arr.join(" | "));
                break;

            case "d":
                alert("CHAU");
                break;    
                
            default: alert("Ingrese una opción correcta");    
        }

    } while (n!="d")    


}