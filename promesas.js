primerPromesa = function (){
    let star = Date.now();                        //OJOOOOO
    
// PROMESA 1

    let promise = new Promise ( function (resolve, reject){
            setTimeout ( function () {
                resolve ("Se resolvió en 2 segundos") 
            }, 2000);
        });

// PROMESA 2   
   
    let promise2 = new Promise ( function ( resolve, reject) {
        setTimeout ( function () {
            reject ("No se resolvió en 1 segundo");
        },1000);
    });

// PROMESA 3        
        
    let nro = Math.floor(Math.random() * 101);

    let promise3 = new Promise ( function (resolve, reject) {
            
        if (nro%2==0){
                resolve ("es número par");
            }
        else {
            reject ("es número impar")
        }
    });

// CARRERA DE PROMESAS    

    let promise4 = new Promise ( function ( resolve, reject) {
        console.time("Tiempo corredor 1");
        setTimeout ( function () {
            resolve ("Gana corredor 1");
            console.timeEnd("Tiempo corredor 1");
            },10*Math.floor(Math.random() * 100));
        }),

        promise5 = new Promise ( function ( resolve, reject) {
            console.time("Tiempo corredor 2");
            setTimeout ( function () {
                resolve ("Gana corredor 2")
                console.timeEnd("Tiempo corredor 2");
            },10*Math.floor(Math.random() * 100));
        });
        
        Promise.race([promise4, promise5])
        .then( function (respuesta) {
            console.log(respuesta);
        })
        .catch ( function ( error ) {
            console.log(error);
        })
        
        
        
        promise
        .then( function(response){
            console.log(response)
        })
        
        promise2
        .catch( function(response){
            console.log(response)
        }) 
        
        promise3 
        .then ( function (response){
            console.log(nro + " " + response)
        })
        .catch ( function (response) {
            console.log(nro + " " + response)
        })
        let end = Date.now();
        console.log(end-star);                         //OJOOOOOOO
    }


segundaPromesa = function() {
    let nro = parseInt(prompt("Ingrese un número")),

        promesa1 = new Promise ( function (resolve,reject) {
            resolve("La suma es "+(nro+nro))
        }),

        promesa2 = new Promise (function(resolve,reject){
            resolve("El cuadrado es "+nro*nro)
        }),

        promesa3 = new Promise (function(resolve,reject){
            resolve("La raiz es "+Math.sqrt(nro))
        }),

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
        },

        promesa4 = new Promise (function(resolve,reject){
            resolve(factorial(nro))
        });

    if (isNaN(nro)) {
        alert("Ingrese el número correctamente");
    }
    else {
        promesa1
            .then (function(response){
                alert(response);
                return promesa2;
            })
            .then (function(response){
                alert(response);
                return promesa3
            })
            .then (function(response){
                alert(response);
                return promesa4
            })
            .then (function(response){
                alert(response);
            })
    }
}    