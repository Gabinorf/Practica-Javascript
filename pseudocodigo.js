function perimetroCuadrado(){
    let lado=parseInt(prompt("Ingrese el lado del cuadrado"));

        if (isNaN(lado)){
            alert("Ingrese un número");
        }

        else{
            alert("El perímetro del cuadrado es de "+4*lado);
        }
}

function superficie2(){
    let largo=parseInt(prompt("Ingrese el lado del rectángulo")),
        ancho=parseInt(prompt("Ingrese el ancho del rectángulo"));

        if (isNaN(largo)){
            alert("Ingrese el largo de forma numérica");
        }

        else if (isNaN(ancho)){
            alert("Ingrese el ancho de forma numérica");
        }

        else{
            alert("La superficie del rectángulo es: "+largo*ancho);
        }    
}

function triangulo(){
    let l1=parseInt(prompt("ingrese lado del triángulo")),
        l2=parseInt(prompt("ingrese lado del triángulo")),
        l3=parseInt(prompt("ingrese lado del triángulo"));

    if (isNaN(l1)||isNaN(l2)||isNaN(l3)){
        alert("Ingrese 'lado' de forma numérica");
    }    
    else if (l1==l2){
        if(l2==l3){
            alert("El triángulo es equilatero");
        }
        else{
            alert("El triángulo es isósceles");
        }
    }
    else if(l1==l3){
        if(l2==l3){
            alert("El triángulo es equilatero");
        }
        else{
            alert("El triángulo es isósceles");
        }
    }
    else if(l2==l3){
        if(l2==l1){
            alert("El triángulo es equilatero");
        }
        else{
            alert("El triángulo es isósceles");
        }
    }
    else{
        alert("El triángulo es escaleno");
    }
}

function sueldo(){
    let valor,
        horas,
        extras,
        sueldo;

    do{
        valor=parseInt(prompt("Ingrese el valos en $ de su hora de trabajo"));
        if (isNaN(valor)){
            alert("Ingrese un número");
        }
    }while(isNaN(valor));    
    do{
        horas=parseInt(prompt("Ingrese el número de horas regulares trabajadas en el mes"));
        if (isNaN(horas)){
            alert("Ingrese un número");
        }
    }while(isNaN(horas));
    do{
        extras=parseInt(prompt("Ingrese el número de horas extras hechas"));
        if (isNaN(extras)){
            alert("Ingrese un número");
        }
    }while(isNaN(extras));

    sueldo=horas*valor+1.5*valor*extras;

    alert("Su sueldo será de: "+sueldo);
}

function factorial(){
    let num=parseInt(prompt("Ingrese el número")),
        resultado=1;

    if (isNaN(num)){
        alert("Ingrese correctamente el número");
    }    
    else{
        if (num==0){
            alert("Su factorial es: "+resultado);
        }
        else{
            do{
                resultado=resultado*num;
                num=num-1;
            }while(num!=0);
            alert("Su factorial es: "+resultado);
        }    
    }
}

function mayorMenor(){
    let num,
        mayor,
        menor,
        i=0;

    do{
        num=parseInt(prompt("Ingrese el Número"));

        if(isNaN(num)){
            alert("Ingrese el número correctamente");
        }

        else{
            if (i==0){
                mayor=num;
                menor=num;
                i++;
            }
            if((num<=menor)&&(num!=0)){
                menor=num;
            } 
            else if (num>=mayor){
                mayor=num;    
            }
        }
    } while(num!=0);
    
    alert("El mayor es: "+mayor+"\nEl menor es: "+menor);
}