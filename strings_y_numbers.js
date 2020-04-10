function suma(){
    var n=prompt("Ingrese un número"),
        m=prompt("Ingrese otro número");
    alert(parseInt(n) + parseInt(m));        
}

function promedio(){
    var n=prompt("Ingrese un número"),
        m=prompt("Ingrese un número"),
        o=prompt("Ingrese un número"),
        p=prompt("Ingrese un número"),
        q=prompt("Ingrese un número");
    alert("PROMDEDIO: " + (parseInt(n)+parseInt(m)+parseInt(o)+parseInt(p)+parseInt(q))/5);    
}

function perimetro(){
    var d=prompt("Ingrese diámetro del círculo");
    r=2*3.1416*((parseInt(d))/2);
    alert("El perímetro del círculo es: " + r);
}

function superficie(){
    d=parseInt(prompt("Ingrese diámetro del círculo"));
    r=3.1416*(Math.pow(d/2,2));
    alert("La superficie del círculo es: "+r);
}

function nombre(){
    alert(prompt("Ingrese su nombre").toLowerCase());
}

function apellido(){
    alert(prompt("Ingrese su apellido").toUpperCase());
}

function nombreApellido(){
    n=prompt("Ingrese su nombre").toLowerCase();
    a=prompt("Ingrese su apellido").toUpperCase();
    alert(n+" "+a);
}

function datosCompletos(){
    n=prompt("Ingrese su Nombre").toUpperCase();
    a=prompt("Ingrese su Apellido").toUpperCase();
    e=parseInt(prompt("Ingrese su edad"));
    alert("Su nombre es: "+n+"\nSu apellido es: "+a+"\nSu edad es: "+e); /* SE UTILIZA "\n" PARA SALTOS DE LINEA */
}

