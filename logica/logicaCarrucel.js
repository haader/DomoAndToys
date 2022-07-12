myCarrucel=document.getElementById("carrucel");

function select(img){
  
    document.getElementById("imgVer").innerHTML='<img class="cardimg1" src="./IMAGENES/pistas/pista ('+img+').jpeg" alt="" >';
    
};


myCarrucel.addEventListener("wheel", event =>{event.scrollX+=100} );

/*console.info(event.deltaY) */


function selectCasitas(img){
  
    document.getElementById("imgVer").innerHTML='<img class="cardimg1" src="./IMAGENES/casitas/casitas ('+img+').jpeg" alt="" >';
    
};

function selectCarteles(img){
  
    document.getElementById("imgVer").innerHTML='<img class="cardimg1" src="./IMAGENES/carteles/cartel ('+img+').jpeg" alt="" >';
    
};