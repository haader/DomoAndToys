
    
function inicio(){


    myLista.forEach((element,index)=>{

       
        document.getElementById("ContainerInicio").innerHTML+=`
        
    
        <div class="divcard1 ">
        
            <figure class="imgVer">
                <img class="cardimg1" id="imgdiv2" src="./IMAGENES/inicio/inicio (${myLista[index].id}).jpeg" alt="" >
            </figure>
    
                <p class="card-text">${myLista[index].articulo}</p> 
    
                <button onclick="traerHtml("${myLista[index].seccion}","secciones/${myLista[index].seccion}.html")" class="btn btn-primary bg-gradient"> Ver</button>
    
        </div>
    
        `;
     
    });



}

//icono de carrito
/*<span class="icon-cart"></span> */