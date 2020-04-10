function numerosPares(){
    var n=parseInt(prompt("Ingrese un número"));
    console.log(n);
    if (isNaN(n)){
        alert("Debe ingresar un número");
    }
    else if ((n%2)==0){
        alert(n+" es par");
    }
    else {
        alert(n+ " es impar");
    }
}

function datosPersonales(){
    e=parseInt(prompt("Ingrese su edad"));
    if (!isNaN(e)){
    alert(confirm("Se encuentra cursando algún estudio?")? "Su edad es de "+e+" años y está estudiando" : "Tiene "+e+" años y no estudia");
    }
    else{
        alert("No ingresó su edad correctamente");
    }    
}

function votantes(){
    var e=parseInt(prompt("Edad?"));
    if (!isNaN(e)){
        alert((e<18)? "No tiene edad suficiente para votar" : (e<80)? "Tiene obligación de votar" : "Puede votar pero no es obligatorio");
    }
    else{
        alert("No ingresó su edad correctamente");
    }
}

function contraseña(){
    var user="Gabino",
        code="Gabino88",
        u=prompt("Ingrese nombre de Usuario"),
        c=prompt("Ingrese la contraseña");
    alert((user===u)? (code===c)? "Ingresó correctamente" : "Contraseña incorrecta" : "Usuario incorrecto");    
}

function resultadoDivision(){
    var n1=parseInt(prompt("Ingrese un número")),
        n2=parseInt(prompt("Ingrese un número"));
    if (isNaN(n1) || isNaN(n2)){
        alert("Ingrese los números correctamente");
    }
    else{
        alert((n2==0)? "El resultado no existe" : n1/n2);    
    }    
}

function evaluacion(){
    var n=parseInt(prompt("Ingrese su calificación"));
    if (isNaN(n)){
        alert("Ingrese el número correctamente");
    }
    else{
        alert((n<4)? "NO APROBADO" : (n<7)? "Debe recuperar" : "APROBADO");
    }
}

function horaReunion(){
    var n1=parseInt(prompt("Ingrese hora de inicio")),
        n2=parseInt(prompt("Ingrese hora de finalización"));
    if (isNaN(n1) || isNaN(n2) || n1>24 || n2>24){
            alert("Ingrese horarios correctamente, entre 0-24hs");
    }
    else{
        alert((n2<=n1)?"ERROR":"La información se guardó correctamente, reunión agendada entre "+n1+"-"+n2+"hs");
    } 
}

function datosCompletos2(){
    var n1=prompt("Ingrese su Nombre"),
        n2=prompt("Ingrese su Apellido"),  
        n3=parseInt(prompt("Ingrese su Número de documento"));
        if (isNaN(n3)){
            alert("Ingrese su documento correctamente");
        }
        else if(!isNaN(parseInt(n1)) || !isNaN(parseInt(n2))){
            alert("No ingreso Nombre o Apellido correctamente");
        }  
        
        else{
            alert("Su nombre es: "+n1+"\nSu apellido es: "+n2+"\nSu edad es: "+n3);
        }
}