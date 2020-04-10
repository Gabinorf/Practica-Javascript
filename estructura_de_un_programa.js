function sumemos(){
    let r=0,
        i=1;
    
    do{
        let n=parseInt(prompt("Ingrese un número"));
        if (isNaN(n)){
            alert('Ingrese el número correctamente');
        }    
        else{
            r=r+n;
            var p1=r/i;
            i=i+1;
        }
    }while(i<6);
    
    alert("La suma es: "+r+"\nEl promedio es: "+p1);   
}

function edades(){
    let cont=0,
        may=0,
        men=0;
        
    do{
        var ed=parseInt(prompt("Ingrese la edad"));
    
        if (isNaN(ed)){
            alert("Ingrese la Edad correctamente");
        }
        else{    
            switch (ed<18){
                case true:
                    cont=cont+1;
                    men=men+1;
                    break;

                case false:
                    cont=cont+1;
                    may=may+1; 
                    break;   
            }    
        }
    }while(ed!=0);

    alert("DE UN TOTAL DE "+cont+" INGRESOS:\nSon mayores de edad: "+may+"\nSon menores de edad: "+men);
}

function promCondicional(){
    let ing,
        tot=0,
        n=1;

    while (ing!="salir"){
        ing=prompt("Ingrese un número, para finalizar escriba 'salir'");
        let num=parseInt(ing);

        if(isNaN(num) && ing!="salir"){
            alert("Ingrese un número correctamente");
        }

        else if(num<10){
            tot=tot+num;
            var prom=tot/n;
            n++;
        }
    }
    console.log(prom);
}

function paresImpares(){
    let n,
        par=0,
        impar=0;

    do {
        n=parseInt(prompt("Ingrese un número"));

        if(!isNaN(n) && n!=0){
            switch(n%2){
                case 0:
                    par++;
                    break;

                case 1:
                    impar++;
                    break;    
            }
            
        }

        else if (isNaN(n) && n!=0){
            alert("Ingrese un número correctamente");
        }

    }while(n!=0);
    
    if (impar==par){
        alert("Tenemos un empate!");
    }

    else if(impar<par){
        alert("Se ingresaron más PARES");
    }

    else{
        alert("Se ingresaron más IMPARES");
    }        
}

function numeroALetra(){
    let n=parseInt(prompt("Ingrese un número entre 1 y 10"));

    if(n==1){
        alert("A equivale al número 1");
    }
    else if(n==2){
        alert("B equivale al número 2");
    }
    else if(n==3){
        alert("C equivale al número 3");
    }
    else if(n==4){
        alert("D equivale al número 4");
    }
    else if(n==5){
        alert("E equivale al número 5");
    }
    else if(n==6){
        alert("F equivale al número 6");
    }
    else if(n==7){
        alert("G equivale al número 7");
    }
    else if(n==8){
        alert("H equivale al número 8");
    }
    else if(n==9){
        alert("I equivale al número 9");
    }
    else if(n==10){
        alert("J equivale al número 10");
    }
    else{
        alert("Ingrese un número correctamente");
    }

}
