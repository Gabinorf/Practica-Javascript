fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=b0563826389f4016a3e309df0c31bffc")
    .then(res => {
        return res.json()
    }).then(info =>{
        for (i=0; i<4; i++){    
            let contenedor = document.createElement("div"),
            link = document.createElement("a"),
            contenido = document.createElement('p');
            img = document.createElement("img");

            document.getElementById("noticias").appendChild(contenedor);
            contenedor.appendChild(link);
            contenedor.appendChild(contenido);
            contenido.innerText = info.articles[i].description;
            link.innerText = info.articles[i].title;
            contenedor.style.backgroundImage = "url("+info.articles[i].urlToImage+")";
            contenedor.style.width = "400px"; contenedor.style.height = "400px";
            contenido.style.color = "#ffffff";
            link.href = info.articles[i].url;
            link.style.color = "#ffff";
            link.setAttribute("class","url");
            contenedor.setAttribute("class", "flex");
            
        }    
        console.log(info);
    })

function guardar(){

    let value = document.getElementById("buscar").value;
    //apiKey = b0563826389f4016a3e309df0c31bffc;

    console.log(value);
    fetch("https://newsapi.org/v2/top-headlines?q="+value+ "&apiKey=b0563826389f4016a3e309df0c31bffc")
        .then(response => {
            return response.json()
        })
        .then(datos =>{
            return console.log(datos)
        })
}

