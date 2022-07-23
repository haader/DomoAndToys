

function CargarCarrucel(){

    for (let index = 0; index < max; index++) {
    
    document.getElementById("carrucel").innerHTML+=`<img class="imagenes" id="img${index}" src="./IMAGENES/${carpeta}/${file} (${index}).jpeg" onclick="selectimg(${index})" >`;
    
    }
    
    
    
    
    //BTNIMG casitas!!
    
    
    

}


function btnPrev(){
if(indext>0){
    document.getElementById("img"+indext).style.transform = '';
    indext--;
    document.getElementById("carrucel").innerHTML+=`<img class="imagenes" id="img${index}" src="./IMAGENES/${carpeta}/${file} (${index}).jpeg" onclick="selectimg(${index})" >`;
    document.getElementById("img"+indext).style.transform = "translate(0,-10px)"
}else{
    
}
return indext;

}

                function btnNext(){
                    document.getElementById("img"+indext).style.transform = '';
                    indext++;
                    if(indext<max){
                        
                        document.getElementById("imgVer").innerHTML=`<img class="cardimg1" src="./IMAGENES/${seccion}s/${seccion} (${indext}).jpeg" alt="" >`;
                        document.getElementById("img"+indext).style.transform = "translate(0,-10px)"

                    }else{
                        
                        indext--;
                        document.getElementById("img"+indext).style.transform = "translate(0,-10px)"
                    }
                    return indext;
                }

function selectimg(img){

document.getElementById("img"+indext).style.transform = '';

document.getElementById("carrucel").innerHTML+=`<img class="imagenes" id="img${index}" src="./IMAGENES/${carpeta}s/${file} (${index}).jpeg" onclick="selectimg(${index})" >`;
indext=img;
document.getElementById("img"+indext).style.transform = "translate(0,-10px)"
return(indext);
};





/*
myCarrucel.addEventListener("wheel", event =>{event.scrollX+=100} );

/*console.info(event.deltaY) */
