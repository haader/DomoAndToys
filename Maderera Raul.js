window.onload =function (){
    
    

//....................................imagen2................................................

    document.getElementById("imgdiv2").onmouseover=function(){ 
        document.getElementById("imgdiv2").style.opacity = "1";

    };
    document.getElementById("imgdiv2").onmouseout=function(){
        document.getElementById("imgdiv2").style.opacity = "0.8";
    };
//....................................imagen3................................................
document.getElementById("imgdiv3").onmouseover=function(){ 
    document.getElementById("imgdiv3").style.opacity = "1";

};
document.getElementById("imgdiv3").onmouseout=function(){
    document.getElementById("imgdiv3").style.opacity = "0.8";
};
//....................................imagen4................................................
document.getElementById("imgdiv4").onmouseover=function(){ 
    document.getElementById("imgdiv4").style.opacity = "1";

};
document.getElementById("imgdiv4").onmouseout=function(){
    document.getElementById("imgdiv4").style.opacity = "0.8";
};
}

//....................................imagen FIN................................

//....................................CODIOGOS MENU................................


var clic=1;

function funtionmenu(){
if (clic==1){
    document.getElementById("iconmenu").style.color="#212529";
    document.getElementById("banerselección1").style.display="none";
    document.getElementById("banerselección2").style.display="none";
    document.getElementById("header").style.height="3rem";
    document.getElementById("maderanav").style.height="3rem";
    document.getElementById("container-fluit").style.marginTop="3rem";

    
    clic = clic + 1;
}else{

    document.getElementById("iconmenu").style.color="white";
    document.getElementById("banerselección1").style.display="inline";
    document.getElementById("banerselección2").style.display="inline";
    document.getElementById("header").style.height="7rem";
    document.getElementById("maderanav").style.height="7rem";
    document.getElementById("container-fluit").style.marginTop="8rem";

    
    clic = 1;
}

}
window.onresize = function(){

    anchoVentana = window.innerWidth;
    //console.log(anchoVentana)
    if(anchoVentana > 500 && anchoVentana < 1000){
    
        document.getElementById("header").style.height="3rem";
        document.getElementById("maderanav").style.height="3rem";
        document.getElementById("banerselección1").style.display="inline";
    document.getElementById("banerselección2").style.display="inline";
            
   };
   if(anchoVentana < 500 ){
    
    document.getElementById("banerselección1").style.display="block";
    document.getElementById("banerselección2").style.display="block";
    document.getElementById("header").style.height="7rem";
    document.getElementById("maderanav").style.height="7rem";
        
};

}


//  https://platzi.com/tutoriales/1050-programacion-basica/178-mostrar-y-ocultar-div-con-javascript-y-css3/ 





//....................................MENU NAV....................................................................
//....................................MENU NAV.......................................................................

//....................................MENU NAV.......................................................................
let   anchoVentana = window.innerWidth;
document.getElementById("inicio").addEventListener("click",iniciof)
function iniciof(){
    if(anchoVentana>1200){

    document.getElementById("inicio").style.backgroundColor="rgba(4, 4, 8, 0.2)";
    document.getElementById("inicio").style.border="solid";
    document.getElementById("inicio").style.color="teal";

    document.getElementById("inicio").style.borderColor="#212529";
    document.getElementById("inicio").style.borderTopLeftRadius="10px";
    document.getElementById("inicio").style.borderTopRightRadius="10px";
    document.getElementById("inicio").style.borderBottom="white";
    document.getElementById("inicio").style.zIndex="0";
    document.getElementById("inicio").style.opacity="0.8";
    document.getElementById("inicio").style.backgroundColor="none";
    document.getElementById("inicio").style.height="3rem";
    document.getElementById("inicio").style.padding="0.5rem";


  //para los demás
  document.getElementById("casitas").style.border="none";
  document.getElementById("casitas").style.color="white";
  document.getElementById("casitas").style.padding="0rem";


  document.getElementById("carteles").style.border="none";
  document.getElementById("carteles").style.color="white";
  document.getElementById("carteles").style.padding="0rem";


  document.getElementById("juguetes").style.border="none";
  document.getElementById("juguetes").style.color="white";
  document.getElementById("juguetes").style.padding="0rem";


  document.getElementById("domos").style.border="none";
  document.getElementById("domos").style.color="white";
  document.getElementById("domos").style.padding="0rem";


  document.getElementById("mas").style.border="none";
  document.getElementById("mas").style.color="white";
  document.getElementById("mas").style.padding="0rem";


  document.getElementById("casitas").style.border="none";
  document.getElementById("casitas").style.color="white";
  document.getElementById("casitas").style.padding="0rem";
}
}

