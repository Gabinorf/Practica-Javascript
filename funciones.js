function usuarioContraseña() {
    var U="gabino",
        C="1234",
        usuario=prompt("ingrese usuario"),
        contraseña=prompt("ingrese una contraseña");

    if (usuario==U && contraseña==C){ 
        alert("Bienvenido "+usuario);
    }

    else if (usuario==U && contraseña!=C){
        alert("Contraseña incorrecta");
    }

    else if(usuario!=U && contraseña==C){
        alert("Usuario incorrecto");
    }

    else {
        alert("Usuario y contraseña incorrecta");
    }
}

function diametroCirculo(){
    const Pi=3.1416;
    let radio=parseInt(prompt("Ingrese radio del círculo"));

    if (isNaN(radio)){
        alert("Ingrese 'radio' de forma numérica");
    }
    else{
        alert("El diámetro es: "+radio*2+"\nEl valor de pi: "+Pi);    
    }
}

function pseudocodigoJavascript(){

    function suma(){
            
        if (!isNaN(n1) && !isNaN(n2)){
            return parseInt(n1) + parseInt(n2);
        }
        
        else {
            throw("no es un número"); /* tiras un error con un mensaje */
        }
    }
    
var resultado=0;
    
do{
    var n1=prompt("Ingrese un número");
    var n2=prompt("Ingrese otro número");

    try{
        resultado=suma(n1,n2);
        alert("La suma es: "+resultado+"\n(repetir mientras la suma sea menor a 100)");
    }
    
    catch(err) {
        alert("ERROR "+"("+err+")");
    }    
}while(resultado<100);  
} 

function diagramaJavascript(){
    var num=parseInt(prompt("Ingrese un número"));

    (confirm("Es mayor a 10?")) ? (parseInt(prompt("ingrese un número")))>100 ? alert("A") : alert("B") :  (parseInt(prompt("ingrese un número")))>1000 ? alert("C") : alert("D");
    
    alert("El primer número ingresado es: "+num);
}