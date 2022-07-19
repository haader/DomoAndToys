function CargarInicio(){


    myLista.forEach((element,index)=>{

        document.getElementById("ContainerInicio").innerHTML+=`
        
    
        <div class="divcard1 ">
        
            <figure class="imgVer">
                <img class="cardimg1" id="imgdiv2" src="./IMAGENES/inicio/inicio (${myLista[index].id}).jpeg" alt="" >
            </figure>
    
                <p class="card-text">${myLista[index].articulo}</p> 
    
                <a href="${linkInicio}" class="btn btn-primary bg-gradient"> Ver</a>
    
        </div>
    
        `;
        console.log("cargand desde otro html");
        console.log("cargando inicio "+element);
    });


};


//icono de carrito
/*<span class="icon-cart"></span> */