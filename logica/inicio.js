const Lista='[{"articulo":"Pista de Autito","id":1},{"articulo":"Caballo Mecedor","id":2},{"articulo":"Cocina de madera","id":3},{"articulo":"Autitos Artesanales","id":4},{"articulo":"Cuna de Juguete","id":5},{"articulo":"Camiones Artesanal","id":6},{"articulo":"Carteles","id":7},{"articulo":"Casa de muñecas","id":8},{"articulo":"Bodega de vino","id":9},{"articulo":"Domo Geodesicos","id":10}]';




 let myLista=JSON.parse(Lista);

console.log("prueba "+myLista[0].articulo);
console.log("prueba "+myLista[0].id);



var linkInicio="nany";
myLista.forEach((element,index)=>{

    document.getElementById("ContainerInicio").innerHTML+='<div class="divcard1 "><figure ><img class="cardimg1" id="imgdiv2" src="./IMAGENES/inicio/inicio ('+myLista[index].id+').jpeg" alt="" > </figure><p class="card-text ">'+myLista[index].articulo+'</p>  <a href="'+linkInicio+'" class="btn btn-primary bg-gradient"> Ver</a> </div>';
    console.log("cargando inicio "+element);
});

//icono de carrito
/*<span class="icon-cart"></span> */