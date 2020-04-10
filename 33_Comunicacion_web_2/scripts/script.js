function prueba(){
    class Personas{
        constructor(nombre,apellido,edad){
            this.nombre=nombre;
            this.apellido=apellido;
            this.edad=edad;
    }
    }
let persona =new Personas(prompt("nombre"),prompt("apellido"),prompt("edad"));

const personaJSON = JSON.stringify(persona);

console.log(personaJSON);
}


function login(){
    let input1 = document.getElementById("usuario"),
        input2 = document.getElementById("contrasena");

        //Guarda usuario y contraseña en local storage
        localStorage.setItem("Usuario", input1.value);
        localStorage.setItem("Contraseña", input2.value);

    alert("Hola "+input1.value);
    
    class Usuarios{
        constructor(nombre,apellido,dni,fechaNacimiento,hobbie){
            this.nombre = nombre;
            this.apellido = apellido;
            this.dni = dni;
            this.fechaNacimiento = fechaNacimiento;
            this.hobbie = hobbie;
        }
    }
    let usuario = new Usuarios(input1.value,prompt("Ingrese apellido"),prompt("Ingrese DNI"),prompt("Ingrese fecha de nacimiento"),prompt("Elija un hobbie"));

    const usuarioJSON = JSON.stringify(usuario);

    console.log(usuarioJSON);
}

//Borra usuario y contraseña del local storage
function logOut(){
    localStorage.removeItem("Usuario");
    localStorage.removeItem("Contraseña");
}