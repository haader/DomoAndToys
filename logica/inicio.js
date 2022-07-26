
    
function inicio(){


    myLista.forEach((element,index)=>{

        let url="secciones/"+myLista[index].seccion+".html"
       document.getElementById("ContainerInicio").innerHTML+=`
        
    
        <div class="divcard1" onclick='irSeccion("${myLista[index].name}","${url}")' >
        
            <figure class="imgVer">
                <img class="cardimg1" id="imgdiv2" src="./IMAGENES/inicio/${myLista[index].name}.jpeg" alt="" >
            </figure>
    
                <p class="card-text">${myLista[index].articulo}</p> 
    
        </div>
    
        `;
     //<ion-icon name="eye-outline"></ion-icon>
    });



}

//icono de carrito
/*<span class="icon-cart"></span> */