var texto=["texto"];
var contador=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var linkInicio="nany";

contador.forEach((element)=>{

    document.getElementById("ContainerInicio").innerHTML+='<div class="divcard1 "><figure ><img class="cardimg1" id="imgdiv2" src="./IMAGENES/inicio/inicio ('+element+').jpeg" alt="" > </figure><p class="card-text ">'+texto[0]+'</p>  <a href="'+linkInicio+'" class="btn btn-primary bg-gradient"> Ver</a> </div>';
    console.log("cargando inicio "+element);
});

//icono de carrito
/*<span class="icon-cart"></span> */