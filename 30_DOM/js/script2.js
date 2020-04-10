function prueba1() {
    setTimeout( () => {
        fetch("../images/hongo.rojo.jpg")
            .then( response => {
                return document.getElementById("hongo").src = response.url
            }) 
            .catch ( error => {
                return console.log("Error de fetch", error)
            });        
    },3000);
}

function prueba2(){
    setTimeout(()=>{
        fetch("index2.html")
            .then(response=>{
                return response.text()
            })
            .then(text => {
                document.getElementById("content-list").innerHTML = text
            })
            .catch(err=>{
                return console.log("Error de fetch", err)
            });
    },3000);
}

async function prueba3 (){
    let img = document.createElement("img");
    
    fetch("https://i.pinimg.com/236x/59/79/22/5979226fe40c13b2d363392781074e46--mario.jpg")
        .then ( response => {
            if(response.ok) {
                response.json()
                    .then( response => img.src = response.avatar_url)
            }
            else{
                console.log("Respuesta de red OK");
                img.src = "images/icono.jpg";
            }
        })
        .catch( error => {
            alert("ERROR => "+error);
        })
         
    document.getElementById("top").insertBefore(img,document.getElementById("content-list"));
    img.style.height = "75px";
    img.style.width = "75px";
}        
  

prueba1();
//prueba2();
//prueba3();