document.getElementById("casitas").addEventListener("click",casitaf)
function casitaf(){
    if(anchoVentana>1200){

    document.getElementById("casitas").style.border="solid";
    document.getElementById("casitas").style.borderColor="#212529";
    document.getElementById("casitas").style.borderTopLeftRadius="10px";
    document.getElementById("casitas").style.borderTopRightRadius="10px";
    document.getElementById("casitas").style.borderBottom="white";
    document.getElementById("casitas").style.zIndex="0";
    document.getElementById("casitas").style.opacity="0.8";
    document.getElementById("casitas").style.backgroundColor="none";
    document.getElementById("casitas").style.height="3rem";
    document.getElementById("casitas").style.color="teal";
    document.getElementById("casitas").style.padding="0.5rem";



//para los demás
document.getElementById("pistas").style.border="none";
document.getElementById("pistas").style.color="white";
document.getElementById("pistas").style.padding="0rem";


document.getElementById("carteles").style.border="none";
document.getElementById("carteles").style.color="white";
document.getElementById("carteles").style.padding="0rem";


document.getElementById("juguetes").style.border="none";
document.getElementById("juguetes").style.color="white";
document.getElementById("juguetes").style.padding="0rem";


document.getElementById("domos").style.border="none";
document.getElementById("domos").style.color="white";
document.getElementById("domos").style.padding="0rem";


document.getElementById("mas").style.border="none";
document.getElementById("mas").style.color="white";
document.getElementById("mas").style.padding="0rem";


document.getElementById("inicio").style.border="none";
document.getElementById("inicio").style.color="white";
document.getElementById("inicio").style.padding="0rem";
}

}

document.getElementById("pistas").addEventListener("click",pistasf)
function pistasf(){
    if(anchoVentana>1200){

    document.getElementById("pistas").style.border="solid";
    document.getElementById("pistas").style.borderColor="#212529";
    document.getElementById("pistas").style.borderTopLeftRadius="10px";
    document.getElementById("pistas").style.borderTopRightRadius="10px";
    document.getElementById("pistas").style.borderBottom="white";
    document.getElementById("pistas").style.zIndex="0";
    document.getElementById("pistas").style.opacity="0.8";
    document.getElementById("pistas").style.backgroundColor="none";
    document.getElementById("pistas").style.height="3rem";
    document.getElementById("pistas").style.color="teal";
    document.getElementById("pistas").style.padding="0.5rem";



    //para los demás
    document.getElementById("casitas").style.border="none";
    document.getElementById("casitas").style.color="white";
    document.getElementById("casitas").style.padding="0rem";


    document.getElementById("carteles").style.border="none";
    document.getElementById("carteles").style.color="white";
    document.getElementById("carteles").style.padding="0rem";


    document.getElementById("juguetes").style.border="none";
    document.getElementById("juguetes").style.color="white";
    document.getElementById("juguetes").style.padding="0rem";


    document.getElementById("domos").style.border="none";
    document.getElementById("domos").style.color="white";
    document.getElementById("domos").style.padding="0rem";


    document.getElementById("mas").style.border="none";
    document.getElementById("mas").style.color="white";
    document.getElementById("mas").style.padding="0rem";


    document.getElementById("inicio").style.border="none";
    document.getElementById("inicio").style.color="white";
    document.getElementById("inicio").style.padding="0rem";
    
}
}

document.getElementById("carteles").addEventListener("click",cartelesf)
function cartelesf(){
    if(anchoVentana>1200){

    document.getElementById("carteles").style.border="solid";
    document.getElementById("carteles").style.borderColor="#212529";
    document.getElementById("carteles").style.borderTopLeftRadius="10px";
    document.getElementById("carteles").style.borderTopRightRadius="10px";
    document.getElementById("carteles").style.borderBottom="white";
    document.getElementById("carteles").style.zIndex="0";
    document.getElementById("carteles").style.opacity="0.8";
    document.getElementById("carteles").style.backgroundColor="none";
    document.getElementById("carteles").style.height="3rem";
    document.getElementById("carteles").style.color="teal";
    document.getElementById("carteles").style.padding="0.5rem";


      //para los demás
      document.getElementById("casitas").style.border="none";
      document.getElementById("casitas").style.color="white";
      document.getElementById("casitas").style.padding="0rem";
 
  
      document.getElementById("pistas").style.border="none";
      document.getElementById("pistas").style.color="white";
      document.getElementById("pistas").style.padding="0rem";
 
  
      document.getElementById("juguetes").style.border="none";
      document.getElementById("juguetes").style.color="white";
      document.getElementById("juguetes").style.padding="0rem";
 
  
      document.getElementById("domos").style.border="none";
      document.getElementById("domos").style.color="white";
      document.getElementById("domos").style.padding="0rem";
 
  
      document.getElementById("mas").style.border="none";
      document.getElementById("mas").style.color="white";
      document.getElementById("mas").style.padding="0rem";
 
  
      document.getElementById("inicio").style.border="none";
      document.getElementById("inicio").style.color="white";
      document.getElementById("inicio").style.padding="0rem";
    
}
}

