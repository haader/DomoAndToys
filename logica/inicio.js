
    
function inicio(){


    myLista.forEach((element,index)=>{

        let url="secciones/"+myLista[index].seccion+".html"
       document.getElementById("ContainerInicio").innerHTML+=`
        
    
        <div class="divcard1 ">
        
            <figure class="imgVer">
                <img class="cardimg1" id="imgdiv2" src="./IMAGENES/inicio/inicio (${myLista[index].id}).jpeg" alt="" >
            </figure>
    
                <p class="card-text">${myLista[index].articulo}</p> 
    
                <button onclick='irSeccion("${myLista[index].seccion}","${url}")' class="btn btn-primary bg-gradient"> <ion-icon name="eye-outline"></ion-icon> Ver</button>
    
        </div>
    
        `;
     
    });



}

//icono de carrito
/*<span class="icon-cart"></span> */