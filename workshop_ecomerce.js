eComerce=function(){
    let n,
        listaPersonas=[],
        listaProductos=[],
        listaPedidos=[];

    do{
        n=parseInt(prompt("Elija una de las siguientes opciones:\n1-Usuarios\n2-Productos\n3-Pedidos\n4-Salir"));
        
        
        moduloUsuario=function(){
            let u=prompt("a. Ingresar nuevo Usuario\nb. Listado de Usuarios\nc. Modificar Usuario\nd. Eliminar Usuario");
            var expresion = /\w+@\w+\.+[a-z]/;

            class usuarios{
                constructor(nombre,apellido,email,telefono){
                    this.nombre=nombre;
                    this.apellido=apellido;
                    this.email=email;
                    this.telefono=telefono;
                } 
            } 
                
            if(u=="a"){                
                let nombre=prompt("Nombre").toUpperCase(),
                    apellido=prompt("Apellido").toUpperCase(),
                    email=prompt("Email","hola@ejemplo.com"),
                    telefono=prompt("Teléfono");
                
                if (!isNaN(nombre) || nombre==""){
                    alert("Ingrese el nombre correctamente");
                }    

                else if(!isNaN(apellido) || apellido==""){
                    alert("Ingrese el apellido correctamente");
                }

                else if(!expresion.test(email)){
                    alert("Ingrese el email correctamente");
                }

                else if(isNaN(telefono) || telefono==""){
                    alert("Ingrese el teléfono correctamente");
                }

                else{
                let persona = new usuarios (nombre,apellido,email,telefono);
                listaPersonas.push(persona);
                console.log(listaPersonas);
                }
            }

            else if(u=="b"){
                let text="";	

                for (let i=0; i<listaPersonas.length; i++) {
                    text += listaPersonas[i].nombre + " " + listaPersonas[i].apellido + "\n";                    
                }
                
                alert("Lista de Usuarios: \n"+text);
                console.log(listaPersonas);
            }

            else if(u=="c"){
                let text ="";
                
                for (let i=0; i<listaPersonas.length; i++) {
                    text +=i+" "+ listaPersonas[i].nombre + " " + listaPersonas[i].apellido + "\n";                    
                }

                let mod=prompt("Que usuario desea modificar?\n"+text);

                listaPersonas[mod].nombre=prompt("Nuevo nombre",listaPersonas[mod].nombre).toUpperCase();
                listaPersonas[mod].apellido=prompt("Nuevo apellido",listaPersonas[mod].apellido).toUpperCase();
                listaPersonas[mod].email=prompt("Nuevo email",listaPersonas[mod].email);
                listaPersonas[mod].telefono=prompt("Nuevo telefono",listaPersonas[mod].telefono);
            }

            else if (u=="d"){
                let text ="";
                
                for (let i=0; i<listaPersonas.length; i++) {
                    text +=i+" "+ listaPersonas[i].nombre + " " + listaPersonas[i].apellido + "\n";                    
                }

                let mod=prompt("Que usuario desea eliminar?\n"+text);

                listaPersonas.splice(mod,1);
            }

            else{
                moduloUsuario();
            }
        }   
            

        

        moduloProducto=function(){
            let u=prompt("a. Ingresar nuevo Producto\nb. Listado de Productos\nc. Modificar Producto\nd. Eliminar Producto");

            class productos{
                constructor(nombre,precio){
                    this.nombre=nombre;
                    this.precio=precio;
                }
            }

            if(u=="a"){
                let producto = new productos (prompt("Nombre del Producto"),prompt("Precio del Producto"));
                listaProductos.push(producto);
                console.log(listaProductos);
            }

            else if (u=="b"){
                let text="";

                for (let i=0; i<listaProductos.length; i++){
                    text += listaProductos[i].nombre.toUpperCase()+"\n";
                }

                alert("Lista de Productos: \n"+text);
            }

            else if(u=="c"){
                let text ="";
                
                for (let i=0; i<listaPersonas.length; i++) {
                    text +=i+" "+ listaProductos[i].nombre + "\n";                    
                }

                let mod=prompt("Que producto desea modificar?\n"+text);

                listaProductos[mod].nombre=prompt("Nuevo nombre",listaProductos[mod].nombre);
                listaPersonas[mod].precio=prompt("Nuevo precio",listaProductos[mod].precio);
            }

            else if(u=="d"){
                let text ="";
                
                for (let i=0; i<listaProductos.length; i++) {
                    text +=i+" "+ listaProductos[i].nombre + "\n";                    
                }

                let mod=prompt("Que producto desea eliminar?\n"+text);

                listaProductos.splice(mod,1); 
            }

            else{
                moduloProducto();
            }
        }


        moduloPedidos=function(){
            let n=prompt("a. Nuevos Pedidos\nb. Listado de Pedidos");

            if (n=="a"){
            
                let text1="",
                    text2="";
        
                    for(let i=0; i<listaPersonas.length; i++){
                        text1 += i+" "+listaPersonas[i].nombre.toUpperCase()+"\n";
                    }
        
                    for(let i=0; i<listaProductos.length; i++){
                        text2 += i+" "+listaProductos[i].nombre.toUpperCase()+"\n";
                    }
        
                let u=prompt("Seleccione un Usuario:\n"+text1),
                    p=prompt("Seleccione un Producto:\n"+text2),
                    c=confirm("Confirmar pedido?\n"+listaPersonas[u].nombre.toUpperCase()+" ("+listaProductos[p].nombre+")");
        
                class pedidos{
                    constructor(nombre,producto){
                        this.nombre=nombre;
                        this.producto=producto;
                    }
                }  
                
                if(c==true){
        
                    pedido= new pedidos (listaPersonas[u].nombre,listaProductos[p].nombre);
                    listaPedidos.push(pedido);
                    console.log(listaPedidos[0].nombre);
                }
            }

            else if(n=="b"){
                let text="";

                for(let i=0; i<listaPedidos.length; i++){
                    text += listaPedidos[i].nombre.toUpperCase()+": "+listaPedidos[i].producto+"\n";
                }

                alert("Lista de Pedidos:\n"+text);
            }
            else{
                moduloPedidos;
            }            
        }
            
                 
               
        if (isNaN(n) || n>4 || n<1){
            alert("Ingrese una opción correcta");
        }
        else{
            switch(n){
        
                case 1:
                    moduloUsuario();
                break;
        
                case 2:
                    moduloProducto();
                break;
        
                case 3:
                    moduloPedidos();
                break;
        
                case 4:
                    confirm("Seguro que quiere salir?")? alert("Hasta la próxima"):n=5;
                break;
            }
        }  
    }while(n!=4);
}