document.getElementById("juguetes").addEventListener("click",juguetesf)
function juguetesf(){
    if(anchoVentana>1200){

    document.getElementById("juguetes").style.border="solid";
    document.getElementById("juguetes").style.borderColor="#212529";
    document.getElementById("juguetes").style.borderTopLeftRadius="10px";
    document.getElementById("juguetes").style.borderTopRightRadius="10px";
    document.getElementById("juguetes").style.borderBottom="white";
    document.getElementById("juguetes").style.zIndex="0";
    document.getElementById("juguetes").style.opacity="0.8";
    document.getElementById("juguetes").style.backgroundColor="none";
    document.getElementById("juguetes").style.height="3rem";
    document.getElementById("juguetes").style.color="teal";
    document.getElementById("juguetes").style.padding="0.5rem";



     //para los demás
     document.getElementById("casitas").style.border="none";
     document.getElementById("casitas").style.color="white";
     document.getElementById("casitas").style.padding="0rem";

 
     document.getElementById("pistas").style.border="none";
     document.getElementById("pistas").style.color="white";
     document.getElementById("pistas").style.padding="0rem";

 
     document.getElementById("carteles").style.border="none";
     document.getElementById("carteles").style.color="white";
     document.getElementById("carteles").style.padding="0rem";

 
     document.getElementById("domos").style.border="none";
     document.getElementById("domos").style.color="white";
     document.getElementById("domos").style.padding="0rem";

 
     document.getElementById("mas").style.border="none";
     document.getElementById("mas").style.color="white";
     document.getElementById("mas").style.padding="0rem";

 
     document.getElementById("inicio").style.border="none";
     document.getElementById("inicio").style.color="white";
     document.getElementById("inicio").style.padding="0rem";
    }
}


document.getElementById("domos").addEventListener("click",domosf)
function domosf(){
    if(anchoVentana>1200){

    document.getElementById("domos").style.border="solid";
    document.getElementById("domos").style.borderColor="#212529";
    document.getElementById("domos").style.borderTopLeftRadius="10px";
    document.getElementById("domos").style.borderTopRightRadius="10px";
    document.getElementById("domos").style.borderBottom="white";
    document.getElementById("domos").style.zIndex="0";
    document.getElementById("domos").style.opacity="0.8";
    document.getElementById("domos").style.backgroundColor="none";
    document.getElementById("domos").style.height="3rem";
    document.getElementById("domos").style.color="teal";
    document.getElementById("domos").style.padding="0.5rem";



     //para los demás
     document.getElementById("casitas").style.border="none";
     document.getElementById("casitas").style.color="white";
     document.getElementById("casitas").style.padding="0rem";

 
     document.getElementById("pistas").style.border="none";
     document.getElementById("pistas").style.color="white";
     document.getElementById("pistas").style.padding="0rem";

 
     document.getElementById("carteles").style.border="none";
     document.getElementById("carteles").style.color="white";
     document.getElementById("carteles").style.padding="0rem";

 
     document.getElementById("juguetes").style.border="none";
     document.getElementById("juguetes").style.color="white";
     document.getElementById("juguetes").style.padding="0rem";

 
     document.getElementById("mas").style.border="none";
     document.getElementById("mas").style.color="white";
     document.getElementById("mas").style.padding="0rem";

 
     document.getElementById("inicio").style.border="none";
     document.getElementById("inicio").style.color="white";
     document.getElementById("inicio").style.padding="0rem";
    
}
}

document.getElementById("mas").addEventListener("click",masf)
function masf(){
    if(anchoVentana>1200){

    document.getElementById("mas").style.border="solid";
    document.getElementById("mas").style.borderColor="#212529";
    document.getElementById("mas").style.borderTopLeftRadius="10px";
    document.getElementById("mas").style.borderTopRightRadius="10px";
    document.getElementById("mas").style.borderBottom="white";
    document.getElementById("mas").style.zIndex="0";
    document.getElementById("mas").style.opacity="0.8";
    document.getElementById("mas").style.backgroundColor="none";
    document.getElementById("mas").style.height="3rem";
    document.getElementById("mas").style.color="teal";
    document.getElementById("mas").style.padding="0.5rem";



      //para los demás
      document.getElementById("casitas").style.border="none";
      document.getElementById("casitas").style.color="white";
      document.getElementById("casitas").style.padding="0rem";

  
      document.getElementById("pistas").style.border="none";
      document.getElementById("pistas").style.color="white";
      document.getElementById("pistas").style.padding="0rem";

  
      document.getElementById("carteles").style.border="none";
      document.getElementById("carteles").style.color="white";
      document.getElementById("carteles").style.padding="0rem";

  
      document.getElementById("juguetes").style.border="none";
      document.getElementById("juguetes").style.color="white";
      document.getElementById("juguetes").style.padding="0rem";

  
      document.getElementById("domos").style.border="none";
      document.getElementById("domos").style.color="white";
      document.getElementById("domos").style.padding="0rem";

  
      document.getElementById("inicio").style.border="none";
      document.getElementById("inicio").style.color="white";
      document.getElementById("inicio").style.padding="0rem";

    
}
}
