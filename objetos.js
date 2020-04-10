function primerObjeto(){
    let user={};

    user.nombre=prompt("Ingrese Nombre");
    user.apellido=prompt("Ingrese Apellido");
    user.email=prompt("Ingrese email");

    alert("Nombre: "+user.nombre+"\nApellido: "+user.apellido+"\nEmail: "+user.email);
}

function primeraClase(){

    class users{
        constructor(nombre,apellido,email,edad){
            this.nombre=nombre;
            this.apellido=apellido;
            this.email=email;
            this.edad=edad;
        }
    }    

    persona=new users(prompt("Ingrese Nombre"), prompt("ingrese Apellido"), prompt("Ingrese email"), prompt("Ingrese edad"));

    alert("Nombre: "+persona.nombre+"\nApellido: "+persona.apellido+"\nEmail: "+persona.email+"\nEdad: "+persona.edad);
}

function primerosMetodos(){
class user {
    constructor(nombre, apellido, email, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad
    }
    is_adult=function() {
        if (this.edad>=18){
            return true;
        }
        else{
            return false;    
        }
    }
    get_full_name=function(){
        return usuario.nombre+" "+usuario.apellido; 
    }
}
usuario = new user(prompt("Ingrese Nombre"), prompt("ingrese Apellido"), prompt("Ingrese email"), prompt("Ingrese edad"));
alert("Nombre: " + usuario.nombre + "\nApellido: " + usuario.apellido + "\nemail: " + usuario.email + "\nEdad: " + usuario.edad);
alert("Es mayor? "+usuario.is_adult());
alert("Nombre completo: "+usuario.get_full_name());
}

Array_base_datos=function(){
    class perros{
        constructor(raza,nombre,peso,edad){
            this.raza=raza;
            this.nombre=nombre;
            this.peso=peso;
            this.edad=edad;
        }
    } 
    let base=[],
        raza;
    do{   
        raza=prompt("Raza:\n'stop' para detener");
        if (raza!="stop"){
        dog=new perros(raza,prompt("Nombre:"),prompt("Peso:"),prompt("Edad:"));
        base.push(dog);
        }
    }while(raza!="stop");
    
    console.log(base);
    alert("perros en consola");
}