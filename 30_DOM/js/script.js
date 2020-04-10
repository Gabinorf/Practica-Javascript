//  CAMBIO DE TÍTULO  //

let elemento = document.getElementsByTagName("h1");
console.log(titulo);

titulo.innerHTML = "Mushroom";




//  AGREGAR UN ELEMENTO  //

let item5 = document.createElement("li"),
    content = document.createTextNode("Nro 5"),
    list = document.getElementsByTagName("ul");
item5.appendChild(content);
document.getElementsByTagName("ul")[0].appendChild(item5);

/*  Otras formas de hacer lo anterior:

document.getElementsByTagName("li")[0].parentNode.appendChild(item5);
document.getElementsById("lista").appendChild(item5);  */

console.log(list);




//  Cambiar imagen luego de 2 segundos  //

let image = document.getElementById("hongo");
console.log(image);

setTimeout(function(){
    image.src = "images/hongo.rojo.jpg";
    },2000);


//  Reemplazar el texto con una palabra en negrita

let parrafo = document.querySelector(".intro");

parrafo.innerHTML = "El Super Champiñón está basado en un hongo alucinógeno llamado <b>'Amanita Muscaria'</b>, un hongo potencialmente tóxico y una de las drogas más antiguas que la humanidad conoce el cual, aunque no llega a causar la muerte, produce grandes alucinaciones.";

/*  parrafo.textContent => Tambén cambia el texto contenido pero no respeta las etiquetas HTML  */




//  Buscar 2 usuarios válidos en la Api GitHub y cambiar imagenes y nombre  //

async function usuariosGit() {
    let user1 = prompt("Ingrese usuario válido"),            // faloi           
        user2 = prompt("Ingrese otro usuario válido"),         
        url1 = "https://api.github.com/users/"+user1,
        url2 = "https://api.github.com/users/"+user2,
        response1 = await fetch(url1),
        response2 = await fetch(url2),
        usuario1 = await response1.json(),
        usuario2 = await response2.json();   

    document.getElementById("mario").src = usuario1.avatar_url;
    document.getElementById("luigi").src = usuario2.avatar_url;
    document.querySelector(".mario").innerHTML = usuario1.name;
    document.querySelector(".luigi").innerHTML = usuario2.name;
}
