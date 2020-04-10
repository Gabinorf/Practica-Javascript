// Generar una PROMESA que me muestre los nombres de usuario una vez que la llamada al Endpoint este completa

function logFetch1() {
    
    const url= "https://jsonplaceholder.typicode.com/users";

    return fetch(url)

        .then ( response => response.text() )

        .then ( response => console.log(response) )

        .catch ( err => console.error("fetch failed",err))
}


// Idem anterior con ASYNC FUNCTION

async function logFetch2() {
    
    const url= "https://jsonplaceholder.typicode.com/users";
    
    try {
        const response = await fetch(url);
        let lista = await response.json();

        for (let i=0; i<lista.length; i++) {
            console.log(lista[i].name);
        }
    }
    catch (e) {
        console.log("fetch fail" , e);
    }
}


// Generar un array de Username válidos de github, mostrar los resultados

async function UserNameGithub() {
    let endpoint = "https://api.github.com/users/",
        username = prompt("Ingrese UserName"),
        text = "", indice = 0,
        listaNombres = [];

        while (username != "salir") {
            
            try {
                const url = endpoint + username,
                    response = await fetch(url),
                    json = await response.json();

                if (json.message==="Not Found"){
                    alert("el Usuario no existe");
                }
                else {    
                    text +=indice+" "+json.name+"\n";    
                    listaNombres.push(json);
                    indice++;
                }    
            } 
            catch (error) {
                console.log("ERROR =>",error);
            } 

            username = prompt("Ingrese UserName");  
        }

        console.log(listaNombres);   
        alert(text); 

        return (listaNombres);
}
    
// Mostrar los seguidores de los Usarios de ListaNombres

async function followers(){
    try{
        let usuarios = await UserNameGithub(), 
        text1="", text2="Seguidores:\n";
        
        for (let i=0; i<usuarios.length; i++){
            text1 += i+" "+usuarios[i].name+"\n";
        } 
        let endpoint = usuarios[prompt("Seleccione un usuario para ver sus seguidores:\n"+text1)].followers_url,
            response = await fetch(endpoint),
            json = await response.json();
        
        for (let i=0; i<json.length; i++){
            text2 += i+" "+json[i].login+'\n';
        }
        alert(text2);
    } 
    catch(err){
        console.log("Error: ",err);
    }    
}
    
    
    
    