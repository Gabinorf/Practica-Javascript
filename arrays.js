function nrosarray(){
    
    let nros=[],n;
    
    do{        
        n=prompt("Ingrese un número\n(stop para salir)");

        if (!isNaN(parseInt(n))){
        nros.push(n);
        }
        else if (n!="stop"){    
            alert("Ingrese un número");
        }    
    } while(n!="stop");

    alert(nros);
}

function dividirarray(){
    let n=prompt("Ingrese un número\n( 0 para salir)"),
        N=[],
        M=[],
        O=[];
    do{
        if(n%2==0 && !isNaN(n)){
        N.push(n);
    }    
    else if((n%2)!=0 && !isNaN(n)){
        M.push(n);    
    }
    else {
        O.push(n);
    }  
    n=prompt("Ingrese un número");  
    } while(n!=0);
    alert("Pares: "+N+"\nImpres: "+M+"\nOtros: "+O);    
}

function extremos(){
    let n=parseInt(prompt("Ingrese un Número\n0 para salir")),
        nros=[];
        nros.push(n);    

    do{
        n=parseInt(prompt("Ingrese un Número"));
        if (n<nros[0] && n!=0){
            nros.unshift(n);    
        }
        else if(n>nros[nros.length-1]){
            nros.push(n);
        }
        else if (!isNaN(n) && n!=0){
            nros.splice(2,0,n);
        }
        else if (isNaN(n)){
            alert("Ingrese un número");
        }
    }while(n!=0)

    nros.shift();
    nros.pop();
    alert(nros);
}

let excepciones = () => {
    let n=parseInt(prompt("Ingrese un número")), nros,
        o=parseInt(prompt("Ingrese un número")),
        p=parseInt(prompt("Ingrese un número"));

    confirm("Desea crear un array con los números?") ? nros = [n,o,p] : console.log("nros no es Array");
    
    let holaMundo = function (array) {
        console.log(array);
        if ( Array.isArray(array) === false ) {
            throw(new Error("No es un array"));
        }
        else if (isNaN(n) || isNaN(o) || isNaN(p)) {
            throw(new Error("Alguno de los elementos no es un número"));
        }
        else {
            array.sort();
            alert("El mayor de los elementos es "+ array[array.length-1]);
            console.log(array);
        }
    }

    try {
        holaMundo(nros);
    }    
    catch (e) {
        alert (e.message);

    }
}
