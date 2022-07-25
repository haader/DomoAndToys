
    
function inicio(){


    myLista.forEach((element,index)=>{

        let url="secciones/"+myLista[index].seccion+".html"
       document.getElementById("ContainerInicio").innerHTML+=`
        
    
        <div class="divcard1" onclick='irSeccion("${myLista[index].seccion}","${url}")' >
        
            <figure class="imgVer">
                <img class="cardimg1" id="imgdiv2" src="./IMAGENES/inicio/inicio (${myLista[index].id}).jpeg" alt="" >
            </figure>
    
                <p class="card-text">${myLista[index].articulo}</p> 
    
        </div>
    
        `;
     //<ion-icon name="eye-outline"></ion-icon>
    });



}

//icono de carrito
/*<span class="icon-cart"></span> */